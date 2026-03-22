# AndyAI News — v1.2.0-d
## Stronger Newsletter Data Binding

This pack introduces deterministic newsletter data binding for the new newsroom operating model.

### What it adds
- canonical newsletter payload types
- shared newsletter binding config
- helper functions for edition/day/locale aware newsletter payload generation
- `/admin/newsletter` operator view
- `/api/admin/newsletter` snapshot route
- sample snapshot data for deterministic compose preview

### Safe-cut scope
- does not replace the existing newsletter export flow
- does not touch `/admin/v110a`
- prepares the ground for later delivery-grade newsletter integration

### Intent
AndyAI News strengthens the relationship between:
- edition/day spine
- locale-aware content
- newsletter compose payloads
- future delivery hooks
