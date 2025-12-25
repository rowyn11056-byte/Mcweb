# Mcweb — Minecraft Launcher Demo

[![Deploy](https://github.com/rowyn11056-byte/Mcweb/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/rowyn11056-byte/Mcweb/actions/workflows/gh-pages.yml)

Live demo: https://rowyn11056-byte.github.io/Mcweb

This is a small static demo site for a Minecraft-style launcher UI.

## Running locally ✅

Install dependencies and start a local server:

```bash
npm install
npm start
```

Open `http://localhost:5173` (or what `live-server` reports).

## What I changed ✨
- Separated styles into `styles.css` and behavior into `script.js`.
- Added accessible sidebar and multiple sections (Launcher, Install, Settings).
- Added overlay for the web game iframe with keyboard and click-to-close handling.

## Deploy
This repository includes a GitHub Actions workflow that will automatically publish the repository root to the `gh-pages` branch whenever you push to `main` (see `.github/workflows/gh-pages.yml`).

After the first successful run, the site will be available at:

```
https://rowyn11056-byte.github.io/Mcweb
```

If you prefer a manual npm-based deploy, you can also run:

```bash
npm install --save-dev gh-pages
npm run deploy
```

If you'd like, I can also add a GitHub Pages status badge or configure an automatic CNAME for a custom domain.

---

If you want any UI polish, icons, or a custom favicon, say the word and I’ll add it.