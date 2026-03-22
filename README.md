# AndyAI News v1.0

First production polish pack and first stable MVP release.

## What changed in v1.0

- final admin cleanup and layout polish
- production lock panel added
- better admin visual rhythm
- stable MVP scope explicitly locked around the daily publish workflow

## Stable MVP workflow

1. Open `/admin`
2. Import JSON or create a new day draft
3. Edit 9 stories
4. Review validation + publish checklist
5. Use cover image helper
6. Review local publish pack helper
7. Download `news-YYYY-MM-DD.json`
8. Place cover image into `public/covers/YYYY-MM-DD-cover.jpg`
9. Update `data/manifest.json` when the day goes live

## Main routes

- `/` — live cover + summary overview
- `/news/1` ... `/news/9` — story mode detail pages
- `/admin` — stable local content operations panel

## Run locally

```bash
npm install
npm run dev
```

Open:
- `http://localhost:3000`
- `http://localhost:3000/admin`
