<script lang="ts">
	import type { SvelteComponentDev } from 'svelte/internal';
  import { onMount, SvelteComponent } from "svelte";

  export let ComponentWrapper: typeof SvelteComponentDev | undefined = undefined;
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
    }).catch((error) => {
      failed = true;
      isDone = true;
      console.error(error);
    });

    return () => clearTimeout(timeout);
  });
</script>

{#if loadedComponent}
  {#if ComponentWrapper}
    <ComponentWrapper>
      <svelte:component 
        this={loadedComponent} 
        {...$$restProps} 
      />
    </ComponentWrapper>
  {:else}
    <svelte:component 
      this={loadedComponent} 
      {...$$restProps} 
    />
  {/if}
{:else if showFallback}
  <slot />
{/if}
