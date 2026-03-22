# AndyAI News — v1.3.0-c-fix

## Public Editions Root Overlay Patch

This patch corrects the packaging root for `v1.3.0-c`.

## Purpose
- remove wrapper-folder style packaging mistakes
- place public edition files directly at repo root
- preserve the intended locale-specific public editions structure

## Correct target paths
- `app/[locale]/edition/[day]/page.tsx`
- `app/api/editions/public/route.ts`
- `lib/public-editions/*`
- `data/public-editions/*`

## Notes
If the repo was already fixed manually, applying this overlay may produce no new diff. That is acceptable and keeps the canonical release trail clean.
