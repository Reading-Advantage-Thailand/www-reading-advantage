# AGENTS.md

## Purpose
Provide guardrails for AI/human collaborator pairs adopting the git-workflow migration.

## Roles
- **Product Owner**: curates specs and sprint priorities; maintains `docs/project-brief.md` & `docs/prd.md`.
- **Tech Lead**: ensures architecture coherence, reviews specs/design docs, and enforces coding standards.
- **Implementers**: pick issues via `next-issue`, follow specs, and keep implementation + docs in sync.
- **Doc Steward**: keeps migration report, sprint files, and TODO alignment current.

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

