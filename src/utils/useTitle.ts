import { page } from "$app/stores"
import { title$ } from "$stores/head";
import { onDestroy } from "svelte"
import type { Unsubscriber } from "svelte/store";

let unsubscribe: Unsubscriber | null;

export const useTitle = (title: string) => {
  unsubscribe?.();

  unsubscribe = page.subscribe(
    () => title$.set(title)
  );

  onDestroy(() => {
    unsubscribe?.();
    unsubscribe = null;
  });
}