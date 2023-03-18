#!/bin/bash

npm run prebuild

if [ ! "$1" = "-n" ];
then
  npm run process-all
  npx chokidar \
    "src/nodes/*/metadata.*" \
    -c "npm run process-all" &
fi

npm run dev 