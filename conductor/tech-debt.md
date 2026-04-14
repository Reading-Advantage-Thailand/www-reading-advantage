# Technical Debt

Known issues, deferred cleanup, and shortcuts taken that will need to be addressed. Entries include the date identified and a priority level.

Priority: **P1** = blocks quality/production, **P2** = degrades DX or UX, **P3** = cleanup/polish.

---

## Open Debt

### [P2] No `sizes` prop on many `fill` images (2026-02)

**Problem:** Multiple `next/image` components using `layout="fill"` or the `fill` prop lack the `sizes` attribute. Without `sizes`, the browser defaults to `100vw` and downloads the largest image variant even on small viewports.

**Files to audit:** All product pages, case-studies page, services pages.

**Resolution:** Add `sizes` prop to every `fill` image. Typical values: `"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`.

---

### [P2] Excessive client component boundaries inflate JS bundle (2026-02)

**Problem:** Several pages remain unnecessarily marked `"use client"` even after the site refactor track. Each `"use client"` boundary forces all child components into the client bundle. The current total JS weight is above target.

**Remaining offenders (as of 2026-02-08):**

- Product pages that only use `useScopedI18n` could be refactored to use the server-side `getScopedI18n` if the locale hook is the only reason for the client directive.

**Resolution:** Audit each `"use client"` page, determine if React state or browser APIs are truly needed, and convert to server component where possible.

---

### [P2] Hero image inconsistency — pricing and about pages share the same unrelated crop (2026-02)

**Problem:** The pricing and about pages reuse the same `students_at_computers.jpg` background image, cropped to show only hands. This looks accidental rather than intentional and reduces visual distinctiveness.

**Resolution:** Source page-specific hero images for both pricing and about. Add to `public/images/` and update the `HeroSection` calls.

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

| Item                                                       | Resolved In                       | Date    |
| ---------------------------------------------------------- | --------------------------------- | ------- |
| `conntainer` typo on pricing page                          | site_refactor_20260207            | 2026-02 |
| Broken `href="#"` on about page CTA                        | site_refactor_20260207            | 2026-02 |
| `ignoreBuildErrors: true` in next.config.ts                | site_refactor_20260207            | 2026-02 |
| Framer Motion `PageTransition` wrapper in marketing layout | site_refactor_20260207            | 2026-02 |
| `services/page.tsx` unnecessarily `"use client"`           | site_refactor_20260207            | 2026-02 |
| `case-studies/page.tsx` unnecessarily `"use client"`       | site_refactor_20260207            | 2026-02 |
| `features/page.tsx` unnecessarily `"use client"`           | site_refactor_20260207            | 2026-02 |
| Emoji icons on features page (accessibility)               | site_refactor_20260207            | 2026-02 |
| Missing test suite — no unit/integration tests             | testing_infrastructure_20260408   | 2026-04 |
| Services pages hard-coded English text                     | services_i18n_completion_20260408 | 2026-04 |
