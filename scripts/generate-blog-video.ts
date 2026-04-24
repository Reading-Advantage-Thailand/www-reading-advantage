#!/usr/bin/env tsx
/**
 * Blog-to-Video Generation Pipeline
 *
 * Usage:
 *   npx tsx scripts/generate-blog-video.ts <path-to-blog.md> [options]
 *
 * Example:
 *   npx tsx scripts/generate-blog-video.ts src/app/[locale]/(marketing)/blog/posts/th/future-education-ai.md
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import matter from 'gray-matter';
import { renderVideo } from '@revideo/renderer';

interface Segment {
  text: string;
  imagePath: string;
}

interface BlogMeta {
  title: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
}

const PUBLIC_DIR_ABS = path.resolve('public');
const FALLBACK_IMAGE_PATH = 'images/logo.jpg';

const args = process.argv.slice(2);
const blogPath = args[0];
const outDir = args.includes('--out-dir')
  ? args[args.indexOf('--out-dir') + 1]
  : 'public/videos';
const skipAssets = args.includes('--skip-assets');
const skipRender = args.includes('--skip-render');
const skipScriptAi = args.includes('--skip-script-ai');
const forceFfmpegFallback = args.includes('--force-ffmpeg-fallback');
const keepIntermediates = args.includes('--keep-intermediates');

if (!blogPath) {
  console.error('Error: Please provide a path to a blog markdown file.');
  console.error('Usage: npx tsx scripts/generate-blog-video.ts <path-to-blog.md>');
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

function createTempProjectFile(workDir: string, rangeEnd: number): string {
  // Place temp project in revideo/ so Vite can resolve ./scenes/blog-video correctly
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
  // Ensure consistent 1080x1920 JPG for Revideo to avoid decoder surprises
  runCommand(
    `ffmpeg -loglevel error -y -i "${inputPath}" -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" -q:v 2 "${outputPath}"`
  );
  return outputPath;
}

function findFirstImageFile(rootDir: string): string | null {
  const allowedExts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);
  const queue: string[] = [rootDir];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || !fs.existsSync(current)) {
      continue;
    }

    const entries = fs.readdirSync(current, {withFileTypes: true});
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
  if (!coverImage) {
    return null;
  }

  const trimmed = coverImage.trim();
  if (!trimmed || trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return null;
  }

  if (trimmed.startsWith('/')) {
    const publicPath = path.resolve(PUBLIC_DIR_ABS, trimmed.replace(/^\/+/, ''));
    return fs.existsSync(publicPath) ? publicPath : null;
  }

  const candidates = [
    path.resolve(path.dirname(blogAbsPath), trimmed),
    path.resolve(PUBLIC_DIR_ABS, trimmed),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return null;
}

function createSegmentFallbackImage({
  segmentImgDir,
  segmentIndex,
  coverImageAbsPath,
}: {
  segmentImgDir: string;
  segmentIndex: number;
  coverImageAbsPath: string | null;
}): string {
  const fallbackSources = [
    coverImageAbsPath,
    path.resolve(PUBLIC_DIR_ABS, FALLBACK_IMAGE_PATH),
  ].filter((value): value is string => Boolean(value));
  const outputAbsPath = path.resolve(segmentImgDir, 'scene.jpg');

  for (const sourceAbsPath of fallbackSources) {
    try {
      normalizeImageForRender(sourceAbsPath, outputAbsPath);
      return outputAbsPath;
    } catch (error) {
      console.warn(
        `   Failed to normalize fallback source for segment ${segmentIndex + 1}: ${sourceAbsPath}`,
      );
    }
  }

  throw new Error(`Unable to prepare fallback image for segment ${segmentIndex + 1}`);
}

function formatSrtTime(totalSeconds: number): string {
  const safeSeconds = Math.max(0, totalSeconds);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = Math.floor(safeSeconds % 60);
  const milliseconds = Math.floor((safeSeconds - Math.floor(safeSeconds)) * 1000);

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')},${String(milliseconds).padStart(3, '0')}`;
}

interface FallbackClip {
  imageAbsPath: string;
  text: string;
  duration: number;
}

function wrapCaptionText(text: string, maxCharsPerLine = 22, maxLines = 3): string {
  const cleaned = (text || '').replace(/\s+/g, ' ').trim();
  if (!cleaned) {
    return '';
  }

  const charLength = (value: string) => Array.from(value).length;
  const getSegments = (): string[] => {
    if (typeof Intl !== 'undefined' && typeof Intl.Segmenter !== 'undefined') {
      const segmenter = new Intl.Segmenter('th', {granularity: 'word'});
      const segments = Array.from(segmenter.segment(cleaned), part => part.segment).filter(Boolean);
      if (segments.length > 0) {
        return segments;
      }
    }

    return cleaned.split(/(\s+)/).filter(Boolean);
  };

  let tokens = getSegments();
  if (tokens.length === 1 && !/\s/.test(tokens[0])) {
    tokens = Array.from(tokens[0]);
  }

  const lines: string[] = [];
  let currentLine = '';

  for (const token of tokens) {
    const nextLine = `${currentLine}${token}`;
    if (currentLine && charLength(nextLine) > maxCharsPerLine) {
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
    const last = trimmed[maxLines - 1];
    const shortened = Array.from(last).slice(0, Math.max(0, maxCharsPerLine - 1)).join('').trimEnd();
    trimmed[maxLines - 1] = `${shortened}…`;
    return trimmed.join('\n');
  }

  return lines.join('\n');
}

function prepareLogoFrame(logoAbsPath: string, outputPath: string): string {
  runCommand(
    `ffmpeg -loglevel error -y -i "${logoAbsPath}" -vf "scale=1080:1080:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:0x38bdf8" -frames:v 1 "${outputPath}"`
  );
  return outputPath;
}

function cleanupRunArtifacts({
  workDir,
  assetPublicAbsDir,
  renderOutDirAbs,
  runId,
}: {
  workDir: string;
  assetPublicAbsDir: string;
  renderOutDirAbs: string;
  runId: number;
}) {
  fs.rmSync(workDir, {recursive: true, force: true});
  fs.rmSync(assetPublicAbsDir, {recursive: true, force: true});

  if (fs.existsSync(renderOutDirAbs)) {
    for (const entry of fs.readdirSync(renderOutDirAbs)) {
      if (entry.includes(String(runId))) {
        fs.rmSync(path.join(renderOutDirAbs, entry), {recursive: true, force: true});
      }
    }
  }

  // Clean up temp Revideo project files
  const revideoDir = path.resolve('revideo');
  if (fs.existsSync(revideoDir)) {
    for (const entry of fs.readdirSync(revideoDir)) {
      if (entry.startsWith('temp-project-') && entry.endsWith('.ts')) {
        fs.rmSync(path.join(revideoDir, entry), {force: true});
      }
    }
  }
}

function muxWithNarration({
  visualsPath,
  audioAbsPath,
  outputPath,
  minVisualLeadSeconds = 0.3,
}: {
  visualsPath: string;
  audioAbsPath: string;
  outputPath: string;
  minVisualLeadSeconds?: number;
}) {
  if (!audioAbsPath || !fs.existsSync(audioAbsPath)) {
    fs.copyFileSync(visualsPath, outputPath);
    return;
  }

  let visualsForMux = visualsPath;
  const audioDuration = getMediaDurationSeconds(audioAbsPath);
  const visualsDuration = getMediaDurationSeconds(visualsPath);

  if (
    audioDuration &&
    visualsDuration &&
    visualsDuration < audioDuration + minVisualLeadSeconds
  ) {
    const extendBy = audioDuration + minVisualLeadSeconds - visualsDuration;
    const paddedVisualsPath = path.join(
      path.dirname(visualsPath),
      `visuals-padded-${Date.now()}.mp4`,
    );
    runCommand(
      `ffmpeg -loglevel error -y -i "${visualsPath}" -vf "tpad=stop_mode=clone:stop_duration=${extendBy.toFixed(3)}" -c:v libx264 -preset veryfast -crf 23 -pix_fmt yuv420p "${paddedVisualsPath}"`
    );
    visualsForMux = paddedVisualsPath;
  }

  if (
    audioDuration &&
    visualsDuration &&
    visualsDuration > audioDuration + minVisualLeadSeconds
  ) {
    const targetDuration = audioDuration + minVisualLeadSeconds;
    const trimmedVisualsPath = path.join(
      path.dirname(visualsPath),
      `visuals-trimmed-${Date.now()}.mp4`,
    );
    runCommand(
      `ffmpeg -loglevel error -y -i "${visualsForMux}" -t ${targetDuration.toFixed(3)} -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p "${trimmedVisualsPath}"`
    );
    visualsForMux = trimmedVisualsPath;
  }

  runCommand(
    `ffmpeg -loglevel error -y -i "${visualsForMux}" -i "${audioAbsPath}" -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart "${outputPath}"`
  );
}

function upscaleVisualsForDelivery({
  inputPath,
  outputPath,
}: {
  inputPath: string;
  outputPath: string;
}): string {
  runCommand(
    `ffmpeg -loglevel error -y -i "${inputPath}" -vf "scale=1080:1920:flags=lanczos" -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p "${outputPath}"`
  );
  return outputPath;
}

function renderFallbackVideo({
  clips,
  audioAbsPath,
  outputPath,
  targetDurationSeconds,
  workDir,
}: {
  clips: FallbackClip[];
  audioAbsPath: string;
  outputPath: string;
  targetDurationSeconds: number;
  workDir: string;
}) {
  const fallbackDir = path.resolve(workDir, 'ffmpeg-fallback');
  fs.mkdirSync(fallbackDir, { recursive: true });

  const concatListPath = path.join(fallbackDir, 'concat-list.txt');
  const subtitlesPath = path.join(fallbackDir, 'captions.srt');
  const visualsPath = path.join(fallbackDir, 'visuals.mp4');

  const concatLines: string[] = [];
  let currentTime = 0;
  const srtLines: string[] = [];

  clips.forEach((clip, index) => {
    const escapedImagePath = clip.imageAbsPath.replace(/'/g, "'\\''");
    concatLines.push(`file '${escapedImagePath}'`);
    concatLines.push(`duration ${Math.max(0.1, clip.duration).toFixed(3)}`);

    const start = currentTime;
    currentTime += Math.max(0.1, clip.duration);
    srtLines.push(`${index + 1}`);
    srtLines.push(`${formatSrtTime(start)} --> ${formatSrtTime(currentTime)}`);
    srtLines.push(wrapCaptionText(clip.text));
    srtLines.push('');
  });

  const lastClip = clips[clips.length - 1];
  if (lastClip) {
    const escapedLastPath = lastClip.imageAbsPath.replace(/'/g, "'\\''");
    concatLines.push(`file '${escapedLastPath}'`);
  }

  fs.writeFileSync(concatListPath, concatLines.join('\n'));
  fs.writeFileSync(subtitlesPath, srtLines.join('\n'));

  runCommand(
    `ffmpeg -loglevel error -y -f concat -safe 0 -i "${concatListPath}" -t ${targetDurationSeconds.toFixed(3)} -vf "fps=8,scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,subtitles=${subtitlesPath}" -pix_fmt yuv420p "${visualsPath}"`
  );

  if (audioAbsPath && fs.existsSync(audioAbsPath)) {
    muxWithNarration({
      visualsPath,
      audioAbsPath,
      outputPath,
    });
  } else {
    fs.copyFileSync(visualsPath, outputPath);
  }
}

async function main() {
  console.log(`\n📄 Parsing blog: ${blogAbsPath}`);
  const raw = fs.readFileSync(blogAbsPath, 'utf-8');
  const parsed = matter(raw);
  const meta = parsed.data as BlogMeta;
  const content = parsed.content;

  const slug = slugify(meta.title || 'blog-video');
  const runId = Date.now();
  const assetRunId = `blog-video-${runId}`;
  const workDir = path.join('tmp', assetRunId);
  const assetPublicRelDir = path.join('generated', 'blog-videos', assetRunId).replace(/\\/g, '/');
  const assetPublicAbsDir = path.resolve('public', assetPublicRelDir);
  const renderOutDirAbs = path.resolve('.revideo-output');
  fs.mkdirSync(workDir, { recursive: true });
  fs.mkdirSync(assetPublicAbsDir, { recursive: true });

  console.log(`   Title: ${meta.title}`);
  console.log(`   Work dir: ${workDir}`);
  console.log(`   Asset dir: ${assetPublicAbsDir}`);
  try {
    // ========== STEP 1: Generate video script with mmx text ==========
    console.log('\n🤖 Generating video script with MiniMax...');

  const scriptPrompt = `
You are a TikTok content creator. Summarize the following blog post into a catchy, engaging 60-90 second video script.
The script should have 4-6 short segments, each 1-2 sentences max.
Output ONLY a JSON array of strings, where each string is the text for one video segment.
Make it punchy, energetic, and suitable for a TikTok-style educational video.

Blog Title: ${meta.title}
Blog Excerpt: ${meta.excerpt || ''}
Blog Content:
${content.slice(0, 4000)}

Respond with valid JSON only. Example:
["Segment 1 text","Segment 2 text","Segment 3 text"]
`;

  const promptPath = path.join(workDir, 'script-prompt.txt');
  fs.writeFileSync(promptPath, scriptPrompt);

  let segments: string[] = [];
  try {
    if (skipScriptAi) {
      throw new Error('skip-script-ai enabled');
    }

    const promptFile = path.join(workDir, 'prompt.txt');
    fs.writeFileSync(promptFile, scriptPrompt);
    const scriptJson = runCommand(
      `timeout 90s mmx text chat --message "$(cat ${promptFile})" --json --quiet --output json 2>/dev/null`
    );
    // Parse mmx response format
    const response = JSON.parse(scriptJson);
    let textContent = '';
    if (Array.isArray(response.content)) {
      textContent = response.content
        .filter((c: any) => c.type === 'text')
        .map((c: any) => c.text)
        .join('');
    } else {
      textContent = response.choices?.[0]?.message?.content || response.content || response.text || '';
    }
    // Strip markdown code blocks and extract JSON array
    const cleanText = textContent.replace(/```json\s*|\s*```/g, '');
    const jsonMatch = cleanText.match(/\[[\s\S]*?\]/);
    const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(cleanText);
    segments = Array.isArray(parsed) ? parsed.filter((s: unknown) => typeof s === 'string') : [];
    if (segments.length === 0) throw new Error('Empty segments');
  } catch (e) {
    if (skipScriptAi) {
      console.log('   Skipping AI script generation (--skip-script-ai), using content-based segments.');
    } else {
      console.warn('   Failed to parse AI script, falling back to content-based segments.');
    }
    // Fallback: split content by paragraphs and take first 4-6 meaningful chunks
    const paragraphs = content
      .replace(/#{1,6}\s+/g, '')
      .split(/\n\s*\n/)
      .map(s => s.replace(/[#*_\-]/g, ' ').trim())
      .filter(s => s.length > 20);
    segments = paragraphs.slice(0, 5);
  }

  console.log(`   Generated ${segments.length} segments:`);
  segments.forEach((s, i) => console.log(`   ${i + 1}. ${String(s).slice(0, 80)}...`));

  // ========== STEP 2: Generate TTS audio with mmx speech ==========
  const fullScript = segments.join(' ');
  const audioPath = path.join(assetPublicAbsDir, 'narration.mp3');

  if (!skipAssets) {
    console.log('\n🎙️  Generating narration audio...');
    runCommand(
      `timeout 180s mmx speech synthesize --text "${fullScript.replace(/"/g, '\\"')}" --out ${audioPath} --quiet`
    );
    console.log(`   Audio saved: ${audioPath}`);
  } else {
    console.log('\n⏭️  Skipping audio generation (--skip-assets)');
  }

  // ========== STEP 3: Generate background images with mmx image ==========
  // Revideo assets must resolve from public/ to avoid browser media loading failures.
  const imagePaths: string[] = [];
  const coverImageAbsPath = resolveCoverImagePath(meta.coverImage, blogAbsPath);

  if (!skipAssets) {
    console.log('\n🖼️  Generating background images...');
    for (let i = 0; i < segments.length; i++) {
      const imagePrompt = `A vibrant, cinematic, TikTok-style illustration for an educational video about: ${meta.title}. Scene: ${segments[i].slice(0, 200)}. Bright colors, modern flat design, 9:16 vertical composition, no text.`;
      const segmentImgDir = path.join(assetPublicAbsDir, `segment-${i}`);
      fs.mkdirSync(segmentImgDir, { recursive: true });

      try {
        runCommand(
          `timeout 120s mmx image generate --prompt "${imagePrompt.replace(/"/g, '\\"')}" --aspect-ratio 9:16 --n 1 --out-dir ${segmentImgDir} --out-prefix seg --quiet`
        );
        const generatedImageAbsPath = findFirstImageFile(segmentImgDir);
        if (!generatedImageAbsPath) {
          throw new Error('No image generated');
        }

        const normalizedImageAbsPath = path.resolve(segmentImgDir, 'scene.jpg');
        normalizeImageForRender(generatedImageAbsPath, normalizedImageAbsPath);
        const imagePath = toRevideoAssetPath(normalizedImageAbsPath);
        imagePaths.push(imagePath);
        console.log(`   Segment ${i + 1}: ${imagePath}`);
      } catch (e) {
        console.warn(`   Failed to generate image for segment ${i + 1}, using fallback image.`);
        const fallbackImageAbsPath = createSegmentFallbackImage({
          segmentImgDir,
          segmentIndex: i,
          coverImageAbsPath,
        });
        imagePaths.push(toRevideoAssetPath(fallbackImageAbsPath));
      }
    }
  } else {
    console.log('\n⏭️  Skipping image generation (--skip-assets)');
    for (let i = 0; i < segments.length; i++) {
      const segmentImgDir = path.join(assetPublicAbsDir, `segment-${i}`);
      fs.mkdirSync(segmentImgDir, {recursive: true});
      const fallbackImageAbsPath = createSegmentFallbackImage({
        segmentImgDir,
        segmentIndex: i,
        coverImageAbsPath,
      });
      imagePaths.push(toRevideoAssetPath(fallbackImageAbsPath));
    }
  }

  // ========== STEP 4: Render video with Revideo ==========
  if (!skipRender) {
    console.log('\n🎬 Rendering video with Revideo...');

    const ctaText = 'อ่านบทความฉบับเต็มได้ในลิงก์ด้านล่าง!';
    const outputFileName = `${slug}.mp4`;
    const renderOutputFileName = `render-${runId}.mp4`;
    const outDirAbs = path.resolve(outDir);
    const finalOutputPath = path.join(outDirAbs, outputFileName);
    fs.mkdirSync(outDirAbs, { recursive: true });
    fs.mkdirSync(renderOutDirAbs, { recursive: true });

    // Ensure audio file exists (create silent audio if needed)
    let finalAudioPath = '';
    let narrationDuration = 60;
    const audioAbsPath = path.resolve(audioPath);
    if (fs.existsSync(audioAbsPath)) {
      finalAudioPath = toRevideoAssetPath(audioAbsPath);
      narrationDuration = Math.ceil(getMediaDurationSeconds(audioAbsPath) ?? narrationDuration);
      console.log(`   Audio ready: ${finalAudioPath}`);
    } else {
      console.log('   Creating silent audio file for rendering...');
      const silentPath = path.join(assetPublicAbsDir, 'silent-audio.mp3');
      try {
        runCommand(`ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 60 -q:a 9 -acodec libmp3lame "${silentPath}" -y 2>/dev/null`);
        if (fs.existsSync(silentPath)) {
          finalAudioPath = toRevideoAssetPath(silentPath);
          narrationDuration = Math.ceil(getMediaDurationSeconds(silentPath) ?? narrationDuration);
          console.log(`   Silent audio created: ${finalAudioPath}`);
        }
      } catch (e) {
        console.warn('   Failed to create silent audio, proceeding without audio');
      }
    }

    // Calculate expected duration to decide render strategy
    const introDuration = 3;
    const outroDuration = 3;
    const segmentCount = Math.max(1, segments.length);
    const contentDuration = Math.max(
      segmentCount * 4,
      narrationDuration - introDuration - outroDuration,
    );
    const expectedDurationSeconds = introDuration + contentDuration + outroDuration;
    console.log(`   Expected video duration: ~${expectedDurationSeconds.toFixed(1)}s`);

    const videoSegments: Segment[] = segments.map((text, i) => ({
      text,
      imagePath: imagePaths[i] ?? FALLBACK_IMAGE_PATH,
    }));

    const renderWithFfmpegFallback = () => {
      const introDuration = 3;
      const outroDuration = 3;
      const segmentCount = Math.max(1, videoSegments.length);
      const audioAbsForMerge = finalAudioPath ? path.resolve('public', finalAudioPath) : '';
      const audioDurationSeconds = audioAbsForMerge
        ? (getMediaDurationSeconds(audioAbsForMerge) ?? narrationDuration)
        : narrationDuration;
      const targetVideoDuration = Math.max(60, audioDurationSeconds + 1.5);
      const contentDuration = Math.max(
        segmentCount * 4,
        targetVideoDuration - introDuration - outroDuration,
      );
      const perSegmentDuration = contentDuration / segmentCount;
      const logoAbsPath = path.resolve('public', FALLBACK_IMAGE_PATH);
      const fallbackDir = path.resolve(workDir, 'ffmpeg-fallback');
      fs.mkdirSync(fallbackDir, {recursive: true});
      const introLogoFrame = prepareLogoFrame(
        logoAbsPath,
        path.join(fallbackDir, 'intro-logo-frame.jpg'),
      );
      const outroLogoFrame = prepareLogoFrame(
        logoAbsPath,
        path.join(fallbackDir, 'outro-logo-frame.jpg'),
      );

      const clips: FallbackClip[] = [
        { imageAbsPath: introLogoFrame, text: meta.title || 'Reading Advantage', duration: introDuration },
        ...videoSegments.map(segment => {
          const publicPath = path.resolve('public', segment.imagePath);
          return {
            imageAbsPath: fs.existsSync(publicPath) ? publicPath : path.resolve(segment.imagePath),
            text: segment.text,
            duration: perSegmentDuration,
          };
        }),
        { imageAbsPath: outroLogoFrame, text: ctaText, duration: outroDuration },
      ];

      renderFallbackVideo({
        clips,
        audioAbsPath: audioAbsForMerge,
        outputPath: finalOutputPath,
        targetDurationSeconds: targetVideoDuration,
        workDir,
      });

      console.log(`\n✅ Video rendered successfully (ffmpeg fallback)!`);
      console.log(`   Output: ${finalOutputPath}`);
    };

    if (forceFfmpegFallback) {
      console.log('   Using ffmpeg fallback renderer (--force-ffmpeg-fallback).');
      renderWithFfmpegFallback();
    } else {
      try {
        // Use a temporary project file with an exact frame range to prevent
        // the renderer from signalling EOF before the scene generator finishes.
        const fps = 8;
        const rangeEnd = Math.ceil(expectedDurationSeconds * fps) + 30;
        const tempProjectPath = createTempProjectFile(workDir, rangeEnd);

        const renderedPath = await renderVideo({
          projectFile: tempProjectPath,
          variables: {
            logoPath: FALLBACK_IMAGE_PATH,
            title: meta.title,
            segments: videoSegments,
            audioPath: '',
            narrationDuration,
            ctaText,
            introDuration: 3,
            outroDuration: 3,
            brandColor: '#2563eb',
          },
          settings: {
            outFile: renderOutputFileName,
            outDir: renderOutDirAbs,
            logProgress: true,
            puppeteer: {
              args: ['--no-sandbox', '--disable-setuid-sandbox', '--single-process'],
            },
          },
        });

        let sourceOutputPath = path.resolve(renderedPath);
        const scaledOutputPath = path.join(renderOutDirAbs, `render-scaled-${runId}.mp4`);
        sourceOutputPath = upscaleVisualsForDelivery({
          inputPath: sourceOutputPath,
          outputPath: scaledOutputPath,
        });

        if (finalAudioPath) {
          const audioAbsForMerge = path.resolve('public', finalAudioPath);
          const mergedOutputPath = path.join(renderOutDirAbs, `merged-${runId}.mp4`);
          muxWithNarration({
            visualsPath: sourceOutputPath,
            audioAbsPath: audioAbsForMerge,
            outputPath: mergedOutputPath,
          });
          sourceOutputPath = mergedOutputPath;
        }

        if (sourceOutputPath !== finalOutputPath) {
          fs.copyFileSync(sourceOutputPath, finalOutputPath);
        }

        console.log(`\n✅ Video rendered successfully!`);
        console.log(`   Output: ${finalOutputPath}`);
      } catch (err) {
        console.warn('\n⚠️ Revideo render failed, switching to ffmpeg fallback.');
        console.warn(err);
        renderWithFfmpegFallback();
      }
    }
  } else {
    console.log('\n⏭️  Skipping video render (--skip-render)');
  }

    console.log('\n🎉 Done!\n');
  } finally {
    if (!keepIntermediates) {
      cleanupRunArtifacts({
        workDir,
        assetPublicAbsDir,
        renderOutDirAbs,
        runId,
      });
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
