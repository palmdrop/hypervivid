<script lang="ts">
  import { setContext, type SvelteComponent } from "svelte";
  import Lazy from "$components/util/Lazy.svelte";
  import DefaultPreview from "./DefaultPreview.svelte";
  import { metadata$ } from "$stores/metadata";
  import type { GlobComponentImport } from "$types/imports";
  import type { NodeName, NodeMode, NodeMetadata, NodeContext } from "$types/nodes";

  const lazyComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.svelte');
  const lazyPreviewComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.preview.svelte');

  export let name: NodeName;
  export let mode: NodeMode

  // TODO figure out if I need all metadata for each node? if it's just in preview, do I need it?
  // TODO if in link mode, I definitely do not need it!
  let nodeMetadata: NodeMetadata;

  $: if(mode !== 'link') {
    nodeMetadata = {
      ...$metadata$.nodes[name],
      links: $metadata$.links[name]
    } as NodeMetadata;

    setContext<NodeContext>(name, {
      name: name as NodeName,
      metadata: nodeMetadata
    })
  }

  let component: (() => Promise<SvelteComponent>) | undefined;
  let asLink = false;
  let showDefaultPreview = false;

  $: {
    if(mode === 'link') {
      asLink = true;
    } else {
      const showPreview = (
        !['single', 'multiple', 'multiple-primary'].includes(mode) &&
        !nodeMetadata.inline
      );

      if(showPreview) {
        component = lazyPreviewComponents[
          `../../nodes/${name}/${name}.preview.svelte`
        ]

        showDefaultPreview = !component;
      } else {
        component = lazyComponents[
          `../../nodes/${name}/${name}.svelte`
        ];
      }
    }
  }
</script>

{#if asLink}
  <a
    href={`/nodes/${name}`}
  >
    { name }
  </a>
{:else if showDefaultPreview }
  <DefaultPreview
    name={name}
  />
{:else if component}
  {#key component}
    <Lazy
      component={component}
    >
      Loading...
    </Lazy>
  {/key}
{:else}
  <div>
    Component { name } not found
  </div>
{/if}

<style>
</style>