<script lang="ts">
  import { setContext, type SvelteComponent } from "svelte";
  import Lazy from "$components/util/Lazy.svelte";
  import DefaultPreview from "./preview/DefaultPreview.svelte";
  import { metadata$ } from "$stores/metadata";
  import type { GlobComponentImport } from "$types/imports";
  import type { NodeName, NodeMode, NodeMetadata, NodeContext } from "$types/nodes";
  import NodeLoader from "./loader/NodeLoader.svelte";

  const lazyComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.svelte');
  const lazyPreviewComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.preview.svelte');

  export let name: NodeName;
  export let mode: NodeMode;
  export let fromSlot: boolean = false;
  export let index: number = -1; // If in a list

  // Bindings
  export let isLoaded = false;

  let nodeMetadata: NodeMetadata;

  $: if(mode !== 'link') {
    nodeMetadata = {
      ...$metadata$.nodes[name],
      links: $metadata$.links[name]
    } as NodeMetadata;

    setContext<NodeContext>(name, {
      name: name as NodeName,
      metadata: nodeMetadata,
      mode
    });
  }

  $: showPreview = (
    !['only', 'main', 'inline'].includes(mode) &&
    !nodeMetadata.inline
  );

  $: previewPath = `../../nodes/${name}/${name}.preview.svelte`

  $: isLoaded = 
    fromSlot || // If supplied from slot, this component cannot determine load status
    mode === 'link' || // If in link mode, the node does not need loading 
    (showPreview && !lazyPreviewComponents[previewPath]); // In this case, default preview will be shown, requiring no loading

  let component: (() => Promise<SvelteComponent>) | undefined;
  let showDefaultPreview = false;

  $: {
    if(mode !== 'link' && !fromSlot) {
      if(showPreview) {
        component = lazyPreviewComponents[
          previewPath
        ];

        showDefaultPreview = !component;
      } else {
        component = lazyComponents[
          `../../nodes/${name}/${name}.svelte`
        ];
      }
    }
  }
</script>

{#if mode === 'link' }
  <a
    href={`/nodes/${name}`}
  >
    { name }
  </a>
{:else if showDefaultPreview }
  <DefaultPreview
    name={name}
    flipped={index !== -1 && index % 2 === 1}
  />
{:else if component}
  {#key component}
    <Lazy
      bind:isLoaded
      { component }
    >
      <NodeLoader 
        { mode }
        { name }
      />
    </Lazy>
  {/key}
{:else}
  <slot />
{/if}

<style>
</style>