#!/usr/bin/env tsx
/**
 * Blog-to-Video Generation Pipeline (Rev 3 — Single-Pass Revideo with Per-Segment Assets)
 *
 * Usage:
 *   npx tsx scripts/generate-blog-video.ts <path-to-blog.md> [--segments segments.json]
 *
 * Example:
 *   npx tsx scripts/generate-blog-video.ts src/app/[locale]/(marketing)/blog/posts/th/beyond-the-backpacker.md --segments tmp/day05-segments.json
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import matter from 'gray-matter';
import { renderVideo } from '@revideo/renderer';

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
const FALLBACK_IMAGE_PATH = 'images/logo.jpg';
const JINGLE_PATH = 'audio/reading-advantage-jingle.mp3';

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

function toRevideoAssetPath(assetPath: string): string {
  const normalizedPath = assetPath.replace(/\\/g, '/');
  if (
    normalizedPath.startsWith('http://') ||
    normalizedPath.startsWith('https://') ||
    normalizedPath.startsWith('data:')
  ) {
    return normalizedPath;
  }
  const absolutePath = path.isAbsolute(assetPath) ? assetPath : path.resolve(assetPath);
  const normalizedAbsolutePath = absolutePath.replace(/\\/g, '/');
  const normalizedPublicDir = PUBLIC_DIR_ABS.replace(/\\/g, '/');
  if (
    normalizedAbsolutePath === normalizedPublicDir ||
    normalizedAbsolutePath.startsWith(`${normalizedPublicDir}/`)
  ) {
    return path.relative(PUBLIC_DIR_ABS, absolutePath).replace(/\\/g, '/');
  }
  return normalizedPath.replace(/^\/+/, '');
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

function createTempProjectFile(workDir: string, rangeEnd: number): string {
  const projectPath = path.resolve('revideo', `temp-project-${path.basename(workDir)}.ts`);
  const content = `import {makeProject} from '@revideo/core';
import blogVideo from './scenes/blog-video';

export default makeProject({
  scenes: [blogVideo],
  settings: {
    shared: {
      size: {x: 1080, y: 1920},
      background: '#0a0a0a',
      range: [0, ${rangeEnd}],
    },
    rendering: {
      fps: 8,
      resolutionScale: 0.5,
      exporter: {
        name: '@revideo/core/ffmpeg',
        options: {
          format: 'mp4',
        },
      },
    },
    preview: {
      fps: 8,
      resolutionScale: 0.5,
    },
  },
});
`;
  fs.writeFileSync(projectPath, content);
  return projectPath;
}

function normalizeImageForRender(inputPath: string, outputPath: string): string {
  runCommand(
    `ffmpeg -loglevel error -y -i "${inputPath}" -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" -q:v 2 "${outputPath}"`
  );
  return outputPath;
}

function cleanup(workDir: string, renderOutDirAbs: string, runId: number): void {
  fs.rmSync(workDir, { recursive: true, force: true });
  if (fs.existsSync(renderOutDirAbs)) {
    for (const entry of fs.readdirSync(renderOutDirAbs)) {
      if (entry.includes(String(runId))) {
        fs.rmSync(path.join(renderOutDirAbs, entry), { recursive: true, force: true });
      }
    }
  }
  const revideoDir = path.resolve('revideo');
  if (fs.existsSync(revideoDir)) {
    for (const entry of fs.readdirSync(revideoDir)) {
      if (entry.startsWith('temp-project-') && entry.endsWith('.ts')) {
        fs.rmSync(path.join(revideoDir, entry), { force: true });
      }
    }
  }
}

function mixBackgroundMusic(videoPath: string, jinglePath: string, outputPath: string): void {
  if (!jinglePath || !fs.existsSync(jinglePath)) {
    fs.copyFileSync(videoPath, outputPath);
    return;
  }

  const videoDuration = getMediaDurationSeconds(videoPath) ?? 60;

  runCommand(
    `ffmpeg -loglevel error -y -i "${videoPath}" -i "${jinglePath}" -filter_complex "
      [1:a]aloop=loop=-1:size=2e+09,volume=0.10,afade=t=out:st=${Math.max(0, videoDuration - 2).toFixed(1)}:d=2[bgm];
      [0:a][bgm]amix=inputs=2:duration=first:dropout_transition=3[amix]
    " -map 0:v -map "[amix]" -c:v copy -c:a aac -b:a 192k -shortest "${outputPath}" 2>/dev/null`
  );
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
  const renderOutDirAbs = path.resolve('.revideo-output');
  fs.mkdirSync(workDir, { recursive: true });
  fs.mkdirSync(renderOutDirAbs, { recursive: true });

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

  try {
    // ========== STEP 2: Generate per-segment assets ==========
    const segmentAssets: { audio: string; image: string; duration: number; audioDuration: number }[] = [];
    const coverImageAbsPath = resolveCoverImagePath(meta.coverImage, blogAbsPath);

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
        console.log(`   Audio: ${audioDuration.toFixed(2)}s, Segment: ${segmentDuration.toFixed(2)}s`);

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

        // Normalize image
        const normalizedImagePath = path.join(segmentDir, 'norm-image.jpg');
        normalizeImageForRender(imagePath, normalizedImagePath);

        segmentAssets.push({ audio: audioPath, image: normalizedImagePath, duration: segmentDuration, audioDuration });
      }
    } else {
      console.log('\n⏭️  Skipping asset generation (--skip-assets)');
      for (let i = 0; i < segments.length; i++) {
        const segmentDir = path.join(workDir, `segment-${i}`);
        fs.mkdirSync(segmentDir, { recursive: true });
        const audioPath = path.join(segmentDir, 'audio.mp3');
        const imagePath = path.join(segmentDir, 'norm-image.jpg');
        runCommand(`ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 5 -q:a 9 -acodec libmp3lame "${audioPath}" -y 2>/dev/null`);
        if (coverImageAbsPath && fs.existsSync(coverImageAbsPath)) {
          fs.copyFileSync(coverImageAbsPath, imagePath);
        } else {
          runCommand(`ffmpeg -f lavfi -i "color=c=#1e3a5f:s=1080x1920" -frames:v 1 -q:v 2 "${imagePath}" -y 2>/dev/null`);
        }
        segmentAssets.push({ audio: audioPath, image: imagePath, duration: 5.5, audioDuration: 5 });
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

    // ========== STEP 4: Render single-pass video with Revideo ==========
    console.log('\n🎬 Rendering video with Revideo...');

    const ctaText = lang === 'th'
      ? 'อ่านบทความฉบับเต็มได้ในลิงก์ด้านล่าง!'
      : 'Read the full article — link in description!';

    const videoSegments = segments.map((seg, i) => ({
      text: seg.text,
      imagePath: toRevideoAssetPath(segmentAssets[i].image),
    }));

    const segmentDurations = segmentAssets.map(a => a.duration);
    const totalContentDuration = segmentDurations.reduce((sum, d) => sum + d, 0);
    const introDuration = 3;
    const outroDuration = 3;
    const totalVideoDuration = introDuration + totalContentDuration + outroDuration;

    const fps = 8;
    const rangeEnd = Math.ceil((totalVideoDuration + 3) * fps) + 30;
    const tempProjectPath = createTempProjectFile(workDir, rangeEnd);

    const renderFileName = `render-${runId}.mp4`;
    const renderedPath = await renderVideo({
      projectFile: tempProjectPath,
      variables: {
        logoPath: FALLBACK_IMAGE_PATH,
        title: meta.title,
        segments: videoSegments,
        segmentDurations: segmentDurations,
        audioPath: '',
        narrationDuration: totalContentDuration,
        ctaText,
        introDuration,
        outroDuration,
        brandColor: '#2563eb',
      },
      settings: {
        outFile: renderFileName,
        outDir: renderOutDirAbs,
        logProgress: true,
        puppeteer: {
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--single-process'],
        },
      },
    });

    // Upscale from 540x960 to 1080x1920
    let sourceOutputPath = path.resolve(renderedPath);
    const scaledOutputPath = path.join(renderOutDirAbs, `render-scaled-${runId}.mp4`);
    runCommand(
      `ffmpeg -loglevel error -y -i "${sourceOutputPath}" -vf "scale=1080:1920:flags=lanczos" -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p "${scaledOutputPath}" 2>/dev/null`
    );
    sourceOutputPath = scaledOutputPath;

    // ========== STEP 5: Mux narration audio ==========
    console.log('\n🔗 Muxing narration audio...');
    const mergedOutputPath = path.join(renderOutDirAbs, `merged-${runId}.mp4`);

    // Ensure video is at least as long as audio
    const videoDuration = getMediaDurationSeconds(sourceOutputPath) ?? 0;
    let videoForMux = sourceOutputPath;
    if (videoDuration > 0 && videoDuration < totalAudioDuration + 1) {
      const extendedPath = path.join(renderOutDirAbs, `extended-${runId}.mp4`);
      runCommand(
        `ffmpeg -loglevel error -y -i "${sourceOutputPath}" -vf "tpad=stop_mode=clone:stop_duration=${(totalAudioDuration + 1 - videoDuration).toFixed(3)}" -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p "${extendedPath}" 2>/dev/null`
      );
      videoForMux = extendedPath;
    }

    runCommand(
      `ffmpeg -loglevel error -y -i "${videoForMux}" -i "${fullAudioPath}" -t ${(totalAudioDuration + 2).toFixed(3)} -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -movflags +faststart "${mergedOutputPath}" 2>/dev/null`
    );
    sourceOutputPath = mergedOutputPath;

    // ========== STEP 6: Mix background jingle ==========
    console.log('\n🎵 Mixing background jingle...');
    const jingleAbsPath = path.resolve(PUBLIC_DIR_ABS, JINGLE_PATH);
    const outDirAbs = path.resolve(outDir);
    fs.mkdirSync(outDirAbs, { recursive: true });
    const outputFileName = `${slug}.mp4`;
    const finalOutputPath = path.join(outDirAbs, outputFileName);

    mixBackgroundMusic(sourceOutputPath, jingleAbsPath, finalOutputPath);

    const finalDuration = getMediaDurationSeconds(finalOutputPath);
    console.log(`\n✅ Video rendered successfully!`);
    console.log(`   Output: ${finalOutputPath}`);
    console.log(`   Duration: ${finalDuration?.toFixed(1) ?? '?'}s`);
    console.log(`   Resolution: 1080x1920`);
    console.log(`   Segments: ${segments.length}`);

    if (finalDuration && finalDuration >= totalAudioDuration) {
      console.log(`   Audio cutoff check: PASSED (${finalDuration.toFixed(1)}s >= ${totalAudioDuration.toFixed(1)}s audio)`);
    } else {
      console.warn(`   ⚠️ Audio cutoff check: WARNING (${finalDuration?.toFixed(1) ?? '?'}s < ${totalAudioDuration.toFixed(1)}s audio)`);
    }

    console.log('\n🎉 Done!\n');
  } finally {
    if (!keepIntermediates) {
      cleanup(workDir, renderOutDirAbs, runId);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
