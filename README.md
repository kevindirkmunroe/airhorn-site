# Airhorn.events marketing site

Standalone Vite + React + TypeScript marketing site.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Routes

- `/` — Hero / value proposition
- `/how-it-works` — How it works
- `/platforms` — import sources + promotion destinations
- `/pricing` — combined Pricing + Self-Service / Pro Service

## Platform assets

Import sources:
- Eventbrite
- Facebook

Promotion destinations:
- Funcheap SF
- SF Weekly
- DoTheBay
- Visit Oakland
- SF Station
- IndyBay

## Existing SaaS

`Get Started / Sign In` currently points to:

`https://bep-ui.onrender.com`

After the custom application domain is configured, replace `APP_URL` with:

`https://app.airhorn.events`

## Render note

If deployed as a Render Static Site with BrowserRouter, add a rewrite:

`/*` → `/index.html`
