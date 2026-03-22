# AndyAI News

**Local-first AI news production system** for structured daily publishing.

AndyAI News is not just a blog, not just a CMS, and not just an editor.

It is a **content operating system** for producing daily AI news with:

- structured JSON-based content input
- admin-first editing workflow
- built-in validation
- cover image workflow
- publish checklist
- local publish pack helper
- GitHub + Vercel deployment flow

━━━━━━━━━━━━━━━━━━━━

## Why this exists

Most publishing tools are built for generic content editing.

AndyAI News is built for a very specific operational reality:

- every day has a dataset
- every dataset must be validated
- every publish day needs a cover image
- every issue must be production-ready before going live
- the workflow must stay simple, fast, and repeatable

This repo turns that process into a **stable daily operating system**.

━━━━━━━━━━━━━━━━━━━━

## Core idea

**Story-first AI briefing + operator-first admin workflow**

Public side:
- clean homepage with daily cover
- 9 story summary blocks
- tap into detail view / story mode

Admin side:
- import JSON
- create new day draft
- normalize structure
- validate content
- fix cover path
- review publish checklist
- export final dataset

This makes AndyAI News ideal as a foundation for:

- AI news briefings
- editorial bulletins
- digital magazines
- multilingual content engines
- voice-over publishing workflows
- tutorial / book / media factories

━━━━━━━━━━━━━━━━━━━━

## Live app

- Public: `https://andyai-news.vercel.app`
- Admin: `https://andyai-news.vercel.app/admin`

━━━━━━━━━━━━━━━━━━━━

## Main routes

- `/` — homepage with cover + daily story overview
- `/news/1` ... `/news/9` — individual story pages
- `/admin` — stable MVP operator panel

━━━━━━━━━━━━━━━━━━━━

## Stable MVP workflow

1. Open `/admin`
2. Import JSON or create a new day draft
3. Edit all 9 stories
4. Review validation results
5. Apply the correct cover image path
6. Review the publish checklist
7. Export `news-YYYY-MM-DD.json`
8. Place the matching cover image in `public/covers/YYYY-MM-DD-cover.jpg`
9. Update `data/manifest.json` when that day becomes live
10. Verify locally, then deploy

━━━━━━━━━━━━━━━━━━━━

## Project structure

    andyai-news/
    ├── app/
    │   ├── admin/page.tsx
    │   ├── news/[id]/page.tsx
    │   ├── page.tsx
    │   └── globals.css
    ├── components/
    │   └── news.ts
    ├── data/
    │   ├── manifest.json
    │   └── news-YYYY-MM-DD.json
    ├── public/
    │   └── covers/
    ├── scripts/
    ├── ADMIN-SHELL.md
    ├── WORKFLOW.md
    ├── RELEASE-NOTES-v1.0.md
    ├── README.md
    ├── LICENSE
    ├── package.json
    └── tsconfig.json

━━━━━━━━━━━━━━━━━━━━

## Run locally

    npm install
    npm run dev

Open:

- `http://localhost:3000`
- `http://localhost:3000/admin`

━━━━━━━━━━━━━━━━━━━━

## What makes this different

### 1) Local-first workflow
Content is managed as structured files, not trapped inside a remote CMS.

### 2) Operational discipline
Validation, checklist, and file-path conventions reduce publishing mistakes.

### 3) Daily issue model
The system is designed around date-based daily releases.

### 4) Production-ready simplicity
Small surface area, clear workflow, fast editing, easy deployment.

### 5) Expandable foundation
This MVP can evolve into a larger publishing platform without losing clarity.

━━━━━━━━━━━━━━━━━━━━

## Current version

**v1.1.0 — Operator Upgrade Pack consolidated**

Included in the current release line:

- public homepage
- story detail pages
- admin operator panel
- JSON import / export
- draft helper
- validation panel
- cover image helper
- publish checklist
- local publish pack helper
- production lock panel
- preview operator upgrade route at `/admin/v110a`
- multi-day navigation preview
- draft autosave preview
- manifest helper / live day switch preview
- newsletter export preview

━━━━━━━━━━━━━━━━━━━━

## Roadmap

Planned next directions:

- integrate selected `/admin/v110a` features into the main `/admin` workflow
- add archive / history mode
- add multilingual publishing structure
- refine newsletter export with stronger real-data binding
- prepare TTS / voice-over workflow
- AI-assisted story generation

━━━━━━━━━━━━━━━━━━━━

## Product direction

AndyAI News can grow in three directions:

### A. Editorial tool
A practical internal system for daily AI briefings.

### B. Publishing engine
A reusable product for newsletters, magazines, and media operations.

### C. Content factory platform
A broader operating system for multilingual text, audio, and visual publishing.

━━━━━━━━━━━━━━━━━━━━

## License

**Apache-2.0**  
© Andrija Kolundzic (Andy)

━━━━━━━━━━━━━━━━━━━━

## Owner

**Andrija Kolundzic (Andy)**  
Founder & Owner

━━━━━━━━━━━━━━━━━━━━

## Vision

AndyAI News is the first layer of a larger idea:

a disciplined, local-first, AI-native publishing factory.

Not just content creation.  
**Content operations.**
