# Implementation Plan: Blog Localization and Navigation Resilience

## Phase 1: Infrastructure & Global Utilities
Goal: Setup the foundational helpers for locale-aware fetching and navigation.

- [ ] Task: Create `src/components/common/localized-link.tsx` to handle automatic locale prefixing.
    - [ ] Write unit tests for `LocalizedLink` (handling `/`, `/blog`, and absolute URLs).
    - [ ] Implement component using `useCurrentLocale`.
- [ ] Task: Refactor `src/lib/blog.ts` to support locale-based directory paths.
    - [ ] Update `getBlogPost` and `getAllBlogPosts` to accept `locale`.
    - [ ] Implement fallback logic to `en` if requested locale file is missing.
    - [ ] Update existing unit tests to account for locale parameters.
- [ ] Task: Conductor - User Manual Verification 'Infrastructure & Global Utilities' (Protocol in workflow.md)

## Phase 2: Content Migration & Component Updates
Goal: Reorganize content and update UI to use new utilities.

- [ ] Task: Reorganize blog post directory structure.
    - [ ] Move existing posts from `posts/` to `posts/en/`.
    - [ ] Create placeholder post in `posts/th/` for testing.
- [ ] Task: Update Blog listing pages to pass locale to data fetchers.
    - [ ] Update `src/app/[locale]/(marketing)/blog/page.tsx`.
    - [ ] Update `src/app/[locale]/(marketing)/blog/page/[page]/page.tsx`.
- [ ] Task: Update Blog UI components to use `LocalizedLink` and localized dates.
    - [ ] Update `src/components/blog/blog-card.tsx`.
    - [ ] Update `src/components/blog/blog-pagination.tsx`.
- [ ] Task: Conductor - User Manual Verification 'Content Migration & Component Updates' (Protocol in workflow.md)

## Phase 3: Post Page Enhancements
Goal: Finalize the localized experience on individual post pages.

- [ ] Task: Update `src/app/[locale]/(marketing)/blog/[slug]/page.tsx` for locale-aware rendering.
    - [ ] Pass `locale` to `getBlogPost` and `getRelatedPosts`.
    - [ ] Update metadata generation to be locale-aware.
- [ ] Task: Implement Localized Breadcrumbs.
    - [ ] Create `src/components/blog/blog-breadcrumbs.tsx`.
    - [ ] Integrate into `[slug]/page.tsx`.
- [ ] Task: Localize Reading Time display.
    - [ ] Update `lib/blog.ts` to return raw minute count or use i18n keys in components.
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
