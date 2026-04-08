# Lessons Learned

Retrospective insights captured after completing tracks, PR merges, and development milestones. Most recent entries at the top.

---

## 2026-02 — Site Refactor Track (site_refactor_20260207)

### What Went Well
- Systematic audit-first approach (REFACTOR.md) gave a clear, prioritised backlog before writing any code.
- Fixing the `conntainer` typo and the `href="#"` broken link were quick wins that immediately improved production quality.
- Re-enabling `ignoreBuildErrors: false` in `next.config.ts` surfaced latent TypeScript errors early, preventing silent regressions from shipping.
- Converting `services/page.tsx`, `case-studies/page.tsx`, and `features/page.tsx` from `"use client"` to server components measurably reduced client-side JS.

### What Could Be Improved
- The initial audit found 3.2 MB of JavaScript on a static marketing site — excessive `"use client"` boundaries had accumulated over many PRs without review. Enforce server-component-first in every future PR.
- Multiple pages had inconsistent color use (violet, emerald, purple) despite a documented brand palette. Need a lint-level check or a pre-PR visual review step.
- Scroll-triggered animations (Framer Motion `whileInView`) made content invisible by default on slow connections. Any animation that hides content initially is a UX regression — use CSS `animation-fill-mode: backwards` with short delays instead.

### Lessons
- Run `npm run build` locally before merging to catch TypeScript errors; do not rely on CI to be the first to catch them.
- The `sizes` prop on Next.js `Image` components must always be set when using `fill` — omitting it causes the browser to fetch the largest image variant unnecessarily.
- Decorative blur blobs (`blur-[100px]`, `animate-pulse-slow`) are expensive GPU compositing operations. Limit to 2-3 per page and use `will-change: transform` sparingly.

---

## 2026-01 — Services Pages Development (services_development_20260114)

### What Went Well
- Navigation integration (header + footer in EN/TH/ZH) was completed cleanly alongside the new pages.
- Using `IMPLEMENTATION-STATUS.md` inside the page directory as a work-in-progress checklist proved useful for async handoff.

### What Could Be Improved
- Both `blended-learning/page.tsx` and `managed-service/page.tsx` shipped with hard-coded English text despite locale files being prepared. The pages were technically "done" but not production-ready for TH/ZH users.
- The mismatch between `useScopedI18n("pages.services")` and the intended `useScopedI18n("pages.blendedLearning")` scope went undetected until review.

### Lessons
- Never mark a task complete if i18n strings are still hard-coded. The locale files and the component must be wired together in the same PR.
- Use the i18n verify script (`npm run i18n:verify`) as a mandatory pre-commit check whenever new locale keys are added.

---

## 2026-01 — Product Page Iterations (Primary Advantage, Math Advantage)

### Lessons
- Must follow the issue-executor workflow exactly to get AI-assisted planning benefits — manual implementation works but misses context synthesis.
- Product team feedback integration is crucial — always check the products overview page for the latest copy rather than working from memory or assumptions.
- Product-specific image assets (`public/images/<product-name>/`) need to exist before implementing hero sections. Placeholder images cause layout shifts; plan image delivery in the same sprint as the component.

---

## General Patterns

### i18n
- Run `npm run i18n:verify` after every locale file change.
- Add new locale keys to EN, TH, and ZH in the same commit — never leave TH/ZH as TODO.
- Use `getScopedI18n` for server components and `useScopedI18n` for client components.

### Performance
- Default to server components. Add `"use client"` only when `useState`, `useEffect`, or browser APIs are strictly required.
- Every `next/image` with `fill` must have a `sizes` prop.
- Keep above-the-fold `priority` images to 1-2 per page.

### Animations
- All animations via `tailwindcss-animate`. No Framer Motion anywhere.
- Content must be visible without JavaScript. Animate as progressive enhancement only.
- Limit animated blur decorations to 2-3 per page.

### TypeScript
- Keep `ignoreBuildErrors: false` in `next.config.ts` at all times.
- Resolve all TypeScript errors before merging — CI is not a substitute for local `npm run build`.
