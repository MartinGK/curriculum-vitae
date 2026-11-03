# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers at companies that hire remote engineers. They arrive from a job application, LinkedIn or a referral, usually on desktop during work hours, and decide in seconds whether Martin is worth a call. Their job: confirm seniority, the stack match and real outcomes, then book a call.

## Product Purpose

Personal CV site of Martin Gainza, Senior Software Engineer, who is currently looking for a remote role. Success is a booked call through Calendly (https://calendly.com/mrtgeka/talk-with-martin). LinkedIn (https://www.linkedin.com/in/martin-gainza/) and email are secondary actions.

## Positioning

A career told as a timeline of results: each role leads with what changed because of Martin's work, backed by the stack used at that point. Interactive and animated enough to be memorable, while staying scannable for a recruiter.

## Capabilities and Constraints

- Primary language English, with a Spanish version (`/es`).
- The phone number is never shown on the website, and the CV is not downloadable from it.
- No photo.
- Next.js 15, React 19, Tailwind 4, deployed on Vercel (project `curriculum-vitae`, domain martin-gk.com).

## Evidence on Hand

- `src/data/cv.ts`: the CV content (source: Martin's PDF CV, not published on the site).
- Confirmed results: CenExel app with 653 users; Vairix test coverage from 5% to 90%; Lanista with ~200 REST endpoints and 150 players (no longer in production); Signal with 118 merged PRs and 27 production releases since 23/09/2026 (GitHub `DreamsMakers/signal`), still in development, live at signal.dreammakers.tech.
- No time-saving or performance metrics exist. Do not invent metrics, clients, testimonials or team sizes.

## Product Principles

1. Lead with the result, then the detail.
2. Everything a recruiter needs (who, seniority, stack, LinkedIn, booking) is reachable in under 10 seconds.
3. Motion reveals the story; it never hides content or delays reading.
4. Only real, confirmed facts.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard access, and `prefers-reduced-motion` shows everything static and complete.
