# AndyAI News v1.3.0-e — Voice Delivery Hooks

## Summary
This pack introduces the first voice delivery hook layer for AndyAI News.

## Included
- `lib/voice-delivery/types.ts`
- `lib/voice-delivery/config.ts`
- `lib/voice-delivery/helpers.ts`
- `app/admin/voice/delivery/page.tsx`
- `app/api/voice/delivery/route.ts`
- `data/voice-delivery/voice-delivery-snapshot.json`

## Purpose
This is a minimal safe overlay that:
- adds canonical voice delivery hook types
- adds locale/day-aware voice delivery helper logic
- adds `/admin/voice/delivery`
- adds `/api/voice/delivery`
- does not modify `/admin/v110a`
- prepares the ground for the future audio generation and asset publishing layer
