# Implementation Plan: Blog-to-Video Generation Pipeline (Rev 2)

## Phase 1: Pipeline Architecture & Schema Design
- [~] Task: Rewrite `measure/tracks/blog_video_generation_20260423/spec.md` with new JSON segment schema and ffmpeg composition approach.
- [ ] Task: Rewrite `scripts/generate-blog-video.ts` with per-segment generation (parse → JSON segments → per-segment TTS + images).
- [ ] Task: Implement JSON segment generation prompt with strict imageDescription + "no text" constraint.
- [ ] Task: Measure - User Manual Verification 'Pipeline Architecture & Schema Design' (Protocol in workflow.md)

## Phase 2: Asset Generation & Composition Engine
- [ ] Task: Implement per-segment TTS generation (`mmx speech synthesize` per segment text).
- [ ] Task: Implement per-segment image generation (`mmx image generate` per imageDescription, 9:16, "no text" prompt).
- [ ] Task: Implement ffmpeg-based composition: title card → segments → CTA card, with subtitle overlay per segment.
- [ ] Task: Fix audio cutoff: ensure each segment's video duration ≥ audio duration + 0.5s buffer.
- [ ] Task: Measure - User Manual Verification 'Asset Generation & Composition Engine' (Protocol in workflow.md)

## Phase 3: Background Music & Polish
- [ ] Task: Generate or source a short soft jingle for background music.
- [ ] Task: Mix background jingle at ~15% volume underneath full video using ffmpeg.
- [ ] Task: Verify subtitle readability (font size, color, stroke/shadow for contrast).
- [ ] Task: Test end-to-end with both English and Thai blog posts.
- [ ] Task: Measure - User Manual Verification 'Background Music & Polish' (Protocol in workflow.md)

## Phase 4: Regeneration & Documentation
- [ ] Task: Regenerate Day 5 video using the new pipeline.
- [ ] Task: Add npm script shortcut (e.g. `npm run generate:video -- <blog.md>`).
- [ ] Task: Document usage in `docs/` or README.
- [ ] Task: Commit all track artifacts and mark track complete.
- [ ] Task: Measure - User Manual Verification 'Regeneration & Documentation' (Protocol in workflow.md)
