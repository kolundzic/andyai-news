# ROLLBACK

If rollback is needed:

1. Inspect the latest commit created by the apply script.
2. Revert that commit on the active branch.
3. Delete the created tag locally and remotely if needed.
4. Delete the GitHub release corresponding to the tag if needed.
