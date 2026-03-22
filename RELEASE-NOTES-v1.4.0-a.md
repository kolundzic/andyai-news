# AndyAI News v1.4.0-a — Audio Job Model & Render Queue Pack

This release introduces the first real audio execution layer for AndyAI News.

## Added
- Canonical `AudioJobStatus` and `AudioSourceKind` models
- `AudioJob` interface for queueable audio render work
- Queue/config/helper layer under `lib/audio-jobs/`
- Admin queue screen at `/admin/audio/queue`
- API snapshot endpoint at `/api/audio/queue`
- Initial JSON snapshot under `data/audio-jobs/queue-snapshot.json`

## Intent
This is a minimal safe execution cut:
- no real TTS provider yet
- no public audio routes yet
- no player yet
- no archive yet

It prepares the repo for the next audio packs by establishing deterministic job, status and queue discipline.
