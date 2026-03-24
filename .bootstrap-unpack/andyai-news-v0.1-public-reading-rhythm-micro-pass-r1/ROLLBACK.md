# ROLLBACK — Public Reading Rhythm Micro Pass

If rollback is needed:

1. Restore:
   - `app/archive/[locale]/[day]/page.tsx`
   - `app/[locale]/edition/[day]/page.tsx`
   - `app/news/[id]/page.tsx`
2. Remove:
   - `RELEASE-NOTES-public-reading-rhythm-micro-pass.md`
3. Revert the commit if already pushed:
   - `git revert <commit-sha>`
   or reset locally if appropriate before push.
4. Remove the created tag/release only if required by policy.

This pack is a small public reading-surface refinement and should have a small rollback scope.
