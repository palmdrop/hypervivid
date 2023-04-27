import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [
		'.svelte', '.svx', '.md'
	],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			layout: {
				_: './src/mdsvex/layout.svelte'
			},
			extensions: [
				'.md'
			],
			smartypants: true
		})
	],
	extensions: [
		'.svelte',
		'.svelte.md',
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		})
	}
};

export default config;
