# Implementation Plan: Blog Localization and Navigation Resilience

## Phase 1: Infrastructure & Global Utilities [checkpoint: fe2b16e]
Goal: Setup the foundational helpers for locale-aware fetching and navigation.

- [x] Task: Create `src/components/common/localized-link.tsx` to handle automatic locale prefixing. [00f97d7]
    - [x] Write unit tests for `LocalizedLink` (handling `/`, `/blog`, and absolute URLs).
    - [x] Implement component using `useCurrentLocale`. **Must carry `"use client"` directive** — this hook is client-only; any server component importing `LocalizedLink` must treat it as a client boundary.
- [x] Task: Refactor `src/lib/blog.ts` to support locale-based directory paths. [dee07a4]
    - [x] Update `getBlogPost` and `getAllBlogPosts` to accept `locale`.
    - [x] Update the `getAllPosts` alias (line 98) to forward `locale` — it is used by blog listing pages and must stay in sync.
    - [x] Update `getAllBlogTags` to accept and forward `locale` — it calls `getAllBlogPosts()` internally and will silently serve English-only tags otherwise.
    - [x] Implement fallback logic to `en` if requested locale file is missing.
    - [x] Update existing unit tests to account for locale parameters.
- [x] Task: Conductor - User Manual Verification 'Infrastructure & Global Utilities' (Protocol in workflow.md) [fe2b16e]

## Phase 2: Content Migration & Component Updates
Goal: Reorganize content and update UI to use new utilities.

- [x] Task: Reorganize blog post directory structure. [030ef47]
    - [x] Move existing posts from `posts/` to `posts/en/`.
    - [x] Create placeholder post in `posts/th/` for testing.
- [x] Task: Update Blog listing pages to pass locale to data fetchers. [ffc089c]
    - [x] Update `src/app/[locale]/(marketing)/blog/page.tsx` — add `{ params: { locale } }` to the page props (currently the function accepts no args) and thread `locale` into all data fetcher calls.
    - [x] Update `src/app/[locale]/(marketing)/blog/page/[page]/page.tsx` — same pattern.
- [x] Task: Update Blog UI components to use `LocalizedLink` and localized dates. [ffc089c]
    - [x] Update `src/components/blog/blog-card.tsx`.
    - [x] Update `src/components/blog/blog-pagination.tsx`.
- [x] Task: Conductor - User Manual Verification 'Content Migration & Component Updates' (Protocol in workflow.md)

## Phase 3: Post Page Enhancements
Goal: Finalize the localized experience on individual post pages.

- [ ] Task: Update `src/app/[locale]/(marketing)/blog/[slug]/page.tsx` for locale-aware rendering.
    - [ ] Pass `locale` to `getBlogPost` and `getAllBlogPosts` (which feeds `getRelatedPosts`). Note: `getRelatedPosts` itself is a pure filter and does not need a `locale` param — thread locale into the upstream `getAllBlogPosts` call instead.
    - [ ] Update metadata generation to be locale-aware.
- [ ] Task: Implement Localized Breadcrumbs.
    - [ ] Create `src/components/blog/blog-breadcrumbs.tsx`.
    - [ ] Integrate into `[slug]/page.tsx`.
- [ ] Task: Localize Reading Time display.
    - [ ] Change `calculateReadingTime` in `lib/blog.ts` to return `number` (raw minute count) instead of the hardcoded English string `"${minutes} min read"`.
    - [ ] Update the `BlogPost` type in `src/types/blog.ts` to reflect the new type (`readingTime: number`).
    - [ ] Update all call sites that render `readingTime` (e.g., `blog-card.tsx`) to use the `readingTime` i18n key from `src/locales/pages/blog.ts` with the count interpolation.
    - [ ] Update existing tests that assert on the old string format.
- [ ] Task: Conductor - User Manual Verification 'Post Page Enhancements' (Protocol in workflow.md)

## Phase 4: Final Validation & SEO
Goal: Ensure everything works as expected across all supported languages.

- [ ] Task: Verify fallback behavior across all locales.
    - [ ] Test that `/th/blog/slug` works even if `th/slug.md` is missing.
- [ ] Task: Update `metadataBase` to use environment variable.
    - [ ] Identify all occurrences of hardcoded `http://localhost:3000`.
    - [ ] Refactor to use `process.env.NEXT_PUBLIC_APP_URL`.
- [ ] Task: Final automated test run and code coverage check.
- [ ] Task: Conductor - User Manual Verification 'Final Validation & SEO' (Protocol in workflow.md)
