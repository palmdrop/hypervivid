<script lang="ts">
  import Node from "$components/node/Node.svelte";
  import DefaultWrapper from "$components/node/wrappers/DefaultWrapper.svelte";
  import { useTitle } from "$utils/useTitle";
  import type { NodeMetadata, NodeName } from '$types/nodes';
  import { SITE_NAME } from '$constants';
  import DocumentWrapper from '$components/node/wrappers/DocumentWrapper.svelte';

  export let data: { name: NodeName, metadata: NodeMetadata, fullscreen: boolean };
  $: ({ name, metadata, fullscreen } = data);

  let isDone = false;

  $: useTitle(`${metadata.title || name} ~ ${SITE_NAME}`);
</script>

{#if metadata.asDocument}
  <DocumentWrapper
    { name }
    { isDone }
    { ...metadata.wrapperProps ?? {} }
  >
    <Node
      { name }
      mode="only"
      bind:isDone
    />
  </DocumentWrapper>
{:else}
  <DefaultWrapper 
    { name }
    { fullscreen }
    { ...metadata.wrapperProps ?? {} }
  >
    <Node
      { name }
      mode="only"
      bind:isDone
    />
  </DefaultWrapper>
{/if}

<style>
</style>
