<script lang="ts">
  import Lazy from "$components/util/Lazy.svelte";
  import { metadata$ } from "$stores/metadata";
  import type { GlobComponentImport } from "$types/imports";
  import type { Link, NodeContext, NodeMetadata } from "$types/nodes";
  import { getStringComparator } from "$utils/general";
  import type { SvelteComponent } from "svelte";

  const lazyComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.svelte');
  const lazyPreviewComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.preview.svelte');

  export let name: string;
  export let context: NodeContext;

  // TODO figure out if I need all metadata for each node? if it's just in preview, do I need it?
  let metadata: Record<string, any>
  $: metadata = $metadata$.nodes[name];

  // TODO: sort links in build step?
  $: links = $metadata$.links[name].sort((a, b) => getStringComparator(a.to, b.to)) as Link[];
  $: tags = metadata.tags as string[];

  $: nodeMetadata = {
    ...metadata,
    links,
    tags
  } as NodeMetadata;

  $: primary = ['single', 'multiple-primary'].includes(context);
  $: showPreview = !primary && !nodeMetadata.inline; 

  let component: (() => Promise<SvelteComponent>) | undefined;

  $: {
    if(!showPreview) {
      const path = `../../nodes/${name}/${name}.svelte`;
      component = lazyComponents[path];
    } else {
      const previewPath = `../../nodes/${name}/${name}.preview.svelte`;
      component = lazyPreviewComponents[previewPath] ?? (() => import('./DefaultPreview.svelte'));
    }
  }
</script>

<!-- TODO: clean up and show loading when loading -->

{#if !component}
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