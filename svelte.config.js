import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		vite: {
			resolve: {
				alias: {
					$components: path.resolve("src/components"),
					$nodes: path.resolve("src/nodes"),
					$stores: path.resolve("src/stores"),
					$types: path.resolve("src/types"),
					$utils: path.resolve("src/utils")
				}
			}
		},
		adapter: adapter(),
		prerender: {
			default: true
		}
	}
};

export default config;
