<script lang="ts">
  import { metadata$ } from "$stores/metadata";
  import type { GlobComponentImport } from "$types/imports";
  import type { Link, NodeContext, NodeMetadata } from "$types/nodes";
  import { getStringComparator } from "$utils/general";
  import type { SvelteComponent } from "svelte";
import DefaultPreview from "./DefaultPreview.svelte";

  const lazyComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.svelte');
  const lazyPreviewComponents: GlobComponentImport = import.meta.glob('$nodes/*/[^.]+.preview.svelte');

  export let name: string;
  export let context: NodeContext;

  let notFound = false;
  let component: typeof SvelteComponent;
  let previewComponent: typeof SvelteComponent;

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
  $: showPreview = !primary && nodeMetadata.preview; 

  $: {
    if(!showPreview) {
      const path = `../../nodes/${name}/${name}.svelte`;
      let componentPromise = lazyComponents[path];
      let notFound = !componentPromise;

      if(!notFound) {
        componentPromise().then(module => {
          component = module.default;
        })
      }
    } else {
      const previewPath = `../../nodes/${name}/${name}.preview.svelte`;
      let previewPromise = lazyPreviewComponents[previewPath];
      console.log(previewPromise);
      if(!previewPromise) {
        previewComponent = DefaultPreview;
      } else {
        previewPromise().then(module => {
          previewComponent = module.default;
        })
      }
    }
  }
</script>

<!-- TODO: clean up and show loading when loading -->

{#if notFound}
  <div>
    Component { name } not found
  </div>
{:else if showPreview}
  {#key previewComponent}
    <svelte:component 
      this={previewComponent} 
      name={name}
      nodeMetadata={nodeMetadata}
    />
  {/key}
{:else}
  {#key component}
    <svelte:component 
      this={component} 
    /> 
  {/key}
{/if}

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->