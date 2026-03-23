# ROLLBACK

If needed, restore only the affected public files:

```bash
git restore app/page.tsx \
  app/archive/page.tsx \
  'app/archive/[locale]/[day]/page.tsx' \
  'app/[locale]/edition/[day]/page.tsx' \
  'app/news/[id]/page.tsx' \
  RELEASE-NOTES-public-visual-consistency-micro-pass.md \
  VERIFY.md \
  ROLLBACK.md
```
