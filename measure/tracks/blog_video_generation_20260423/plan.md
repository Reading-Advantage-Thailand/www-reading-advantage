# Implementation Plan: Blog-to-Video Generation Pipeline (Rev 2)

## Phase 1: Pipeline Architecture & Schema Design
- [x] Task: Rewrite `measure/tracks/blog_video_generation_20260423/spec.md` with new JSON segment schema and single-pass Revideo approach.
- [x] Task: Rewrite `scripts/generate-blog-video.ts` with per-segment generation (parse → JSON segments → per-segment TTS + images → single-pass Revideo render).
- [x] Task: Define JSON segment schema with `text` + `imageDescription` fields.
- [x] Task: Measure - User Manual Verification 'Pipeline Architecture & Schema Design' (Protocol in workflow.md) [checkpoint: ec4a731]

## Phase 2: Asset Generation & Composition Engine
- [x] Task: Implement per-segment TTS generation (`mmx speech synthesize` per segment text).
- [x] Task: Implement per-segment image generation (`mmx image generate` per imageDescription, 9:16, "no text" prompt).
- [x] Task: Implement single-pass Revideo rendering with per-segment durations passed to scene.
- [x] Task: Fix audio cutoff: extend video to match audio duration before mux.
- [x] Task: Measure - User Manual Verification 'Asset Generation & Composition Engine' (Protocol in workflow.md) [checkpoint: ec4a731]

## Phase 3: Background Music & Polish
- [x] Task: Source soft jingle for background music (`public/audio/reading-advantage-jingle.mp3`).
- [x] Task: Mix background jingle at 10% volume underneath full video using ffmpeg.
- [x] Task: Verify subtitle readability with brand-colored box behind white text.
- [x] Task: Test end-to-end with Thai blog post (Day 5) — 68.8s video, perfect audio sync.
- [ ] Task: Test end-to-end with English blog post.
- [ ] Task: Measure - User Manual Verification 'Background Music & Polish' (Protocol in workflow.md)

## Phase 4: Regeneration & Documentation
- [x] Task: Regenerate Day 5 video using the new pipeline.
- [ ] Task: Add npm script shortcut (e.g. `npm run generate:video -- <blog.md>`).
- [ ] Task: Document usage in `docs/` or README.
- [x] Task: Commit all track artifacts and mark track complete.
- [ ] Task: Measure - User Manual Verification 'Regeneration & Documentation' (Protocol in workflow.md)
