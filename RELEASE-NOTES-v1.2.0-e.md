# AndyAI News — v1.2.0-e
## TTS / Voice-over Prep

This overlay introduces the first safe TTS / voice-over preparation layer for AndyAI News.

## Included
- Canonical voice prep types
- Voice prep config and helper utilities
- `/admin/voice` preview surface
- `/api/admin/voice` JSON snapshot route
- Seed voice snapshot data

## Intent
This is a prep layer only.
It does not yet introduce real audio generation, provider integration, or public audio publishing.
It prepares the newsroom operating system for later voice delivery hooks and real audio asset generation.

## Notes
- `/admin/v110a` remains untouched as the safe preview / regression lane
- Main `/admin` continues becoming the central production lane
- This cut is designed as a minimal safe overlay for the repo execution ladder
