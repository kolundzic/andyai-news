# ROLLBACK — Home / Archive CTA Refinement Micro Pass

If rollback is needed:

1. Restore:
   - `app/page.tsx`
   - `app/archive/page.tsx`
2. Remove:
   - `RELEASE-NOTES-home-archive-cta-refinement-micro-pass.md`
3. Revert the commit if already pushed:
   - `git revert <commit-sha>`
   or reset locally if appropriate before push.
4. Remove the created tag/release only if required by policy.

This pack is a small public UI refinement and should have a small rollback scope.
