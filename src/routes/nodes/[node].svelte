<script context="module" lang="ts">
  import allMetadata from '$nodes/metadata';

  export async function load ({ params }) {
    const { 
      node: name,
    }: {
      node: string,
    } = params;

    if(Object.keys(allMetadata.nodes).includes(name)) {
      return {
        props: {
          name,
          metadata: allMetadata.nodes[name]
        }
      }
    } else {
      return {
        status: 302,
        redirect: '/'
      }
    }
  }
</script>

<script lang="ts">
  import Node from "$components/node/Node.svelte";
  import DefaultWrapper from "$components/node/wrappers/DefaultWrapper.svelte";
  import { useTitle } from "$utils/useTitle";
  import type { NodeMetadata, NodeName } from '$types/nodes';
  import { SITE_NAME } from '$constants';
  import DocumentWrapper from '$components/node/wrappers/DocumentWrapper.svelte';

  export let name: NodeName;
  export let metadata: NodeMetadata;

  $: useTitle(`${metadata.title || name} ~ ${SITE_NAME}`);
</script>

{#if metadata.asDocument}
  <DocumentWrapper
    { name }
  >
    <Node
      { name }
      mode="only"
    />
  </DocumentWrapper>
{:else}
  <DefaultWrapper 
    { name }
  >
    <Node
      { name }
      mode="only"
    />
  </DefaultWrapper>
{/if}

<style>
</style>
