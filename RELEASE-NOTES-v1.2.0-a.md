# AndyAI News — v1.2.0-a — Admin Integration Bridge

## Purpose

This pack introduces the first safe bridge between the legacy live admin surface and the new structured newsroom model.

## Scope

- keeps `/admin/v110a` as safe preview / regression lane
- introduces shared admin bridge types
- adds central admin bridge registry
- adds route and section helpers for gradual migration
- adds a simple `/admin` bridge status landing panel
- avoids aggressive replacement of legacy flows

## Notes

This is a minimal implementation cut intended for incremental integration.
It does not yet replace the full legacy admin workflow.
