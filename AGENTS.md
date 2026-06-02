# AGENTS.md

## Measure Workflow

Load the `measure` skill and read `measure/index.md` before starting work.

### Marketing Content Generation Rule
If the user asks for blog posts, TikTok videos, or any marketing content generation:
1. **MANDATORY:** Read `measure/current_directive.md` FIRST before any other file.
2. **MANDATORY:** Verify the exact day/phase listed in the CURRENT STATUS block.
3. **FORBIDDEN:** Do NOT assume Phase 2 is active. Phase 2 is blocked until Phase 1 Days 1-30 are 100% complete.
4. **MANDATORY:** Read the track's `spec.md` and `plan.md` for the phase listed in `current_directive.md`.
5. Only after steps 1-4 are complete may you begin generation.

## Documentation Standards

Use JSDoc for all exported functions. Describe params and returns without repeating TypeScript types.

## Codebase Graph

This project uses `build-graph`. Load the `build-graph` skill for commands.

## Purpose
Provide guardrails for AI/human collaborator pairs adopting the git-workflow migration.

## Roles
- **Product Owner**: curates specs and sprint priorities; maintains `docs/project-brief.md` & `docs/prd.md`.
- **Tech Lead**: ensures architecture coherence, reviews specs/design docs, and enforces coding standards.
- **Implementers**: pick issues via `next-issue`, follow specs, and keep implementation + docs in sync.
- **Doc Steward**: keeps migration report, sprint files, and TODO alignment current.

## Subagent Usage
- **Front-end tasks**: Always use the `reading-advantage` subagent for all front-end development on this project.
- **General tasks**: Use `general` or `explore` subagents for non-front-end work as appropriate.

## Collaboration Principles
1. **Spec-first**: No code without an approved spec update (or at minimum a documented delta).
2. **Single Source of Truth**: `docs/` governs decisions; `todo.md` only tracks residual items awaiting specs.
3. **Tight Feedback Loops**: Use GitHub issue comments and PR reviews; summarize decisions in docs.
4. **Automation Friendly**: Keep commands/test scripts runnable locally and in CI/CD.

## Workflow Commands
- `migrate-project` – brownfield migration (this effort, Issue #8).
- `init-spec <capability>` – create/update specs in `docs/specs/`.
- `seed-sprint <file>` – convert sprint markdown into GitHub issues.
- `review-sprint` – QA the sprint backlog.
- `next-issue` / `submit-issue` / `close-issue` – day-to-day dev cycle.

## Expectations for Contributions
- Reference relevant spec + issue in commit messages and PR description.
- Update docs when behavior changes or new decisions are made.
- Include testing notes in PRs (commands run, results, screenshots if UI).
- Keep branch naming consistent (`feat/<issue>-description`, `fix/<issue>-description`).

## Communication Channels
- GitHub discussions/issues for async updates.
- PR comments for technical review.
- Shared migration report (`docs/migration/<date>-migration.md`) for ongoing findings.
