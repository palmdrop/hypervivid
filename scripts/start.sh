#!/bin/bash

npm run prebuild

npx chokidar \
  "src/nodes/*/metadata.json" \
  -c "npm run prebuild" &

npm run dev 