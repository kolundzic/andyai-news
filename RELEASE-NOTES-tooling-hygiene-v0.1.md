# AndyAI News — Tooling / Workspace Hygiene Pack v0.1

## Release type
Technical hygiene / tooling normalization

## Status
Completed

## Goal
Reduce build ambiguity and normalize workspace behavior without expanding product scope.

## Included
- explicit Next.js turbopack root configuration
- explicit package manager declaration in package.json
- build verification after hygiene changes

## Why this was needed
The build was succeeding, but Next.js emitted a workspace-root warning because multiple lockfiles were detected outside and inside the repository.

## Normalization decision
This repository is currently treated as an npm-based project.

Signals supporting this decision:
- local workflow uses `npm run build`
- repository already contains `package-lock.json`

## Result
- clearer repository tooling identity
- reduced workspace-root ambiguity
- cleaner base for future releases

## Scope discipline
No product features were added in this pack.
No UI/admin/public behavior was expanded.
This was a tooling-only stabilization step.
