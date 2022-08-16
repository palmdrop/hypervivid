import type { SvelteComponent } from "svelte";

export type GlobComponentImport = Record<
  string,
  () => Promise<SvelteComponent>
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GlobImport<T = Record<string, any>> = Record<string, T>;