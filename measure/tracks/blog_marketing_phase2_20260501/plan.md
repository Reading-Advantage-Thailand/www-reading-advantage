# Implementation Plan: Phase 2 Marketing Blog Generation (Days 31-60)

## Phase 1: Setup Automation Script
- [ ] Task: Create/update script to automate generation of blog content
  - [ ] Implement logic to call `mmx` to generate English blog post, Social Hook, and Image prompt.
  - [ ] Implement logic to call `mmx` to translate/generate Thai blog post and Social Hook.
  - [ ] Implement logic to call `mmx` (or `create-image-mmx`) to generate Hero Image.
  - [ ] Ensure script handles mmx JSON responses properly (stripping ```json fences).
  - [ ] Ensure script formats the markdown frontmatter correctly and saves to `src/app/[locale]/(marketing)/blog/posts/`.
- [ ] Task: Measure - User Manual Verification 'Setup Automation Script' (Protocol in workflow.md)

## Phase 2: Content Generation
- [ ] Task: Execute generation script for Days 31-45
  - [ ] Run the generation script for the first 15 days.
  - [ ] Validate Thai text output length and completeness (watch out for mmx truncation).
  - [ ] Validate that no `---` horizontal rules are present in the markdown body (causes frontmatter validation errors).
- [ ] Task: Execute generation script for Days 46-60
  - [ ] Run the generation script for the remaining 15 days.
  - [ ] Validate Thai text output length and completeness.
  - [ ] Validate that no `---` horizontal rules are present in the markdown body.
- [ ] Task: Measure - User Manual Verification 'Content Generation' (Protocol in workflow.md)

## Phase 3: Final Review
- [ ] Task: Validate all assets
  - [ ] Verify all 30 hero images exist in `public/blog/` and are referenced correctly.
  - [ ] Run the blog frontmatter validation test suite to ensure all posts are structurally sound.
- [ ] Task: Measure - User Manual Verification 'Final Review' (Protocol in workflow.md)