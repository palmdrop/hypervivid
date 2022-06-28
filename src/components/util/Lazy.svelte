<script lang="ts">
  import { onMount, SvelteComponent } from "svelte";

  export let component: () => Promise<SvelteComponent>;
  export let delayMs: null | number = null;

  // Bindings
  export let isDone = false;
  export let failed = false;

  let loadedComponent: SvelteComponent | null = null;
  let timeout: NodeJS.Timeout;
  let showFallback = !delayMs;

  onMount(() => {
    if (delayMs) {
      timeout = setTimeout(() => {
        showFallback = true;
      }, delayMs);
    }

    component().then(module => {
      loadedComponent = module.default;
      isDone = true;
    }).catch(() => {
      failed = true;
      isDone = true;
    });

    return () => clearTimeout(timeout);
  });
</script>

{#if loadedComponent}
  <svelte:component 
    this={loadedComponent} 
    {...$$restProps} 
  />
{:else if showFallback}
  <slot />
{/if}
