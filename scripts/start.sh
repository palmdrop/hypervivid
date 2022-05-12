#!/bin/bash

npm run prebuild

npx chokidar \
  "src/nodes/*/metadata.ts" \
  -c "npm run prebuild" &

npm run dev 