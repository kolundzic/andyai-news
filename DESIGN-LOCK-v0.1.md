# AndyAI News — Design Lock Pack v0.1

## Status
Active

## Stable public design baseline
- Commit: `86456f4`
- Meaning: last known stable public surface design baseline after recovery

## Sensitive public files
These files should be treated as design-sensitive:
- `app/page.tsx`
- `app/[locale]/edition/[day]/page.tsx`
- `app/archive/[locale]/[day]/page.tsx`
- `app/news/[id]/page.tsx`
- `components/NewsCard.tsx`
- `components/StoryPager.tsx`
- `app/globals.css`

## Design rules
1. CSS-first only
2. No Tailwind introduction unless done as a separate explicit tooling migration
3. No broad multi-file visual rewrites without a visual checkpoint
4. Each public polish step should be small, isolated, and reversible
5. Always run `npm run build` before commit
6. Always visually verify public surface before starting the next visual pack
7. If the product loses its visual identity, rollback to the last known stable design baseline

## Recommended workflow
- make one small visual change
- build
- visually inspect
- commit
- deploy
- inspect again
- only then continue

## Forbidden without explicit checkpoint
- rewriting homepage, edition, archive, story, and globals in one sweep
- switching styling paradigm mid-stream
- assuming a utility-class system exists if the repo is CSS-first
- “cleanup” rewrites that alter the public visual identity unintentionally

## Recovery rule
If public design regresses:
1. stop feature work
2. restore stable public files
3. verify build
4. verify visual baseline
5. only then resume polish work

## Intent
This file exists to preserve the AndyAI News public visual identity while allowing safe, incremental improvements.
