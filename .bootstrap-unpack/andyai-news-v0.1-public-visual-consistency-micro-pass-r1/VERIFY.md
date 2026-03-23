# VERIFY

Run after overlay:

```bash
npm run build
npm run soft:ready
git status --short
```

Expected:

- build passes
- soft-ready passes
- only intended public page files and release notes are changed
