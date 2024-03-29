<script lang="ts">
  import { setContext, type SvelteComponent } from "svelte";
  import Lazy from "$components/util/Lazy.svelte";
  import DefaultPreview from "./preview/DefaultPreview.svelte";
  import { metadata$ } from "$stores/metadata";
  import type { GlobComponentImport } from "$types/imports";
  import type { NodeName, NodeMode, NodeMetadata, NodeContext } from "$types/nodes";
  import NodeLoader from "./loader/NodeLoader.svelte";
  import Error from './Error.svelte';
  import { NodeErrorBoundary } from "../error";

  const lazyComponents = import.meta
    .glob('$nodes/*/[^.]+.svelte', { eager: false }) as GlobComponentImport;

  const lazyPreviewComponents = import.meta
    .glob('$nodes/*/[^.]+.preview.svelte', { eager: false }) as GlobComponentImport;

  export let name: NodeName;
  export let mode: NodeMode;
  export let fromSlot = false;
  export let index = -1; // If in a list
  export let showLoader = true;

  // Bindings
  export let isDone = false;
  let failed = false;

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

  $: showPreview = nodeMetadata && (
    (
      !['only', 'main', 'inline'].includes(mode) &&
      !nodeMetadata.inline
    ) || (
      mode === 'preview-force'
    )
  );

  $: previewPath = `/src/nodes/${name}/${name}.preview.svelte`

  $: isDone = 
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
          `/src/nodes/${name}/${name}.svelte`
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
{:else if component && nodeMetadata}
  {#key component}
    <Lazy
      bind:isDone
      bind:failed
      ComponentWrapper={NodeErrorBoundary}
      { component }
      {...$$restProps}
    />
    {#if showLoader && !isDone && !failed}
      <div class="node-loader">
        <NodeLoader {mode} />
      </div>
    {:else if failed}
      <Error nodeName={name} />
    {/if}
  {/key}
{:else}
  <NodeErrorBoundary>
    <slot />
  </NodeErrorBoundary>
{/if}

<style>
  .node-loader {
    min-height: 100vh;
  }
</style>