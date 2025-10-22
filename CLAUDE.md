# CLAUDE.md

## Working Agreement
- Follow the spec-driven workflow: specs in `docs/specs/`, issues track work, and PRs reference both.
- Stay aligned with GitHub issue #8 (migration) until closed; open new issues for additional work.
- Keep documentation as the source of truth—update specs, PRD, sprint files, and project brief before or alongside code changes.
- Prefer small, reviewable pull requests tied to a single issue.
- Run relevant tests/linters locally before handing off work.

## Repo Structure Highlights
- `docs/` — project brief, PRD, specs, sprint planning, migration reports.
- `src/` — Next.js 15 app router implementation (React + Tailwind + shadcn/ui).
- `todo.md` — legacy backlog; migrate actionable items into specs/issues.
- `cline_docs/` — legacy AI assistant notes; consolidate into new docs when possible.

## Collaboration Rhythm
1. Start with `next-issue` to select work.
2. Review associated spec(s) and acceptance criteria.
3. Implement and test.
4. Summarize in PR template, including spec deltas.
5. Use `update-issue` for feedback loops and `close-issue` after merge.

## Coding Standards
- TypeScript + React 19 RC conventions (server components where viable).
- Tailwind + shadcn/ui for styling; avoid ad-hoc CSS unless documented.
- Keep accessibility (WCAG 2.1 AA) and performance targets in mind.
- Ensure i18n readiness (no hard-coded English when possible).

## Communication
- Document decisions in specs or design notes.
- Surface blockers quickly in issue comments.
- Keep migration report updated during this effort (docs/migration/...).

