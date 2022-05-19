#!/bin/bash

npm run prebuild

npx chokidar \
  "src/nodes/*/metadata.*" \
  -c "npm run prebuild" &

npm run dev 