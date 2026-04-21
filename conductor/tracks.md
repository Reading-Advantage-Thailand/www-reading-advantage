# Project Tracks

This file tracks all major tracks for project. Each track has its own detailed plan in its respective folder.

---

## [ ] Track: Complete Services and Blended Learning Page Development

_Link: [./conductor/tracks/services_development_20260114/](./conductor/tracks/services_development_20260114/)_

## [x] Track: Site-Wide Refactor — Appearance, Performance & Code Quality

_Link: [./conductor/tracks/site_refactor_20260207/](./conductor/tracks/site_refactor_20260207/)_

## [ ] Track: Hero Section Standardization

_Link: [./conductor/tracks/hero_standardization_20260208/](./conductor/tracks/hero_standardization_20260208/)_

---

### [x] Track: Marketing Pages Redesign

**Status:** Completed

**Type:** refactor | **Estimated Tasks:** 24 | **Actual Tasks:** 24

**Description:** Apply the established brand design system (glassmorphism, asymmetric layouts, uppercase wayfinding labels, rounded-3xl cards, standard Button CTAs) to all non-product marketing pages: Home, About, Features, Pricing, Services, and Contact.

_Link: [./conductor/tracks/marketing_pages_redesign_20260418/](./conductor/tracks/marketing_pages_redesign_20260418/)_

---

## Archived Tracks

### [x] Track: Complete Site Redesign (Archived)

**Status:** Archived — Replaced by Product Brand Refresh 2026-04-18

**Reason:** Implemented incorrect Clay design system (warm cream, Roobert font, broken animations) that violated product guidelines. Color schemes were incorrect and product logos missing.

_Link: [./conductor/archive/complete_site_redesign_20260412_archived/](./conductor/archive/complete_site_redesign_20260412_archived/)_

---

## Upcoming Tracks (created 2026-04-08)

### [ ] Track: Reduce Excessive Client Component Boundaries

**Status:** New

**Type:** refactor | **Estimated Tasks:** 6

**Description:** Convert pages/components that only use `useScopedI18n` (no useState, useEffect, or browser APIs) from "use client" to server components using `getScopedI18n`. This reduces JS bundle size by moving static content to the server bundle.

_Link: [./conductor/tracks/client_component_reduction_20260415/](./conductor/tracks/client_component_reduction_20260415/)_

### [ ] Track: Fix Missing `sizes` Props on `fill` Images

**Status:** New

**Type:** bug | **Estimated Tasks:** 4

**Description:** Add `sizes` prop to every `next/image` component using `fill` prop. Without `sizes`, the browser defaults to `100vw` and downloads the largest image variant even on small viewports.

_Link: [./conductor/tracks/images_sizes_prop_20260414/](./conductor/tracks/images_sizes_prop_20260414/)_

### [x] Track: Product Brand Refresh

**Status:** Completed

**Type:** feature | **Estimated Tasks:** 28 | **Actual Tasks:** 28

**Description:** Align all 9 product pages with actual brand identity: correct hero gradients per product specifications, product logos in hero sections, sky-50 base theme, glassmorphism cards, and Geist typography per product guidelines. Replaces the archived Clay design system track.

_Link: [./conductor/tracks/product_brand_refresh_20260418/](./conductor/tracks/product_brand_refresh_20260418/)_

---

### [x] Track: Product Page Structure Redesign

**Status:** Completed

**Type:** feature | **Estimated Tasks:** 36

**Description:** Redesign all 9 product pages with unique, distinctive layouts that break the repetitive AI-slop template pattern. Uses asymmetric splits, full-width color rooms, overlapping sections, dashed borders, and generous radius per Clay-inspired design principles while maintaining correct brand colors.

_Link: [./conductor/tracks/product_page_structure_redesign_20260418/](./conductor/tracks/product_page_structure_redesign_20260418/)_

---

### [ ] Track: Blog Pagination and Content Pipeline Improvements

**Status:** Spec Complete | Plan Complete

**Type:** feature | **Estimated Tasks:** 16

**Description:** Add static pagination (9 posts/page) to the blog listing, a floating table of contents to post pages, related-post recommendations driven by tag matching, and reading-time estimates.

_Link: [./conductor/tracks/blog_pagination_20260408/](./conductor/tracks/blog_pagination_20260408/)_

---

### [ ] Track: SEO and Metadata Audit

**Status:** Spec Complete | Plan Complete

**Type:** chore | **Estimated Tasks:** 20

**Description:** Audit and complete SEO metadata across all pages: unique title tags, unique OG descriptions, Open Graph images, hreflang tags, JSON-LD structured data (Organization, Product, Article schemas), XML sitemap, and robots.txt.

_Link: [./conductor/tracks/seo_metadata_audit_20260408/](./conductor/tracks/seo_metadata_audit_20260408/)_

---

## UI Reference App Cloning Tracks

### [ ] Track: Prowlarr UI Cloning

**Status:** Spec Complete ✅ | Plan Complete ✅

**Description:** Clone the Prowlarr indexer manager UI with comprehensive views, components, and features for managing 500+ torrent trackers and usenet indexers

**Plan:** 10 Phases (81 Tasks) - TDD approach with >80% coverage target

_Link: [./conductor/tracks/prowlarr_ui_cloning_20260214/](./conductor/tracks/prowlarr_ui_cloning_20260214/)_

### [ ] Track: Sonarr UI Cloning

**Status:** Spec Complete ✅ | Plan Complete ✅

**Description:** Clone the Sonarr TV series PVR UI with comprehensive views, components, and features for managing series, episodes, downloads, and quality profiles

**Plan:** 11 Phases (83 Tasks) - TDD approach with >80% coverage target

_Link: [./conductor/tracks/sonarr_ui_cloning_20260214/](./conductor/tracks/sonarr_ui_cloning_20260214/)_

### [ ] Track: Radarr UI Cloning

**Status:** Spec Complete ✅ | Plan Complete ✅

**Description:** Clone the Radarr movie collection manager UI with comprehensive views, components, and features for managing movies, downloads, and quality profiles

**Plan:** 11 Phases (80 Tasks) - TDD approach with >80% coverage target

_Link: [./conductor/tracks/radarr_ui_cloning_20260214/](./conductor/tracks/radarr_ui_cloning_20260214/)_

### [ ] Track: Bazarr UI Cloning

**Status:** Spec Complete ✅ | Plan Complete ✅

**Description:** Clone the Bazarr subtitle manager UI with comprehensive views, components, and features for managing subtitles for TV series and movies

**Plan:** 13 Phases (85 Tasks) - TDD approach with >80% coverage target

_Link: [./conductor/tracks/bazarr_ui_cloning_20260214/](./conductor/tracks/bazarr_ui_cloning_20260214/)_

---

## [x] Track: Blog Localization and Navigation Resilience

**Status:** Completed

**Type:** feature | **Estimated Tasks:** 16 | **Actual Tasks:** 18

**Description:** Locale-aware blog system: posts organized in `posts/{locale}/` dirs with `en/` fallback, `LocalizedLink` for locale-prefixed navigation, async server components using `getScopedI18n`, `Intl.DateTimeFormat` for locale dates, `BlogBreadcrumbs`, and comprehensive frontmatter validation test suite.

*Link: [./tracks/blog_localization_20260421/](./tracks/blog_localization_20260421/)*

---

- [ ] **Track: Generate 30 blog posts localized into English and Thai using the mmx cli tool with the create-image-mmx skill.**
*Link: [./tracks/blog_marketing_generation_20260421/](./tracks/blog_marketing_generation_20260421/)*