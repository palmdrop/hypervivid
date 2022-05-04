#!/bin/bash

npx chokidar "src/nodes/*/metadata.json" -c "npm run prebuild" &
npm run dev 