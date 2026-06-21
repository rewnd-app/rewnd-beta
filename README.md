# Rewnd — Beta access page

A tiny single-page app that shows a QR code linking to the Rewnd
[TestFlight](https://testflight.apple.com/join/9vV2qTf4) beta, plus short
testing instructions in Spanish. Built with React + Vite and styled to match
the Rewnd brand (lime `#DCFF78` on navy `#131C1B`).

**Live:** https://rewnd-app.github.io/rewnd-beta/

## Stack

- React 19 + Vite
- Tailwind CSS (brand tokens from the landing site)
- `qrcode.react` for the QR code (with the app icon embedded in the center)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs the static site to docs/
npm run preview  # preview the production build locally
```

## Deploy

Hosted on **GitHub Pages**, configured as **Deploy from a branch → `main` /docs**.

The site is committed (built) into `docs/`. To ship a change:

```bash
npm run build          # regenerates docs/
git add -A && git commit -m "Update site"
git push origin main   # GitHub Pages serves the new docs/ automatically
```

> - The Vite `base` is `/rewnd-beta/` (the repo name) in `vite.config.js`. If the
>   repo is renamed, update `base` and the font path in `src/index.css`.
> - `public/.nojekyll` is copied into `docs/` on every build so GitHub Pages
>   serves the Vite `assets/` folder without running Jekyll.

## Edit the content

- **QR target / copy / steps:** `src/App.jsx`
- **Brand colors & fonts:** `tailwind.config.js`
- **App icon:** `public/rewnd-icon.png` (from `App Icon/Assets.xcassets`)
