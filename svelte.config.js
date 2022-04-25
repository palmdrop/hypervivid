import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import path from 'path';
import fs from 'fs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		(() => {
			const filenames = new Set(
				fs.existsSync('test.txt') ? [...JSON.parse(fs.readFileSync('test.txt'))] : []
			);

			return {
				markup: (input) => {
					const { filename, content } = input;
					filenames.add(filename);
					fs.writeFileSync('test.txt', JSON.stringify([...filenames], null, 2));
					return Promise.resolve({ code: content })
				},
				// script: ({ content }) => (Promise.resolve({ code: content })),
				// style: ({ content }) => (Promise.resolve({ code: content })),
			}
		})(),
		preprocess(),
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
