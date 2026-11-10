#!/usr/bin/env bash
# Render every screen (or the ones passed) to renders/<name>.png at 2x with headless Chrome.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
files=("$@"); [ ${#files[@]} -eq 0 ] && files=(screens/*.html)
for f in "${files[@]}"; do
  name="$(basename "$f" .html)"
  if [[ "$name" == c0* || "$name" == a0* ]]; then size="1280,800"; else size="390,844"; fi
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --window-size="$size" --virtual-time-budget=4000 --default-background-color=00000000 \
    --screenshot="$PWD/renders/$name.png" "file://$PWD/$f" >/dev/null 2>&1
  echo "rendered $name"
done
