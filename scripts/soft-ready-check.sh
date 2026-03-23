#!/usr/bin/env bash
set -u

echo "━━━━━━━━━━━━━━━━━━━━"
echo "AndyAI News — SOFT READY CHECK"
echo "━━━━━━━━━━━━━━━━━━━━"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

PASS=true

run_step() {
  local label="$1"
  shift
  echo ""
  echo "▶ $label"
  if "$@"; then
    echo "✔ $label"
    return 0
  else
    echo "✖ $label"
    PASS=false
    return 1
  fi
}

echo ""
echo "1) Install sanity"
npm install

run_step "Lint" npm run lint || true
run_step "Production build" npm run build || true
run_step "Content sanity check" node scripts/content-sanity-check.mjs || true

if [ "$PASS" != true ]; then
  echo ""
  echo "Skipping route smoke check because an earlier step failed."
  echo "━━━━━━━━━━━━━━━━━━━━"
  echo "SOFT READY RESULT: FAIL"
  exit 1
fi

echo ""
echo "2) Starting local server for smoke test..."
npm run start > /tmp/andyai-news-start.log 2>&1 &
SERVER_PID=$!

cleanup() {
  if kill -0 "$SERVER_PID" >/dev/null 2>&1; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

echo "Waiting for server..."
READY=false
for i in {1..20}; do
  if curl -fsS http://localhost:3000 >/dev/null 2>&1; then
    READY=true
    break
  fi
  sleep 1
done

if [ "$READY" != true ]; then
  echo "✖ Server did not start on http://localhost:3000"
  echo "---- start log ----"
  cat /tmp/andyai-news-start.log || true
  echo "-------------------"
  echo "SOFT READY RESULT: FAIL"
  exit 1
fi

run_step "Route smoke check" node scripts/route-smoke-check.mjs || true

echo ""
echo "━━━━━━━━━━━━━━━━━━━━"
if [ "$PASS" = true ]; then
  echo "SOFT READY RESULT: PASS"
  exit 0
else
  echo "SOFT READY RESULT: FAIL"
  exit 1
fi
