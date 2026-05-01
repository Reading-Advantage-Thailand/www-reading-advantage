# Specification: Phase 2 Marketing Blog Generation (Days 31-60)

## Overview
Generate 30 bilingual (English and Thai) blog posts and associated assets for Phase 2 of the Marketing Blog Generation campaign (Days 31-60) using the MiniMax (mmx) CLI tool.

## Functional Requirements
- Utilize the `mmx` CLI tool and relevant skills to generate content.
- Generate both English and Thai versions of the content simultaneously for efficiency and consistency.
- For each of the 30 days, generate:
  1. A Markdown blog post (`.md`).
  2. A Hero image for the post.
  3. A short summary or hook for social media platforms.
- Store the generated markdown files in the standard blog directory: `src/app/[locale]/(marketing)/blog/posts/`.
- Ensure hero images are saved in the correct public directory (e.g., `public/blog/`) and properly referenced within the markdown frontmatter/content.
- All generated content must adhere to the topics and product focus outlined in `measure/marketing_plan_day_31_to_60.md`.

## Non-Functional Requirements
- Maintain the established brand voice and formatting conventions used in Days 1-30.

## Acceptance Criteria
- 30 new bilingual blog posts (Days 31-60) are successfully generated and exist in the codebase.
- Hero images for all 30 posts are generated and correctly linked.
- Social hooks are generated for all 30 posts.

## Out of Scope
- Video generation (this will be handled by the existing video pipeline track later).
- Addressing the 'Blog section lacks pagination' tech debt (already planned as a separate track).