# Technical Debt

Known issues, deferred cleanup, and shortcuts taken that will need to be addressed. Entries include the date identified and a priority level.

Priority: **P1** = blocks quality/production, **P2** = degrades DX or UX, **P3** = cleanup/polish.

---

## Open Debt

### [P1] Revideo pipeline: missing upscale step after render (2026-04-24)

**Problem:** The Revideo render path in `generate-blog-video.ts` was previously wired to auto-fallback to ffmpeg for any video >60s due to a now-fixed EOF crash. That fallback has been removed — Revideo now handles all durations — but the post-render processing is incomplete. Revideo renders at `resolutionScale: 0.5` (540×960) for speed, and the pipeline needs to upscale the output to 1080×1920 and mux in narration audio before writing the final file. The upscale step was previously present but was removed during a refactor and needs to be re-added.

**Previous entries on this topic were inaccurate. Here is the corrected state as of 2026-04-24:**

- **EOF crash is fixed.** Revideo renders 60s and 120s videos without errors. The `range: [0, 9999]` workaround and per-run temp project files work correctly.
- **Performance at 0.5 scale is acceptable.** Benchmarked on this machine:
  - 60s video (8fps, 540×960): ~105s render
  - 120s video (8fps, 540×960): ~250s render
- **Full-res (1.0 scale) is too slow.** 60s at 1080×1920 takes ~300s; 120s did not complete within 600s. Use 0.5 + upscale instead.
- **The ffmpeg fallback had a path resolution bug** (it prepended `public/` to all image paths, but normalized images were in `tmp/`). This is partially fixed — the code that wrote images to `tmp/` has been removed, and the ffmpeg fallback now checks `fs.existsSync` before resolving. However, the ffmpeg fallback has NOT been tested end-to-end since the fix.

**What needs to happen next (handoff):**

1. **Re-add upscale step in the Revideo render path** (lines ~648-659 of `generate-blog-video.ts`). After Revideo produces the 540×960 MP4 and before muxing narration, run:
   ```
   ffmpeg -y -i "${sourceOutputPath}" -vf "scale=1080:1920:flags=lanczos" -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p "${scaledOutputPath}"
   ```
   Then mux the upscaled video with narration audio.

2. **Test end-to-end** with `--skip-script-ai --skip-assets` using the existing intermediates in `public/generated/blog-videos/blog-video-1777031094587/` (narration + 6 segment images from the last run).

3. **Verify muxing** produces valid 1080×1920 h264 with AAC audio.

4. **Consider the ffmpeg fallback.** It's still in the code as an error-recovery path but hasn't been tested since its path fix. Decide whether to keep it, fix it properly, or remove it.

**Affected Files:**
- `scripts/generate-blog-video.ts` — pipeline script (render path at line ~618)
- `revideo/project.ts` — Revideo project config
- `revideo/scenes/blog-video.tsx` — scene composition

**Blocked Track:** `blog_video_generation_20260423`

---

### [P2] `next.config.ts` only allows `localhost` as image domain (2026-02)

**Problem:** The `images.domains` (or `remotePatterns`) configuration in `next.config.ts` only permits `localhost`. Any production or CDN images from external domains will fail with a 400 error.

**Resolution:** Add the production image domain(s) to `remotePatterns` in `next.config.ts`.

---

### [P3] Tailwind config — verify `shadow-modern` variants (2026-04)

**Problem:** `tailwind.config.ts` defines custom shadows (`shadow-modern`, `shadow-glow`). Previous tech-debt entry incorrectly stated these were unused. They are used across product pages and components. `shadow-modern-lg` is used but may not be defined — needs audit.

**Resolution:** Verify all `shadow-*` variants used in code are defined in config. Remove any truly unused ones.

---

### [P3] Overlapping CSS utilities in `globals.css` (2026-02)

**Problem:** `globals.css` defines `.glass-morphism` and `.hero-glass` with near-identical styles. Additionally, several `@layer utilities` entries duplicate functionality already available via Tailwind classes.

**Resolution:** Consolidate into a single `.glass` utility class, remove duplicates, and replace any remaining uses of `.glass-morphism`/`.hero-glass` in component files.

---

### [P3] `console.log` removal in `next.config.ts` is commented out (2026-02)

**Problem:** The `next.config.ts` contains commented-out code that was intended to remove `console.log` statements from production builds. It is neither active nor deleted.

**Resolution:** Either enable the compiler option or remove the commented code entirely. Do not leave dead configuration.

---

### [P3] Blog section lacks pagination (2026-01)

**Problem:** The blog listing page (`/blog`) renders all posts in a single request. As content grows, this will cause slow page loads and large HTML payloads.

**Resolution:** Implement page-based or cursor-based pagination. The MDX pipeline supports static generation — use `generateStaticParams` with page numbers.

---

### [P3] Inline SVG icons in primary-advantage CTA (2026-04)

**Problem:** `primary-advantage/page.tsx` uses inline `<svg>` elements (email envelope and lightning bolt icons) in the CTA section instead of Lucide React components used everywhere else. Inconsistent icon approach.

**Resolution:** Replace inline SVGs with `Mail` and `Zap` Lucide icons (already imported).

---

## Resolved Debt

| Item                                                       | Resolved In                         | Date    |
| ---------------------------------------------------------- | ----------------------------------- | ------- |
| Hero image inconsistency on pricing and about pages        | hero_image_inconsistency_20260416   | 2026-04 |
| `conntainer` typo on pricing page                          | site_refactor_20260207              | 2026-02 |
| Broken `href="#"` on about page CTA                        | site_refactor_20260207              | 2026-02 |
| `ignoreBuildErrors: true` in next.config.ts                | site_refactor_20260207              | 2026-02 |
| Framer Motion `PageTransition` wrapper in marketing layout | site_refactor_20260207              | 2026-02 |
| `services/page.tsx` unnecessarily `"use client"`           | site_refactor_20260207              | 2026-02 |
| `case-studies/page.tsx` unnecessarily `"use client"`       | site_refactor_20260207              | 2026-02 |
| `features/page.tsx` unnecessarily `"use client"`           | site_refactor_20260207              | 2026-02 |
| Emoji icons on features page (accessibility)               | site_refactor_20260207              | 2026-02 |
| Missing test suite — no unit/integration tests             | testing_infrastructure_20260408     | 2026-04 |
| Services pages hard-coded English text                     | services_i18n_completion_20260408   | 2026-04 |
| Missing `sizes` prop on `fill` images                      | images_sizes_prop_20260414          | 2026-04 |
| Excessive client component boundaries inflate JS bundle    | client_component_reduction_20260415 | 2026-04 |
| Revideo EOF crash on long exports                          | blog_video_generation_20260423      | 2026-04 |
