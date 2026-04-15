# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js App Router project. Main routes live in `app/`, with the primary landing page in `app/example1/` and shared section data in `app/example1/data.ts`. Reusable UI for that page is split into section components under `app/example1/components/` such as `Section12LineReviews.tsx`. Global layout and styles live in `app/layout.tsx` and `app/globals.css`. Static assets belong in `public/`, currently under `public/img/`. End-to-end tests and visual snapshots live in `tests/` and `tests/*.spec.ts-snapshots/`.

## Build, Test, and Development Commands
Use `npm run dev` to start the local server at `http://localhost:3000`. Use `npm run build` to create a production build, and `npm run start` to serve it. Run `npm run lint` before submitting changes; this uses the repo ESLint config with Next core web vitals rules. Run `npm test` for Playwright coverage, and `npm run test:update` only when an intentional UI change requires refreshing screenshots.

## Coding Style & Naming Conventions
Write TypeScript with strict typing enabled. Follow the existing style: double quotes, semicolons, and 2-space indentation. Keep route files as `page.tsx`, colocate related UI in `components/`, and use PascalCase for React components (`Section10Results.tsx`). Prefer descriptive section-oriented names over generic ones. Use the `@/*` import alias when it improves clarity.

## Testing Guidelines
Tests use Playwright (`@playwright/test`) and currently focus on `/example1`. Add new specs under `tests/` using the `*.spec.ts` pattern. Keep test names behavior-based, for example `test("clicking a card opens the lightbox", ...)`. For UI work, cover both content assertions and snapshot impact where practical. Review generated files in `test-results/` before updating baselines.

## Commit & Pull Request Guidelines
Recent history mixes descriptive commits (`Refactor example1 into section components; rework S9 and S13`) with vague ones (`go`). Prefer short, imperative, specific commit messages and avoid placeholder summaries. For pull requests, include: a concise description, affected route(s) or component(s), linked issue if applicable, and screenshots for visual changes. Note when snapshots were updated so reviewers can verify expected diffs.
