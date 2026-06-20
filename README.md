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
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Deploy

Hosted on **GitHub Pages**. Every push to `main` triggers
`.github/workflows/deploy.yml`, which builds the site and publishes `dist/`.

> The Vite `base` is set to `/rewnd-beta/` (the repo name) in `vite.config.js`.
> If the repo is renamed, update `base` and the asset paths in `index.html`
> and `src/index.css` to match.

## Edit the content

- **QR target / copy / steps:** `src/App.jsx`
- **Brand colors & fonts:** `tailwind.config.js`
- **App icon:** `public/rewnd-icon.png` (from `App Icon/Assets.xcassets`)
