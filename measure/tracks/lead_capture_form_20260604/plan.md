# Plan: Lead Capture Form with Spam Protection and Analytics

## Phase 1: Validation & Rate Limiting (TDD)
- [ ] Write Zod schema tests (`src/lib/contact/schema.test.ts`) — valid payload, missing required fields, invalid email, honeypot must be empty.
- [ ] Write rate limiter tests (`src/lib/contact/rate-limit.test.ts`) — allow under threshold, block over threshold, reset after window.
- [ ] Write analytics event helper tests (`src/lib/contact/analytics.test.ts`) — event payload shape, safe no-op when window.gtag is missing.
- [ ] Implement `src/lib/contact/schema.ts` — Zod schema with honeypot field.
- [ ] Implement `src/lib/contact/rate-limit.ts` — simple in-memory rate limiter (Map<ip, count[]>).
- [ ] Implement `src/lib/contact/analytics.ts` — typed event dispatcher wrapping `window.gtag`.

## Phase 2: Server Action & Form Handler (TDD)
- [ ] Write server action tests (`src/app/[locale]/contact/actions.test.ts`) — success path, validation failure, honeypot rejection, rate-limit rejection.
- [ ] Implement server action (`src/app/[locale]/contact/actions.ts`) — validate, check honeypot, check rate limit, return structured result.
- [ ] Add `contact.*` i18n scopes to `locales/en.ts`, `locales/th.ts`, and `locales/zh.ts`.

## Phase 3: UI Components
- [ ] Create `ContactForm` component (`src/components/contact/ContactForm.tsx`) — uses server action, displays validation errors, shows success state.
- [ ] Create `RoleSelect` component for the Role dropdown.
- [ ] Wire form into `src/app/[locale]/contact/page.tsx`, replacing any placeholder content.
- [ ] Add analytics event triggers (page view on mount, form start on first input, submit events).

## Phase 4: Integration & Verification
- [ ] Run full test suite: `npm test` (must pass).
- [ ] Run build: `npm run build` (must succeed).
- [ ] Run lint: `npm run lint` (must pass).
- [ ] Smoke test form in browser — validation, honeypot, success state.
- [ ] Update `tech-debt.md` if any new shortcuts were taken.
- [ ] Update `lessons-learned.md` with any insights.
- [ ] Commit and push.
