# Current Directive: Daily Marketing Blog Post Generation

## Objective
Generate one marketing blog post per day from the 30-Day "Advantage" Blog Marketing Campaign.

## Source of Truth
- **Campaign plan:** `conductor/marketing_plan_30_days.md`
- **Track:** `blog_marketing_generation_20260421`
- **Spec:** `conductor/tracks/blog_marketing_generation_20260421/spec.md`
- **Plan:** `conductor/tracks/blog_marketing_generation_20260421/plan.md`

## Daily Task
1. Identify the next unwritten day from the marketing plan (Days 1–30).
2. Generate the English blog post text (~800–1000 words) using `mmx` (`create-text-mmx` skill).
3. Generate the Thai blog post text (~800–1000 words) using `mmx` (`create-text-mmx` skill).
4. Generate one 16:9 hero image using `mmx` (`create-image-mmx` skill).
5. Save files:
   - English: `src/app/[locale]/(marketing)/blog/posts/en/{slug}.md`
   - Thai: `src/app/[locale]/(marketing)/blog/posts/th/{slug}.md`
   - Image: `public/blog/{filename}.jpg` or `.webp`
   - Frontmatter must include `product` field matching the Advantage Page in `conductor/marketing_plan_30_days.md`
6. Run the validation test: `npx vitest run src/lib/blog-posts-validation.test.ts`
7. Fix any validation failures.
8. Commit with a descriptive message referencing the day number and track.
9. Push to `main`.
10. Update `conductor/tracks/blog_marketing_generation_20260421/plan.md` to mark the day's task as complete.

## Quality Gates
- All 102+ validation tests must pass before commit.
- Posts must include YAML frontmatter matching the existing schema.
- Both EN and TH versions must share the same slug.
- Image must exist on disk and be referenced by `coverImage` in frontmatter.
- Word count target: 800–1000 words per post.

## Out of Scope
- Do not modify blog UI, routing, or rendering logic.
- Do not create more than one day's post per run.
