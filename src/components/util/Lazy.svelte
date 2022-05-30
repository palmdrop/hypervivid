<script lang="ts">
  import { onMount, SvelteComponent } from "svelte";

  export let component: () => Promise<SvelteComponent>;
  export let delayMs: null | number = null;

  // Bindings
  export let isLoaded = false;

  let loadedComponent: SvelteComponent | null = null;
  let timeout: NodeJS.Timeout;
  let showFallback = !delayMs;

  let props: Record<string, any>;
  $: {
    const { component, delayMs, isLoaded, ...restProps } = $$props;
    props = restProps;
  }

  onMount(() => {
    if (delayMs) {
      timeout = setTimeout(() => {
        showFallback = true;
      }, delayMs);
    }

    component().then(module => {
      loadedComponent = module.default;
      isLoaded = true;
    });

    return () => clearTimeout(timeout);
  });
</script>

{#if loadedComponent}
  <svelte:component this={loadedComponent} {...props} />
{:else if showFallback}
  <slot />
{/if}
