#!/bin/bash

# git submodule foreach 'npm install'
# svelte-kit build
# rm -r ./build
rm -r build
cd ./src/modules/synthetic-grids
npm install
npm run build
cd ../../../
cp -r ./src/modules/synthetic-grids/dist ./build