import type { SvelteComponent } from "svelte";

export type GlobComponentImport = Record<
  string,
  () => Promise<SvelteComponent>
>;