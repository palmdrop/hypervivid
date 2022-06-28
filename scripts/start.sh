#!/bin/bash

npm run prebuild

npx chokidar \
  "src/nodes/*/metadata.*" \
  -c "npm run process" &

npm run dev 