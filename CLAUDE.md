# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio + blog SPA for **carworks.dev** (React 19 + Vite, deployed to GitHub Pages). The repo root is a thin wrapper; **all application code lives in `client/`**. The `server/`, `database/` directories described in `README.md` are aspirational and do not exist here — this repo is the frontend only. The backend is a separate service consumed over HTTP via `VITE_API_URL`.

## Commands

Run everything from `client/`. **Package manager is pnpm** (see `pnpm-lock.yaml`; CI uses pnpm 9 / Node 20).

```bash
cd client
pnpm install
pnpm dev        # Vite dev server
pnpm build      # vite build, then copies dist/index.html -> dist/404.html (SPA fallback for GH Pages)
pnpm lint       # eslint .
pnpm preview    # serve the production build
```

There is **no test suite** configured.

## Deployment

`.github/workflows/deploy.yml` builds `client/` and deploys `dist/` to GitHub Pages on push to `main`. `VITE_API_URL` is injected from the `VITE_API_URL` GitHub secret at build time. Custom domain `carworks.dev` comes from `client/public/CNAME`. Because routing is client-side, the build duplicates `index.html` as `404.html` so deep links (e.g. `/blog/:slug`) resolve.

## Architecture

**Feature-Sliced Design (FSD).** Code under `src/` is organized by layers, lower layers may only import from layers below them:

`app` → `processes` → `pages` → `widgets` → `features` → `entities` → `shared`

- **`app/`** — composition root: `app.jsx`, router (`providers/router.jsx`), global CSS (`index.css`, `styles/theme.css`, `styles/animations.css`).
- **`pages/`** — route components (`home`, `blog`, `post`, `not-found`). Each slice exports via a barrel `index.js` and keeps its component in `ui.jsx`.
- **`widgets/`** — large composite UI blocks (hero, footer, navbars, projects, who-am-i, etc.).
- **`features/`**, **`entities/`** — `entities/post` holds blog data access + normalization (see below).
- **`shared/`** — reusable primitives: `ui/` (re-exported from `shared/ui/index.js`), `lib/` (hooks, theme), `data/` (static content like `projects.js`, `tech-stack.js`), `assets/`.

**Import alias:** `@` → `src/` (configured in both `vite.config.js` and `jsconfig.json`). Always import via `@/...`, not relative paths across slices.

This is plain **JavaScript + JSX** (no TypeScript), despite `@types/react` being present.

### Routing
`react-router-dom` v7 with `BrowserRouter`. Routes: `/` (home), `/blog`, `/blog/:slug` (post), `*` (404). All defined in `app/providers/router.jsx`.

### Data layer (`entities/post`)
- `api/index.js` fetches from `${VITE_API_URL}/api/blog/posts` and `/api/blog/posts/:slug`.
- Every raw backend payload is passed through the `createPost` factory in `model/index.js`, which normalizes fields and tolerates both `cover_image` and `coverImage`. **Preserve this normalization boundary** — components consume the normalized shape, never raw API JSON.
- Blog posts are markdown rendered with `react-markdown` + `remark-gfm`, with `react-syntax-highlighter` for code and `mermaid` for diagrams (used in `pages/post/ui.jsx`).

### Theming
Dynamic accent-color system. `shared/lib/theme/random-theme.js` picks a random palette on each load, sets the `--accent-color` CSS custom property on `:root`, persists the choice in `sessionStorage` (avoids repeating the last theme), and dispatches a `theme-changed` window event. `useDynamicFavicon` reacts to the chosen color. Tailwind reads `--accent-color` via `--color-accent` in `styles/theme.css`.

### Styling
**Tailwind CSS v4** via the `@tailwindcss/vite` plugin (no `tailwind.config.js`-based theme — design tokens are defined in CSS with `@theme` in `app/styles/theme.css`). Custom color tokens like `bg-body`, `text-accent`, `text-glass-white`, `text-muted-white` map to those CSS variables.

## Conventions

- New slices follow the FSD pattern: a directory with `ui.jsx` (component) + `index.js` (barrel export).
- ESLint flat config; unused vars are errors except names matching `^[A-Z_]` (allows unused capitalized/constant imports).
