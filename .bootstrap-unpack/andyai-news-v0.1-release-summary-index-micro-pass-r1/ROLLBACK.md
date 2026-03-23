# ROLLBACK

If this pack needs to be reverted:

1. Remove the added file:
   - `docs/99-index/release-summary-index.md`
2. Revert the commit if needed:
   - `git revert <commit-hash>`
3. If a tag/release was created by mistake, remove them only if the team explicitly decides to unwind the release history.
