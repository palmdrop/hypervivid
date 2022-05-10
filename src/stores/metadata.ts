import { writable } from "svelte/store";
import metadata from '$nodes/metadata.json';

export const metadata$ = writable<
  typeof metadata
>(metadata);