#!/usr/bin/env tsx
/**
 * Blog-to-Video Generation Pipeline (Rev 4 — ffmpeg-only multi-clip)
 *
 * Each part (intro, segment, outro) is generated as an exact-duration
 * video clip via ffmpeg. Clips are concatenated with precise frame-level
 * control. No Revideo timing drift.
 *
 * Usage:
 *   npx tsx scripts/generate-blog-video.ts <path-to-blog.md> [--segments segments.json]
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import matter from 'gray-matter';

interface Segment {
  text: string;
  imageDescription: string;
}

interface BlogMeta {
  title: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
}

const PUBLIC_DIR_ABS = path.resolve('public');
const FALLBACK_IMAGE_PATH = path.resolve(PUBLIC_DIR_ABS, 'images/logo.jpg');
const JINGLE_PATH = path.resolve(PUBLIC_DIR_ABS, 'audio/reading-advantage-jingle.mp3');
const THAI_FONT = '/usr/share/fonts/truetype/noto/NotoSansThai-Bold.ttf';

const args = process.argv.slice(2);
const blogPath = args[0];
const outDir = args.includes('--out-dir')
  ? args[args.indexOf('--out-dir') + 1]
  : 'public/videos';
const segmentsPath = args.includes('--segments')
  ? args[args.indexOf('--segments') + 1]
  : null;
const skipAssets = args.includes('--skip-assets');
const keepIntermediates = args.includes('--keep-intermediates');

if (!blogPath) {
  console.error('Error: Please provide a path to a blog markdown file.');
  console.error('Usage: npx tsx scripts/generate-blog-video.ts <path-to-blog.md> [--segments segments.json]');
  process.exit(1);
}

const blogAbsPath = path.resolve(blogPath);
if (!fs.existsSync(blogAbsPath)) {
  console.error(`Error: Blog file not found: ${blogAbsPath}`);
  process.exit(1);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u0E00-\u0E7F]+/g, '-')
    .replace(/^-|-$/g, '');
}

function runCommand(cmd: string): string {
  console.log(`> ${cmd}`);
  return execSync(cmd, { encoding: 'utf-8', cwd: process.cwd() });
}

function getMediaDurationSeconds(filePath: string): number | null {
  try {
    const output = runCommand(
      `ffprobe -v error -show_entries format=duration -of default=nokey=1:noprint_wrappers=1 "${filePath}"`
    ).trim();
    const duration = Number(output);
    if (Number.isFinite(duration) && duration > 0) {
      return duration;
    }
  } catch (error) {
    console.warn(`   Failed to read media duration for ${filePath}`);
  }
  return null;
}

function detectLanguage(text: string): 'th' | 'en' {
  return /[\u0E00-\u0E7F]/.test(text) ? 'th' : 'en';
}

function resolveCoverImagePath(coverImage: string | undefined, blogAbsPath: string): string | null {
  if (!coverImage) return null;
  const trimmed = coverImage.trim();
  if (!trimmed || trimmed.startsWith('http://') || trimmed.startsWith('https://')) return null;
  if (trimmed.startsWith('/')) {
    const publicPath = path.resolve(PUBLIC_DIR_ABS, trimmed.replace(/^\/+/, ''));
    return fs.existsSync(publicPath) ? publicPath : null;
  }
  const candidates = [
    path.resolve(path.dirname(blogAbsPath), trimmed),
    path.resolve(PUBLIC_DIR_ABS, trimmed),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function findFirstImageFile(rootDir: string): string | null {
  const allowedExts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);
  const queue: string[] = [rootDir];
  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || !fs.existsSync(current)) continue;
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const absoluteEntryPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        queue.push(absoluteEntryPath);
        continue;
      }
      if (allowedExts.has(path.extname(entry.name).toLowerCase())) {
        return absoluteEntryPath;
      }
    }
  }
  return null;
}

/** Word-wrap text for ffmpeg drawtext (newline separated). */
function wrapText(text: string, maxCharsPerLine: number, maxLines: number): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (!cleaned) return '';

  const charCount = (value: string) => Array.from(value).length;
  let tokens: string[];

  if (typeof Intl !== 'undefined' && typeof Intl.Segmenter !== 'undefined') {
    const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
    const segmented = Array.from(segmenter.segment(cleaned), part => part.segment).filter(Boolean);
    tokens = segmented.length > 0 ? segmented : cleaned.split(/(\s+)/).filter(Boolean);
  } else {
    tokens = cleaned.split(/(\s+)/).filter(Boolean);
  }

  if (tokens.length === 1 && !/\s/.test(tokens[0])) {
    tokens = Array.from(tokens[0]);
  }

  const lines: string[] = [];
  let currentLine = '';

  for (const token of tokens) {
    const nextLine = `${currentLine}${token}`;
    if (currentLine && charCount(nextLine) > maxCharsPerLine) {
      lines.push(currentLine.trim());
      currentLine = token.trimStart();
    } else {
      currentLine = nextLine;
    }
  }

  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }

  if (lines.length > maxLines) {
    const trimmed = lines.slice(0, maxLines);
    const lastLine = trimmed[maxLines - 1];
    const clipped = Array.from(lastLine).slice(0, Math.max(0, maxCharsPerLine - 1)).join('').trimEnd();
    trimmed[maxLines - 1] = `${clipped}…`;
    return trimmed.join('\n');
  }

  return lines.join('\n');
}

/** Write text to a temp file for ffmpeg drawtext textfile option (avoids shell escaping hell). */
function writeTextFile(text: string, filePath: string): void {
  fs.writeFileSync(filePath, text, 'utf-8');
}

/** Create intro clip: dark bg + logo + title. */
function createIntroClip(
  logoPath: string,
  title: string,
  duration: number,
  outputPath: string,
  fontPath: string
): void {
  const wrappedTitle = wrapText(title, 22, 3);

  // Create a static intro image first
  const introImagePath = outputPath.replace('.mp4', '.jpg');
  const titleFile = outputPath.replace('.mp4', '-title.txt');
  writeTextFile(wrappedTitle, titleFile);

  runCommand(
    `ffmpeg -loglevel error -y -f lavfi -i "color=c=#0a0a0a:s=1080x1920" -i "${logoPath}" -filter_complex "
      [1:v]scale=400:400[logo];
      [0:v][logo]overlay=(W-w)/2:(H-h)/2-400:format=auto[tmp];
      [tmp]drawtext=fontfile=${fontPath}:textfile='${titleFile}':fontcolor=white:fontsize=62:x=(w-text_w)/2:y=950:line_spacing=14
    " -frames:v 1 "${introImagePath}" 2>/dev/null`
  );

  // Convert to video clip with exact duration
  runCommand(
    `ffmpeg -loglevel error -y -loop 1 -i "${introImagePath}" -t ${duration.toFixed(3)} -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -an "${outputPath}" 2>/dev/null`
  );
}

/** Create outro clip: brand bg + logo + CTA. */
function createOutroClip(
  logoPath: string,
  ctaText: string,
  duration: number,
  outputPath: string,
  fontPath: string,
  brandColor: string = '#2563eb'
): void {
  const wrappedCta = wrapText(ctaText, 22, 3);

  // Convert hex to ffmpeg color (0xRRGGBB)
  const ffmpegColor = brandColor.replace('#', '0x');

  const outroImagePath = outputPath.replace('.mp4', '.jpg');
  const ctaFile = outputPath.replace('.mp4', '-cta.txt');
  writeTextFile(wrappedCta, ctaFile);

  runCommand(
    `ffmpeg -loglevel error -y -f lavfi -i "color=c=${ffmpegColor}:s=1080x1920" -i "${logoPath}" -filter_complex "
      [1:v]scale=300:300[logo];
      [0:v][logo]overlay=(W-w)/2:(H-h)/2-350:format=auto[tmp];
      [tmp]drawtext=fontfile=${fontPath}:textfile='${ctaFile}':fontcolor=white:fontsize=56:x=(w-text_w)/2:y=850:line_spacing=16
    " -frames:v 1 "${outroImagePath}" 2>/dev/null`
  );

  runCommand(
    `ffmpeg -loglevel error -y -loop 1 -i "${outroImagePath}" -t ${duration.toFixed(3)} -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -an "${outputPath}" 2>/dev/null`
  );
}

/** Create segment clip: image + dark overlay + text box. */
function createSegmentClip(
  imagePath: string,
  text: string,
  duration: number,
  outputPath: string,
  fontPath: string,
  brandColor: string = '#2563eb'
): void {
  const wrappedText = wrapText(text, 24, 4);
  const textFile = outputPath.replace('.mp4', '-text.txt');
  writeTextFile(wrappedText, textFile);

  // Build drawtext expression with box background
  const drawtextOpts = [
    `fontfile=${fontPath}`,
    `textfile='${textFile}'`,
    `fontcolor=white`,
    `fontsize=44`,
    `x=(w-text_w)/2`,
    `y=(h-text_h)/2`,
    `line_spacing=14`,
    `box=1`,
    `boxcolor=${brandColor}@0.9`,
    `boxborderw=24`,
  ].join(':');

  runCommand(
    `ffmpeg -loglevel error -y -loop 1 -i "${imagePath}" -filter_complex "
      [0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[img];
      [img]drawbox=color=black@0.45:t=fill[bg];
      [bg]drawtext=${drawtextOpts}
    " -t ${duration.toFixed(3)} -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -an "${outputPath}" 2>/dev/null`
  );
}

/** Concatenate multiple video clips into one. */
function concatClips(clips: string[], outputPath: string): void {
  // Create concat demuxer file with absolute paths
  const listPath = outputPath.replace('.mp4', '-list.txt');
  const listContent = clips
    .map(c => `file '${path.resolve(c).replace(/'/g, "'\\''")}'`)
    .join('\n');
  fs.writeFileSync(listPath, listContent);

  runCommand(
    `ffmpeg -loglevel error -y -f concat -safe 0 -i "${listPath}" -c copy "${outputPath}" 2>/dev/null`
  );
}

/** Mix background jingle with video. Uses two-step approach for reliability. */
function mixBackgroundMusic(videoPath: string, jinglePath: string, outputPath: string, workDir: string): void {
  if (!jinglePath || !fs.existsSync(jinglePath)) {
    fs.copyFileSync(videoPath, outputPath);
    return;
  }

  const videoDuration = getMediaDurationSeconds(videoPath) ?? 60;
  const jingleLoopPath = path.join(workDir, 'jingle-loop.mp3');
  const mixedAudioPath = path.join(workDir, 'mixed-audio.mp3');

  // Step 1: Loop jingle to match video duration with fade-out
  runCommand(
    `ffmpeg -loglevel error -y -stream_loop -1 -i "${jinglePath}" -t ${videoDuration.toFixed(1)} -af "volume=0.10,afade=t=out:st=${Math.max(0, videoDuration - 2).toFixed(1)}:d=2" -c:a libmp3lame -q:a 2 "${jingleLoopPath}" 2>/dev/null`
  );

  // Step 2: Extract video's audio and mix with jingle
  runCommand(
    `ffmpeg -loglevel error -y -i "${videoPath}" -i "${jingleLoopPath}" -filter_complex "[0:a][1:a]amix=inputs=2:duration=first:dropout_transition=3" -c:a libmp3lame -q:a 2 "${mixedAudioPath}" 2>/dev/null`
  );

  // Step 3: Replace audio in video
  runCommand(
    `ffmpeg -loglevel error -y -i "${videoPath}" -i "${mixedAudioPath}" -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -movflags +faststart "${outputPath}" 2>/dev/null`
  );
}

function cleanup(workDir: string): void {
  if (fs.existsSync(workDir)) {
    fs.rmSync(workDir, { recursive: true, force: true });
  }
}

async function main() {
  console.log(`\n📄 Parsing blog: ${blogAbsPath}`);
  const raw = fs.readFileSync(blogAbsPath, 'utf-8');
  const parsed = matter(raw);
  const meta = parsed.data as BlogMeta;
  const lang = detectLanguage(meta.title || '');

  const slug = slugify(meta.title || 'blog-video');
  const runId = Date.now();
  const workDir = path.join('tmp', `blog-video-${runId}`);
  fs.mkdirSync(workDir, { recursive: true });

  console.log(`   Title: ${meta.title}`);
  console.log(`   Language: ${lang}`);

  // ========== STEP 1: Load or generate segments ==========
  let segments: Segment[] = [];

  if (segmentsPath && fs.existsSync(segmentsPath)) {
    console.log(`\n📋 Loading segments from ${segmentsPath}`);
    const segmentsRaw = fs.readFileSync(segmentsPath, 'utf-8');
    const parsedSegments = JSON.parse(segmentsRaw);
    if (Array.isArray(parsedSegments)) {
      segments = parsedSegments
        .filter((s: any) => s && typeof s.text === 'string' && typeof s.imageDescription === 'string')
        .map((s: any) => ({
          text: s.text.trim(),
          imageDescription: s.imageDescription.trim(),
        }));
    }
  }

  if (segments.length === 0) {
    console.log('\n⚠️ No segments provided. Falling back to blog paragraph extraction.');
    const paragraphs = parsed.content
      .replace(/#{1,6}\s+/g, '')
      .split(/\n\s*\n/)
      .map(s => s.replace(/[#*_\-]/g, ' ').trim())
      .filter(s => s.length > 20 && s.length < 200);
    segments = paragraphs.slice(0, 10).map(text => ({
      text: text.slice(0, 150),
      imageDescription: `A cinematic educational illustration related to: ${meta.title}. No text, no words, no letters.`,
    }));
  }

  console.log(`   Using ${segments.length} segments`);
  segments.forEach((s, i) => console.log(`   ${i + 1}. ${s.text.slice(0, 60)}...`));

  const fontPath = lang === 'th' && fs.existsSync(THAI_FONT) ? THAI_FONT : THAI_FONT;
  const logoPath = fs.existsSync(FALLBACK_IMAGE_PATH) ? FALLBACK_IMAGE_PATH : '';
  const coverImageAbsPath = resolveCoverImagePath(meta.coverImage, blogAbsPath);

  try {
    // ========== STEP 2: Generate per-segment assets ==========
    const segmentAssets: { audio: string; image: string; audioDuration: number; segmentDuration: number }[] = [];

    if (!skipAssets) {
      for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        const segmentDir = path.join(workDir, `segment-${i}`);
        fs.mkdirSync(segmentDir, { recursive: true });

        // Generate TTS audio
        console.log(`\n🎙️  Segment ${i + 1}: Generating audio...`);
        const audioPath = path.join(segmentDir, 'audio.mp3');
        try {
          runCommand(
            `timeout 120s mmx speech synthesize --text "${segment.text.replace(/"/g, '\\"')}" --out ${audioPath} --quiet`
          );
        } catch (e) {
          console.warn(`   Failed to generate audio, creating silent audio.`);
          runCommand(`ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 5 -q:a 9 -acodec libmp3lame "${audioPath}" -y 2>/dev/null`);
        }

        const audioDuration = getMediaDurationSeconds(audioPath) ?? 5;
        const segmentDuration = audioDuration + 0.5;
        console.log(`   Audio: ${audioDuration.toFixed(2)}s, Segment video: ${segmentDuration.toFixed(2)}s`);

        // Generate background image
        console.log(`🖼️  Segment ${i + 1}: Generating image...`);
        const imagePath = path.join(segmentDir, 'image.jpg');
        const imagePrompt = `${segment.imageDescription}. Bright colors, modern cinematic style, 9:16 vertical composition, absolutely no text, no words, no letters, no signs, no labels.`;
        try {
          runCommand(
            `timeout 120s mmx image generate --prompt "${imagePrompt.replace(/"/g, '\\"')}" --aspect-ratio 9:16 --n 1 --out-dir ${segmentDir} --out-prefix img --quiet`
          );
          const generatedImage = findFirstImageFile(segmentDir);
          if (generatedImage) {
            fs.renameSync(generatedImage, imagePath);
          } else {
            throw new Error('No image generated');
          }
        } catch (e) {
          console.warn(`   Failed to generate image, using fallback.`);
          if (coverImageAbsPath && fs.existsSync(coverImageAbsPath)) {
            fs.copyFileSync(coverImageAbsPath, imagePath);
          } else {
            runCommand(`ffmpeg -f lavfi -i "color=c=#1e3a5f:s=1080x1920" -frames:v 1 -q:v 2 "${imagePath}" -y 2>/dev/null`);
          }
        }

        segmentAssets.push({ audio: audioPath, image: imagePath, audioDuration, segmentDuration });
      }
    } else {
      console.log('\n⏭️  Skipping asset generation (--skip-assets)');
      for (let i = 0; i < segments.length; i++) {
        const segmentDir = path.join(workDir, `segment-${i}`);
        fs.mkdirSync(segmentDir, { recursive: true });
        const audioPath = path.join(segmentDir, 'audio.mp3');
        const imagePath = path.join(segmentDir, 'image.jpg');
        runCommand(`ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 5 -q:a 9 -acodec libmp3lame "${audioPath}" -y 2>/dev/null`);
        if (coverImageAbsPath && fs.existsSync(coverImageAbsPath)) {
          fs.copyFileSync(coverImageAbsPath, imagePath);
        } else {
          runCommand(`ffmpeg -f lavfi -i "color=c=#1e3a5f:s=1080x1920" -frames:v 1 -q:v 2 "${imagePath}" -y 2>/dev/null`);
        }
        segmentAssets.push({ audio: audioPath, image: imagePath, audioDuration: 5, segmentDuration: 5.5 });
      }
    }

    // ========== STEP 3: Build full narration audio ==========
    console.log('\n🔊 Building full narration audio...');
    const fullAudioPath = path.join(workDir, 'full-narration.mp3');
    const audioInputs = segmentAssets.map((a, i) => `-i "${a.audio}"`).join(' ');
    const concatFilter = segmentAssets.map((_, i) => `[${i}:a]`).join('') + `concat=n=${segmentAssets.length}:v=0:a=1[a]`;
    runCommand(
      `ffmpeg -loglevel error -y ${audioInputs} -filter_complex "${concatFilter}" -map "[a]" -c:a libmp3lame -q:a 2 "${fullAudioPath}" 2>/dev/null`
    );
    const totalAudioDuration = getMediaDurationSeconds(fullAudioPath) ?? segmentAssets.reduce((sum, a) => sum + a.audioDuration, 0);
    console.log(`   Total audio duration: ${totalAudioDuration.toFixed(2)}s`);

    // ========== STEP 4: Generate video clips via ffmpeg ==========
    console.log('\n🎬 Generating video clips...');
    const clips: string[] = [];
    const introDuration = 3;
    const outroDuration = 3;

    // Intro clip
    const introClipPath = path.join(workDir, 'intro.mp4');
    const ctaText = lang === 'th'
      ? 'อ่านบทความฉบับเต็มได้ในลิงก์ด้านล่าง!'
      : 'Read the full article — link in description!';

    console.log('   Generating intro clip...');
    createIntroClip(logoPath, meta.title, introDuration, introClipPath, fontPath);
    clips.push(introClipPath);

    // Segment clips
    for (let i = 0; i < segments.length; i++) {
      const segmentClipPath = path.join(workDir, `segment-${i}.mp4`);
      console.log(`   Generating segment ${i + 1} clip (${segmentAssets[i].segmentDuration.toFixed(2)}s)...`);
      createSegmentClip(
        segmentAssets[i].image,
        segments[i].text,
        segmentAssets[i].segmentDuration,
        segmentClipPath,
        fontPath
      );
      clips.push(segmentClipPath);
    }

    // Outro clip
    const outroClipPath = path.join(workDir, 'outro.mp4');
    console.log('   Generating outro clip...');
    createOutroClip(logoPath, ctaText, outroDuration, outroClipPath, fontPath);
    clips.push(outroClipPath);

    // ========== STEP 5: Concatenate clips ==========
    console.log('\n🔗 Concatenating clips...');
    const concatPath = path.join(workDir, 'concatenated.mp4');
    concatClips(clips, concatPath);

    const concatDuration = getMediaDurationSeconds(concatPath);
    console.log(`   Concatenated video duration: ${concatDuration?.toFixed(2) ?? '?'}s`);

    // ========== STEP 6: Mux narration audio ==========
    console.log('\n🎙️  Muxing narration audio...');
    const muxedPath = path.join(workDir, 'muxed.mp4');

    // If video is shorter than audio, extend it
    const videoForMux = concatPath;
    const concatVideoDuration = getMediaDurationSeconds(concatPath) ?? 0;
    let extendedVideoPath = concatPath;

    if (concatVideoDuration > 0 && concatVideoDuration < totalAudioDuration) {
      console.log(`   Extending video by ${(totalAudioDuration - concatVideoDuration).toFixed(2)}s to match audio...`);
      extendedVideoPath = path.join(workDir, 'extended.mp4');
      runCommand(
        `ffmpeg -loglevel error -y -i "${concatPath}" -vf "tpad=stop_mode=clone:stop_duration=${(totalAudioDuration - concatVideoDuration + 0.5).toFixed(3)}" -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p "${extendedVideoPath}" 2>/dev/null`
      );
    }

    // Do NOT trim video to audio — video is intentionally longer (intro + buffers + outro)
    runCommand(
      `ffmpeg -loglevel error -y -i "${extendedVideoPath}" -i "${fullAudioPath}" -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -movflags +faststart "${muxedPath}" 2>/dev/null`
    );

    // ========== STEP 7: Upscale to 1080x1920 ==========
    console.log('\n📐 Upscaling to 1080x1920...');
    const scaledPath = path.join(workDir, 'scaled.mp4');
    runCommand(
      `ffmpeg -loglevel error -y -i "${muxedPath}" -vf "scale=1080:1920:flags=lanczos" -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -c:a copy "${scaledPath}" 2>/dev/null`
    );

    // ========== STEP 8: Mix background jingle ==========
    console.log('\n🎵 Mixing background jingle...');
    const outDirAbs = path.resolve(outDir);
    fs.mkdirSync(outDirAbs, { recursive: true });
    const outputFileName = `${slug}.mp4`;
    const finalOutputPath = path.join(outDirAbs, outputFileName);

    mixBackgroundMusic(scaledPath, fs.existsSync(JINGLE_PATH) ? JINGLE_PATH : '', finalOutputPath, workDir);

    const finalDuration = getMediaDurationSeconds(finalOutputPath);
    console.log(`\n✅ Video rendered successfully!`);
    console.log(`   Output: ${finalOutputPath}`);
    console.log(`   Duration: ${finalDuration?.toFixed(1) ?? '?'}s`);
    console.log(`   Resolution: 1080x1920`);
    console.log(`   Segments: ${segments.length}`);

    const durationDiff = (finalDuration ?? 0) - totalAudioDuration;
    if (finalDuration && durationDiff >= -0.5) {
      console.log(`   Audio cutoff check: PASSED (${finalDuration.toFixed(1)}s >= ${totalAudioDuration.toFixed(1)}s audio, diff=${durationDiff.toFixed(2)}s)`);
    } else {
      console.warn(`   ⚠️ Audio cutoff check: WARNING (${finalDuration?.toFixed(1) ?? '?'}s < ${totalAudioDuration.toFixed(1)}s audio, diff=${durationDiff.toFixed(2)}s)`);
    }

    // Verify each segment duration
    console.log('\n📊 Segment alignment check:');
    let cumulativeTime = introDuration;
    for (let i = 0; i < segments.length; i++) {
      const segDuration = segmentAssets[i].segmentDuration;
      const audioDuration = segmentAssets[i].audioDuration;
      console.log(`   Segment ${i + 1}: video=${segDuration.toFixed(2)}s, audio=${audioDuration.toFixed(2)}s, start=${cumulativeTime.toFixed(2)}s`);
      cumulativeTime += segDuration;
    }
    console.log(`   Outro start: ${cumulativeTime.toFixed(2)}s`);

    console.log('\n🎉 Done!\n');
  } finally {
    if (!keepIntermediates) {
      cleanup(workDir);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
