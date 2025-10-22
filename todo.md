# Workflow Backlog (Temporary)

All new work must be captured through specs in `docs/specs/` and tracked via GitHub issues. This file is a staging area while we convert legacy notes into the spec-driven workflow. Completed historical work from the static-to-Next.js migration is recorded in `docs/migration/2025-10-22-migration.md`.

## Completed

- [x] #15 - S2: Implement CLI + consolidate datasets - PR: #35 - Completed: 2025-10-22 ✅
  - **Merge Commit**: b765483
  - **Specs Updated**: docs/specs/experience/localization-maintenance/spec.md
  - **Sprint**: S2
  - **Changes**: 3 CLI commands, 51 deprecated files removed, comprehensive docs
  - **Branch**: feat/15-implement-cli-consolidate-datasets (deleted)



## Phase 2: Content Verification & Localization Quality (Sprint S2)

### Sprint S2 – Content Verification & Localization Quality

**Started**: 2025-10-22
**Milestone**: S2 - Content Verification & Localization Quality
**Due**: TBD

**Issues Created**:

- [ ] #15 - S2: Implement CLI + consolidate datasets (Specs: localization-maintenance)
- [ ] #16 - S2: Verify and refresh Home page content (Specs: content-refresh)
- [ ] #17 - S2: Verify and refresh Products overview page (Specs: content-refresh)
- [ ] #18 - S2: Create Primary Advantage product page (Specs: content-refresh)
- [ ] #19 - S2: Verify and refresh Math Advantage page (Specs: content-refresh)
- [ ] #20 - S2: Verify and refresh Science Advantage page (Specs: content-refresh)
- [ ] #21 - S2: Verify and refresh STEM Advantage page (Specs: content-refresh)
- [ ] #22 - S2: Verify and refresh Reading Advantage page (Specs: content-refresh)
- [ ] #23 - S2: Verify and refresh Storytime Advantage page (Specs: content-refresh)
- [ ] #24 - S2: Verify and refresh Zhongwen Advantage page (Specs: content-refresh)
- [ ] #25 - S2: Verify and refresh Tutor Advantage page (Specs: content-refresh)
- [ ] #26 - S2: Verify and refresh CodeCamp Advantage page (Specs: content-refresh)
- [ ] #27 - S2: Verify and refresh Pricing page (Specs: content-refresh)
- [ ] #28 - S2: Verify and refresh Contact page (Specs: content-refresh)
- [ ] #29 - S2: Verify and refresh Blog landing (Specs: content-refresh)
- [ ] #30 - S2: Verify and refresh About page (Specs: content-refresh)
- [ ] #31 - S2: Verify and refresh Features page (Specs: content-refresh)

## content/blogging (spec pending)
- [ ] Implement BlogHeader component
- [ ] Create BlogTags component for categorization
- [ ] Pagination for blog listings
- [ ] Category/tag filtering system
- [ ] RSS feed generation
- [ ] Reading time estimation
- [ ] Social sharing buttons
- [ ] Responsive blog post layout polish
- [ ] Syntax highlighting for code blocks
- [ ] Custom MDX element styles
- [ ] Dark mode support within blog
- [ ] Authoring guide for blog posts
- [ ] Blog post template
- [ ] Seed initial educational content posts
- [ ] Table of contents generation
- [ ] Related posts recommendations
- [ ] Blog-specific SEO (meta, structured data, sitemap, social cards)

## identity/authentication (spec pending)
- [ ] User profile page
- [ ] Password reset flow
- [ ] Remember me functionality
- [ ] Sign-up form
- [ ] Firebase security rules review
- [ ] Authentication flow testing & hardening
- [ ] Security validation and error handling scenarios
- [ ] Role-based access control
- [ ] User profile management UI
- [ ] Admin dashboard shell

## experience/internationalization (spec pending)
- [ ] Install & configure next-intl (or selected i18n solution)
- [ ] Language detection & routing strategy
- [ ] Language switcher component
- [ ] Language persistence
- [ ] Translation file organization (EN/TH/ZH)
- [ ] Translation management workflow
- [ ] Fallback language handling
- [ ] Content validation automation
- [ ] Update UI components to use translations
- [ ] RTL support assessment
- [ ] Layout adjustments for varying language lengths
- [ ] Multilingual form updates
- [ ] Static content localization (pages, meta, errors, dates, numbers)
- [ ] i18n testing (switching, accessibility, performance per locale)

## experience/theming & responsiveness (spec pending)
- [ ] Mobile navigation refinements
- [ ] Responsive tables & data visualizations
- [ ] Touch interaction polish
- [ ] Theme switcher implementation
- [ ] Dark mode QA across components

## assets & media
- [ ] Audit remaining static assets
- [ ] Migrate/optimize missing images

## operations/ci-cd
- [ ] Configure GitHub Actions -> Cloud Run deployment pipeline

## marketing/seo
- [ ] Meta tag coverage
- [ ] Open Graph definitions
- [ ] Structured data implementation

## performance
- [ ] Image loading strategies (responsive sources, lazy loading)
- [ ] Component-level code splitting
- [ ] Font loading optimization

## quality/testing
- [ ] Component/unit tests
- [ ] E2E smoke tests
- [ ] Accessibility regression suite

## documentation & workflow
- [ ] Document component usage
- [ ] Styling guidelines
- [ ] Development workflow handoff guide

### Notes & Conventions
- Use Tailwind CSS + shadcn/ui patterns; see `docs/prd.md` for accessibility and performance targets.
- Follow the commands noted in `CLAUDE.md` and `AGENTS.md` for consistent contributions.
- Use `npx shadcn@latest add <component>` for new shadcn components and `--legacy-peer-deps` when installing npm packages.

## Completed

- [x] #12 - S1: Update documentation for static experience - PR: #34 - Completed: 2025-10-22 ✅
  - **Merge Commit**: 90a9b21
  - **Specs Updated**: docs/specs/identity/login-removal/spec.md
  - **Sprint**: S1
  - **Changes**: 6 files modified, 1 created (release notes), +127 lines
  - **Release Notes**: docs/releases/v1.0.0-auth-removal.md

- [x] #11 - S1: Remove Firebase/AuthContext dependencies - PR: #33 - Completed: 2025-10-22 ✅
  - **Merge Commit**: a78e43ac176f02be445641e4f0f29a40b5168e25
  - **Specs Updated**: docs/specs/identity/login-removal/spec.md
  - **Sprint**: S1
  - **Changes**: 10 files modified, 2 deleted, 74 packages removed, -1009 lines

- [x] #10 - S1: Decommission /login route - PR: #32 - Completed: 2025-10-22 ✅
  - **Merge Commit**: d10a1b4094dfbf28c91ee7ecff6a8110485fc466
  - **Specs Updated**: docs/specs/identity/login-removal/spec.md
  - **Sprint**: S1

- [x] #9 - S1: Remove login/signup UI from navigation - PR: #14 - Completed: 2025-10-22 ✅
  - **Merge Commit**: ced5f147d5e205f970aaf0a52b00a6b2b51a6950
  - **Specs Updated**: docs/specs/identity/login-removal/spec.md
  - **Sprint**: S1
