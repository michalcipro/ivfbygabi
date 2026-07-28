#!/usr/bin/env bash
# Připraví repozitář, aby v něm šlo hned spustit typecheck, testy i dev server.
# Běží při startu session (viz .claude/settings.json).

set -uo pipefail
cd "$(dirname "$0")/../.." || exit 0

if [ ! -d node_modules ]; then
  echo "Instaluji závislosti…"
  npm install --no-audit --no-fund >/dev/null 2>&1 || {
    echo "npm install selhal — zkuste ho spustit ručně."
    exit 0
  }
fi

echo "IVF by Gabi — připraveno."
echo "  npm run dev        vývojový server"
echo "  npm run typecheck  kontrola typů"
echo "  npm test           testy doménového jádra"
echo "  npm run seed       ukázkový účet demo@ivfbygabi.cz / demo1234"

if [ -z "${ANTHROPIC_API_KEY:-}" ]; then
  echo "  (ANTHROPIC_API_KEY není nastaven — AI Gabi poběží v offline režimu)"
fi

exit 0
