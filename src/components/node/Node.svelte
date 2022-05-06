<script lang="ts">
  import Lazy from "$components/util/Lazy.svelte";
  import { metadata$ } from "$stores/metadata";
  import type { GlobComponentImport } from "$types/imports";
  import type { Link, NodeContext, NodeMetadata } from "$types/nodes";
  import type { SvelteComponent } from "svelte";

  const lazyComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.svelte');
  const lazyPreviewComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.preview.svelte');

  export let name: string;
  export let context: NodeContext;

  // TODO figure out if I need all metadata for each node? if it's just in preview, do I need it?
  // TODO if in link mode, I definitely do not need it!
  let nodeMetadata: NodeMetadata;
  $: nodeMetadata = {
    ...$metadata$.nodes[name],
    links: $metadata$.links[name]
  } as NodeMetadata;

  let component: (() => Promise<SvelteComponent>) | undefined;
  let asLink = false;

  $: {
    if(context === 'link') {
      asLink = true;
    } else {
      const showPreview = (
        !['single', 'multiple', 'multiple-primary'].includes(context) &&
        !nodeMetadata.inline
      );

      if(!showPreview) {
        component = lazyComponents[
          `../../nodes/${name}/${name}.svelte`
        ];
      } else {
        component = lazyPreviewComponents[
          `../../nodes/${name}/${name}.preview.svelte`
        ] ?? (() => import('./DefaultPreview.svelte'));
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
{:else if !component}
  <div>
    Component { name } not found
  </div>
{:else}
  {#key component}
    <Lazy
      component={component}
      name={name}
      nodeMetadata={nodeMetadata}
    >
      Loading...
    </Lazy>
  {/key}
{/if}

<style>
</style>