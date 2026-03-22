# AndyAI News — v1.2.0-c — Multilingual Structure

This release introduces the first safe multilingual structure bridge for AndyAI News.

## Goals
- establish canonical locale types and config
- provide locale registry + helper functions
- add central admin visibility for multilingual readiness
- expose a JSON route for locale structure snapshot
- keep `/admin/v110a` untouched as the safe preview/regression lane

## Included
- `lib/locales/types.ts`
- `lib/locales/config.ts`
- `lib/locales/helpers.ts`
- `app/admin/locales/page.tsx`
- `app/api/admin/locales/route.ts`
- `data/locales/locales-snapshot.json`

## Notes
This is a minimal safe overlay intended to prepare:
- locale-aware content
- locale-specific edition structure
- future public locale editions
- future TTS / voice-over locale handling
