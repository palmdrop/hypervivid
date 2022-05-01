<script lang="ts">
  import type { GlobComponentImport } from "$types/imports";
  import type { NodeContext } from "$types/nodes";
  import type { SvelteComponent } from "svelte";

  const lazyComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.svelte');
  const lazyPreviewComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+preview.svelte');

  export let name: string;
  export let context: NodeContext;

  $: path = `../../nodes/${name}/${name}.svelte`;
  let notFound = false;
  let component: SvelteComponent;

  const setup = () => {
    console.log(path, lazyComponents);
    const componentPromise = lazyComponents[path];
    if(!componentPromise) {
      notFound = true; 
      return;
    }

    notFound = false;
    componentPromise().then(c => {
      component = c;
    })
  }

  $: setup();

</script>

{#if notFound }
  <div>
    Component { name } not found
  </div>
{:else}
  {#key component }
    <svelte:component this={component} /> 
  {/key}
{/if}

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->