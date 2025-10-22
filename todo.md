# Workflow Backlog (Temporary)

All new work must be captured through specs in `docs/specs/` and tracked via GitHub issues. This file is a staging area while we convert legacy notes into the spec-driven workflow. Completed historical work from the static-to-Next.js migration is recorded in `docs/migration/2025-10-22-migration.md`.

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

- [x] #9 - S1: Remove login/signup UI from navigation - PR: #14 - Completed: 2025-10-22 ✅
  - **Merge Commit**: ced5f147d5e205f970aaf0a52b00a6b2b51a6950
  - **Specs Updated**: docs/specs/identity/login-removal/spec.md
  - **Sprint**: S1
