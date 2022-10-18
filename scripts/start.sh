#!/bin/bash

npm run prebuild

if [ ! "$1" = "-n" ];
then
  npm run process
  npx chokidar \
    "src/nodes/*/metadata.*" \
    -c "npm run process" &
fi

npm run dev 