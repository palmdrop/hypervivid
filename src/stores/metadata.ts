import { writable } from "svelte/store";
import metadata from '$nodes/metadata';
import type { DeepWriteable } from "$types/utils";


export const metadata$ = writable(
  metadata as DeepWriteable<typeof metadata>
);