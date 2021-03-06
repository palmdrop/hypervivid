import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			layout: {
				_: './src/routes/__layout-markdown-default.svelte'
			},
			extensions: [
				'.svelte.md'
			]
		})
	],
	extensions: [
		'.svelte',
		'.svelte.md',
	],
	kit: {
		vite: {
			resolve: {
				alias: {
					$components: path.resolve("src/components"),
					$nodes: path.resolve("src/nodes"),
					$stores: path.resolve("src/stores"),
					$types: path.resolve("src/types"),
					$utils: path.resolve("src/utils"),
					$constants: path.resolve("src/constants.ts")
				}
			},
			assetsInclude: [
				'**/*.hdr'
			]
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		prerender: {
			default: true
		}
	}
};

export default config;
