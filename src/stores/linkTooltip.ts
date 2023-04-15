import { writable } from "svelte/store";

export type LinkTooltip = string | undefined;

export const linkTooltip$ = writable<LinkTooltip>(
  undefined
);

/*
export const $ = writable<LinkTooltip>(
  undefined
);
*/