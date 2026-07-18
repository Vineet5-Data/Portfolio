# Portfolio

Single-page portfolio site for a Data Science / ML Engineer. Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion, exported as a fully static site. Link - https://vineet5-data.github.io/Portfolio/
## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All copy lives in one typed file: [`content/content.ts`](content/content.ts).

- **Projects** — add/remove entries in the `projects` array (title, one-line description, tags, link). Keep the `placeholder: true` entry last if you want the "[+ Add Project]" card.
- **Experience** — the `experience` array drives the timeline.
- **Skills** — `skills` (grouped pills) and `marquee` (scrolling row).
- **Stats** — the `stats` array drives the animated counters in About.
- **Name / links / email** — the `site` object.

Replace `public/resume.pdf` with your real resume (same filename, no code change needed).

No component edits are needed for content changes.

## Deploy

### GitHub Pages

Push to `main` — `.github/workflows/deploy.yml` builds the static export with `GITHUB_PAGES=true` (adds the `/portfolio` basePath) and publishes to Pages.

One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

If the repo is renamed, update `basePath` in [`next.config.ts`](next.config.ts) to match.

### Vercel

Import the repo in Vercel — zero config, the defaults work (no `GITHUB_PAGES` env var, so no basePath).

## Design notes

- Dark mode by default, light/dark toggle in the nav, choice persisted in `localStorage`.
- All motion is transform/opacity only and fully disabled under `prefers-reduced-motion`.
- Palette: near-black `#0A0A0A` / near-white `#FAFAFA`, emerald accent, defined as CSS variables in [`app/globals.css`](app/globals.css).
