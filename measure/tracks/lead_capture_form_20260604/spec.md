# Track: Lead Capture Form with Spam Protection and Analytics

## Background
The Reading Advantage Platform product vision lists "Integrated Lead Capture" as a core feature: a central contact form with spam protection and analytics integration. Currently, the site has a Contact page but lacks a fully functional lead capture pipeline that can reliably drive inquiries and demo requests from school administrators, teachers, tutors, and parents.

## Goals
1. Provide a robust, accessible contact form on the `/contact` route.
2. Protect against automated spam without relying on third-party CAPTCHA services (honeypot field + basic rate limiting).
3. Integrate with an analytics/event pipeline to track form impressions, submissions, and conversion rates.
4. Ensure full i18n compliance — all labels, placeholders, and validation messages must be translatable.

## Non-Goals
- OAuth or authenticated user sessions (marketing site is static).
- Backend API server within this repo (use server actions or a lightweight form-handler).
- CRM webhook integration (out of scope for this track; leave an extension point).

## Acceptance Criteria
- [ ] Form renders on `/[locale]/contact` with fields: Name, Email, Organization (optional), Role (dropdown), Message.
- [ ] Client-side and server-side validation with Zod schema.
- [ ] Honeypot field is invisible to users but catches naive bots.
- [ ] Rate limiting: max 3 submissions per IP per hour (in-memory or lightweight store).
- [ ] Analytics events fired on: page view, form start, validation error, successful submit.
- [ ] All text managed via `next-international` scopes (`contact.*`).
- [ ] 100% unit test coverage for validation logic, rate limiting, and analytics helpers.
- [ ] Build passes, typecheck clean, no new lint warnings.

## Related
- `product.md` — Core Features & Requirements section.
- `tech-debt.md` — P3 items around CSS utilities and inline SVGs (not blocking).
