# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

9skin (玖膚) — a marketing/landing page for a Taiwanese skincare brand. Built as a single-page Next.js app with multiple full-screen sections. Content is in Traditional Chinese (zh-TW).

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm test` — run Playwright tests (auto-starts dev server if needed)
- `npm run test:update` — update Playwright snapshots
- `npx playwright test tests/s12.spec.ts` — run a single test file

## Architecture

- **Next.js 16** with App Router, **React 19**, **Tailwind CSS v4**, **TypeScript**
- Font: Noto Serif TC (loaded via `next/font/google` in `layout.tsx`)
- Icons: `react-icons` (Lucide `Lu*` and Simple Icons `Si*`)

### File structure

- `app/page.tsx` — "Coming Soon" placeholder page
- `app/example1/page.tsx` — **the main landing page** (~2200 lines, single component). Contains all sections (S1–S12+). This is the primary file you'll be editing.
- `app/example/`, `example2/`, `example3/`, `example4/` — earlier design iterations (reference only)
- `app/globals.css` — CSS variables (brand colors), Tailwind v4 import, custom animations (marquee, scroll-reveal, pop-in)
- `public/img/` — all images, organized by page number (e.g., `Page 2-1.png`, `Page 12-1.jpg`)

### Design system (CSS variables in globals.css)

- `--brand-cream` (#D8D2C4) — main background
- `--brand-dark` (#38322A) — primary text
- `--brand-muted` / `--brand-gold` (#7A7264) — accent/muted text
- `--brand-light` (#E0DAD0) — card/section backgrounds
- `--brand-lighter` (#EAE5DC) — alternate section backgrounds
- `--brand-footer` (#404338) — dark footer background
- `--brand-footer-text` (#C5BAB0) — footer text

### Section architecture (in example1/page.tsx)

Sections are marked with HTML comments like `SECTION 1 — Hero / About`. Each section uses `<section>` tags with section IDs (`s1`, `s5`, `s6`, etc.). Navigation is defined in the `navSections` array.

Key patterns:
- **Scroll reveal**: elements use `data-reveal` attributes (`"left"`, `"right"`, `"fade"`, `"pop"`) with `data-reveal-delay` for staggered animations, activated by IntersectionObserver
- **Mobile/Desktop variants**: many sections have separate desktop (`hidden lg:flex`) and mobile (`lg:hidden`) layouts
- **Marquee animations**: KOL review section uses CSS-driven infinite scroll with drag-to-pause

### Testing

Playwright visual regression tests in `tests/`. Tests run against Chrome only, viewport 1280×900. The dev server is auto-started by Playwright config.
