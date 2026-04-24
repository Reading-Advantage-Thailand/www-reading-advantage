# Implementation Plan: Blog-to-Video Generation Pipeline

## Phase 1: Asset Validation & Tooling Setup
- [x] Task: Validate Thai TTS by generating a test audio file (`public/audio/thai-tts-test.mp3`) from a Thai blog sentence using `mmx speech synthesize`.
- [x] Task: Install Revideo dependencies (`@revideo/cli`, `@revideo/core`, `@revideo/2d`, `@revideo/renderer`, `@revideo/ui`, `tsx`).
- [x] Task: Create Revideo project scaffold (`revideo/project.ts`, `revideo/scenes/blog-video.tsx`).
- [ ] Task: Conductor - User Manual Verification 'Asset Validation & Tooling Setup' (Protocol in workflow.md)

## Phase 2: Pipeline Script Development
- [x] Task: Create `scripts/generate-blog-video.ts` to orchestrate the full pipeline (parse markdown → generate script → generate audio → generate images → render video).
- [x] Task: Implement mmx text chat integration for TikTok-style script generation with JSON output parsing.
- [x] Task: Implement mmx speech synthesize integration for narration audio.
- [x] Task: Implement mmx image generate integration for per-segment background images (9:16).
- [x] Task: Fix Revideo rendering for production use (1-2 minute videos). Re-added upscale step from 540×960 → 1080×1920 before narration mux and verified end-to-end output metadata (`1080x1920` H.264 + AAC) via `ffprobe`.
- [ ] Task: Conductor - User Manual Verification 'Pipeline Script Development' (Protocol in workflow.md)

## Phase 3: Video Composition Polish
- [ ] Task: Refine Revideo scene animations (text slide-ins, logo animation, CTA screen).
- [ ] Task: Add subtitle/caption support or verify text readability on generated images.
- [ ] Task: Test end-to-end with both English and Thai blog posts.
- [ ] Task: Conductor - User Manual Verification 'Video Composition Polish' (Protocol in workflow.md)

## Phase 4: Integration & Documentation
- [ ] Task: Add npm script shortcut (e.g., `npm run generate:video -- <blog.md>`).
- [ ] Task: Document usage in `docs/` or README.
- [ ] Task: Commit all track artifacts and mark track complete.
- [ ] Task: Conductor - User Manual Verification 'Integration & Documentation' (Protocol in workflow.md)
