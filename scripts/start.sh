#!/bin/bash

npm run prebuild
npm run process

npx chokidar \
  "src/nodes/*/metadata.*" \
  -c "npm run process" &

npm run dev 