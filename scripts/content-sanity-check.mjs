import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const TARGET_DIRS = ["app", "components", "content", "docs"];
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "dist", "coverage"]);

const FAIL_PATTERNS = [
  /TODO/gi,
  /FIXME/gi,
  /lorem ipsum/gi,
  /test test/gi,
];

const WARN_PATTERNS = [
  /placeholder/gi,
  /coming soon/gi,
];

const ALLOWLIST_WARN = [
  "components/admin-v110a-shell.tsx",
];

let hasFail = false;
let hasWarn = false;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (/\.(ts|tsx|js|jsx|md|mdx|json)$/.test(fullPath)) {
      files.push(fullPath);
    }
  }

  return files;
}

function rel(filePath) {
  return path.relative(ROOT, filePath).replaceAll("\\", "/");
}

function isAllowlistedWarn(filePath) {
  return ALLOWLIST_WARN.includes(rel(filePath));
}

function checkFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const short = rel(filePath);

  for (const pattern of FAIL_PATTERNS) {
    const matches = [...text.matchAll(pattern)];
    if (matches.length > 0) {
      console.log(`FAIL ${short} -> pattern "${pattern}" found ${matches.length} time(s)`);
      hasFail = true;
    }
  }

  for (const pattern of WARN_PATTERNS) {
    if (isAllowlistedWarn(filePath)) continue;

    const matches = [...text.matchAll(pattern)];
    if (matches.length > 0) {
      console.log(`WARN ${short} -> pattern "${pattern}" found ${matches.length} time(s)`);
      hasWarn = true;
    }
  }
}

for (const dir of TARGET_DIRS) {
  const abs = path.join(ROOT, dir);
  const files = walk(abs);
  for (const file of files) {
    checkFile(file);
  }
}

if (hasFail) {
  console.error("Content sanity check failed.");
  process.exit(1);
}

if (hasWarn) {
  console.log("Content sanity check passed with warnings.");
  process.exit(0);
}

console.log("Content sanity check passed.");
