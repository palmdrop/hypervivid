#!/bin/bash
npx node \
  --no-warnings \
  --loader ts-node/esm \
  ./src/scripts/generate-node.ts $@