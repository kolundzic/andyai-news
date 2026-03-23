# ROLLBACK — archive discovery micro-pass

## Fast rollback
If this pack causes a problem, revert the affected files from git history or restore them manually.

## Affected files
- `app/archive/page.tsx`
- `app/archive/[locale]/[day]/page.tsx`

## Simple git rollback
Use git log to find the commit created by the apply script, then revert it if needed:

```bash
git revert <commit-sha>
git push
```

## Manual restore fallback
If needed, restore just the two files from a known-good commit.
