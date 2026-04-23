# Blog-to-Video Generation Pipeline

Quick reference for this track.

## Files

- **Specification:** [spec.md](./spec.md)
- **Implementation Plan:** [plan.md](./plan.md)
- **Metadata:** [metadata.json](./metadata.json)

## Key Assets Created

- `public/audio/thai-tts-test.mp3` — Thai TTS validation file
- `revideo/project.ts` — Revideo project config (9:16, optimized render profile)
- `revideo/scenes/blog-video.tsx` — Main video composition scene
- `scripts/generate-blog-video.ts` — Full pipeline orchestration script with deterministic ffmpeg fallback
- `scripts/test-revideo.ts` — Revideo render test script

## Commands

```bash
# Test Thai TTS
mmx speech synthesize --text "การศึกษาที่ดี..." --out public/audio/thai-tts-test.mp3

# Dry-run pipeline (parse + script only)
npx tsx scripts/generate-blog-video.ts <blog.md> --skip-assets --skip-render

# Full pipeline (requires fixing P1 ffmpeg format debt first)
npx tsx scripts/generate-blog-video.ts <blog.md>

# Deterministic production workaround when Revideo EOF crash appears
npx tsx scripts/generate-blog-video.ts <blog.md> --skip-script-ai --force-ffmpeg-fallback

# Preserve intermediates for inspection/debug
npx tsx scripts/generate-blog-video.ts <blog.md> --force-ffmpeg-fallback --keep-intermediates
```

## Blockers

- **P1:** Revideo long-export EOF crash (`stream.push() after EOF`) remains intermittent. See [tech-debt.md](../../tech-debt.md).
- **External:** MiniMax quotas can block fresh speech/image generation (`usage limit exceeded`), which prevents full re-runs until quota resets.

## Latest Fixes (2026-04-23)

- Added Thai subtitle wrapping in ffmpeg fallback output using word segmentation with truncation safeguards.
- Added logo letterboxing helper with top/bottom padding color `#38bdf8` for intro/outro frames.
- Added robust mux logic that pads visuals before merge when visuals are shorter than narration, preventing narration cutoff.
- Added default run cleanup of temp + generated per-run assets (`--keep-intermediates` opt-out).
