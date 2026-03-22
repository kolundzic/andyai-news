# AndyAI News — v1.2.0-fix

## Consolidated Admin Dashboard Patch

This patch replaces the old `Admin Integration Bridge` landing page at `/admin`
with a real consolidated `v1.2.0` dashboard.

## Why this patch exists

The prior `v1.2.0` consolidated bundle did not replace `app/admin/page.tsx`,
so the production admin continued to show the earlier `v1.2.0-a` bridge screen.

## What this patch changes

- Replaces `app/admin/page.tsx`
- Promotes `/admin` to a true consolidated dashboard
- Adds clear navigation cards for:
  - `/admin/history`
  - `/admin/locales`
  - `/admin/newsletter`
  - `/admin/voice`
  - `/admin/v110a`
- Keeps `/admin/v110a` positioned as the safe preview lane
- Keeps scope intentionally small and corrective

## Expected result

The main production admin should now present:
- one consolidated v1.2.0 dashboard
- clear operator navigation
- correct separation between production and preview lanes
