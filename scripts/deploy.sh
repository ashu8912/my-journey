#!/usr/bin/env bash
# Build the site and upload it to the VPS. Usage: npm run deploy
set -euo pipefail

HOST="${DEPLOY_HOST:-root@72.61.232.89}"
DEST="/var/www/ashughildiyal.cloud/"

cd "$(dirname "$0")/.."
npm run build
rsync -az --delete dist/ "$HOST:$DEST"
echo "Deployed → https://ashughildiyal.cloud"
