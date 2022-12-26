import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      $components: path.resolve("src/components"),
      $nodes: path.resolve("src/nodes"),
      $tags: path.resolve("src/tags"),
      $stores: path.resolve("src/stores"),
      $types: path.resolve("src/types"),
      $utils: path.resolve("src/utils"),
      $constants: path.resolve("src/constants.ts")
    }
  },
  modulePreload: {
    polyfill: false
  },
  build: {
    modulePreload: {
      polyfill: false
    }
  },
  assetsInclude: [
    '**/*.hdr'
  ],
  plugins: [
    sveltekit()
  ]
};

export default config;