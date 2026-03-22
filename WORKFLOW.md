# Daily Content Workflow

## Goal

Add a new day by changing only:
- one JSON file
- one cover image

No React or Next.js code edits are needed for normal daily publishing.

## Fast path

### 1. Generate a new day scaffold

```bash
node scripts/add-day.js 2026-03-23
```

This creates:
- `data/news-2026-03-23.json`
- `public/covers/2026-03-23-cover.jpg`
- updates `data/manifest.json`
- updates `components/news.ts`

### 2. Fill the JSON

Open:

```bash
data/news-2026-03-23.json
```

Replace the template content with:
- 9 stories
- summaries
- detailed paragraphs
- key points

### 3. Replace the cover image

Put your new cover image here:

```bash
public/covers/2026-03-23-cover.jpg
```

### 4. Run locally

```bash
npm install
npm run dev
```

## Publishing rule

The app always shows the date from:

```json
data/manifest.json
```

The field `defaultDate` is the live homepage and story dataset.

## Notes

- Keep story IDs from `1` to `9`
- Keep exactly one cover image per date
- Keep the file name format: `news-YYYY-MM-DD.json`
