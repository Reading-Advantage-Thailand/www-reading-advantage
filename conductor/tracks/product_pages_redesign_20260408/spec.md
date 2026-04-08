# Track: Remaining Product Pages Redesign

## Overview

The Reading Advantage and Primary Advantage product pages have been redesigned to use the new visual language: inline hero sections with product-specific gradients, Lucide icons, Tailwind-only animations, asymmetric 7/5 grid layouts, and glassmorphism accents. The remaining seven product pages — Math Advantage, Science Advantage, STEM Advantage, Storytime Advantage, Zhongwen Advantage, CodeCamp Advantage, and Tutor Advantage — still use the older design patterns (Framer Motion, emoji icons, inconsistent colors, generic `HeroSection` component).

This track brings all seven pages up to the same standard. Each page receives a product-specific color identity, an inline hero section, Lucide-icon feature cards, and a consistent section structure, while preserving all existing i18n locale content.

## Functional Requirements

1. Each of the seven product pages removes Framer Motion and all `motion.*` JSX.
2. Each page builds an inline hero section (no `HeroSection` component import) with a product-specific gradient and organic blob decorations.
3. All emoji icons on product pages are replaced with `lucide-react` icons.
4. Section structure is consistent across all product pages:
   - Hero (inline, product gradient)
   - Key Features (3-column grid, Lucide icons)
   - CEFR/Level Alignment or equivalent differentiator section (asymmetric 7/5)
   - Platform Features or Technology section
   - Results / Stats section (dark gradient, 3 stats)
   - Final CTA section
5. Each product page has a distinct hero gradient that does not conflict with others:
   - Math Advantage: `from-emerald-500 via-teal-500 to-emerald-600`
   - Science Advantage: `from-violet-500 via-purple-500 to-violet-600`
   - STEM Advantage: `from-orange-500 via-amber-500 to-orange-600`
   - Storytime Advantage: `from-pink-500 via-rose-500 to-pink-600`
   - Zhongwen Advantage: `from-red-500 via-rose-600 to-red-700`
   - CodeCamp Advantage: `from-slate-700 via-slate-800 to-slate-900` (with amber accents)
   - Tutor Advantage: `from-sky-500 via-blue-500 to-sky-600`
6. All text remains sourced from existing locale files — no i18n keys are removed or renamed.
7. All animations use `tailwindcss-animate` utility classes only.
8. All pages pass `npm run build` with TypeScript strict mode enabled.

## Non-Functional Requirements

- Each redesigned page achieves a Lighthouse performance score of ≥ 85 in production mode.
- All pages are fully responsive from 320px (mobile) to 1440px (desktop).
- WCAG 2.1 AA color contrast on hero sections must be verified for each product gradient.
- Page weight must not increase relative to the pre-redesign baseline.
- Hero section images (where they exist) use `next/image` with `width`, `height`, `priority`, and `sizes` props.

## Acceptance Criteria

- [ ] All 7 product pages load without JavaScript errors in the browser console.
- [ ] All 7 product pages have a visually distinct hero gradient (no two pages share the same gradient).
- [ ] No Framer Motion imports remain in any product page file.
- [ ] No emoji characters are used as icons in any product page.
- [ ] All 7 pages render correctly in EN, TH, and ZH locales.
- [ ] `npm run build` exits 0.
- [ ] Mobile layout (375px viewport) shows a single-column stack for all grid sections.

## Out of Scope

- Creating new locale translation keys — only existing keys are used.
- Adding new product images not already present in `public/images/`.
- Redesigning the `/products` overview listing page.
- Changing the URL structure of any product page.
- Adding video embeds or interactive demos.
