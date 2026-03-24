# ROLLBACK — Pack Launcher Spec Micro Pass

If rollback is needed:

1. Delete:
   - `docs/02-architecture/pack-launcher-spec.md`
   - `RELEASE-NOTES-pack-launcher-spec-micro-pass.md`
2. Revert the commit if already pushed:
   - `git revert <commit-sha>`
   or reset locally if appropriate before push.
3. Remove the created tag/release only if required by policy.

This pack is docs-only, so rollback scope should remain small.
