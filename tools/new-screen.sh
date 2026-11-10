#!/usr/bin/env bash
# Wrap a screen body in the shared head. Usage: tools/new-screen.sh <file> "<title>" < body.html
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
{ sed "s|{{TITLE}}|$2|" "$here/head.html"; cat; echo "</html>"; } > "$1"
