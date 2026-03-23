# andyai.news — Release Summary Index

**Status:** active  
**Version:** v0.1  
**Scope:** release and stabilization index  
**Owner:** Andy + AI  
**Purpose:** Central summary page for recent polish, docs, and release milestones across the andyai.news pilot.

--------------------

## Why this file exists

As the repo becomes more stable, individual improvements are increasingly shipped as small, disciplined packs.

That is good for execution, but over time it can make the repo history harder to scan quickly.

This file exists to solve that problem.

It gives one clean place to see:

- what was recently improved
- which packs were code-oriented vs docs-oriented
- which items were locked with GitHub releases and tags
- how the recent stabilization path actually unfolded

--------------------

## Recent stabilization and release sequence

| Order | Type | Identifier | Title | Result |
|---|---|---|---|---|
| 1 | Commit milestone | `64ff842` | audio admin micro polish pass | Tightened audio admin clarity and consistency |
| 2 | Commit milestone | `f45120e` | tighten public content flow | Improved public reading continuity from home to edition |
| 3 | Commit milestone | `cdf383e` | polish news detail page continuity | Improved story detail continuity and reading rhythm |
| 4 | Commit milestone | `d56af23` | docs: sync recent milestone status and release notes | Synced root documentation with recent repo state |
| 5 | Commit milestone | `90faf64` | docs: refresh docs status dashboard | Refreshed status dashboard to reflect real current state |
| 6 | Tagged release | `v0.1-public-visual-consistency-micro-pass-r1` | Public Visual Consistency Micro Pass | Locked a ZIP/script-based public UI refinement pass |
| 7 | Tagged release | `v0.1-archive-discovery-micro-pass-r1` | Archive Discovery Micro Pass | Locked a ZIP/script-based archive discovery refinement pass |

--------------------

## What changed in this phase overall

This stabilization band improved the repo in three important ways:

### 1. Public-facing clarity

The public surface now has stronger continuity across:

- home
- archive
- archive/day
- edition/day
- news detail

### 2. Admin calm and operational readability

The audio admin flow is easier to scan and more visually consistent.

### 3. Better release discipline

The repo now has both:

- commit-based milestone history
- ZIP + apply-script + tag + release history

That means improvements are no longer just “diffs.”

They are now increasingly locked as traceable operational strikes.

--------------------

## Canonical execution rule now in force

**1 UDARAC = 1 ZIP = 1 APPLY SCRIPT = 1 COMMIT = 1 TAG = 1 RELEASE**

This is the current factory rule for small and medium upgrade packs on stable repos.

--------------------

## Practical meaning

For `andyai.news`, this means:

- fewer risky manual terminal edits
- more repeatable upgrade passes
- cleaner Git history
- stronger rollback logic
- clearer release anchoring

In simple terms:

**less chaos, more factory discipline.**

--------------------

## Recommended next use of this file

Use this file when you need to quickly answer:

- What did we recently improve?
- Which recent passes are already locked?
- Which changes were released canonically?
- What is the latest stable rhythm of the repo?

--------------------

## Suggested future extension

Later, this file can grow into a larger release index with:

- grouped release families
- links to specific GitHub releases
- pack-to-pack dependency notes
- “why this mattered” summaries per milestone

For now, it should stay small, readable, and operational.

--------------------

## Navigation

- [Back to Docs Landing](../README.md)
- [Back to Docs Index](./docs-pack-index.md)
- [Back to Docs Status Dashboard](./docs-status-dashboard.md)
