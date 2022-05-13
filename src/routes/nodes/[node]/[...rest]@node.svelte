<script context="module" lang="ts">
  import metadata from '$nodes/metadata';

  export async function load ({ params }) {
    const { 
      node: name,
      rest
    }: {
      node: string,
      rest: string
    } = params;

    const restParams = rest.split('/');

    if(Object.keys(metadata.nodes).includes(name)) {
      return {
        props: {
          name,
          params: restParams
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
  import DataWrapper from "$components/node/wrappers/DataWrapper.svelte";
  import { useTitle } from "$utils/useTitle";
  import type { NodeName } from '$types/nodes';
  import Header from "$components/header/Header.svelte";
import FullscreenWrapper from "$components/node/wrappers/FullscreenWrapper.svelte";

  export let name: NodeName;
  export let params: string[];

  $: fullscreen = params.includes('fullscreen');

  $: useTitle(`Node ~ ${name}`);
</script>

{#if fullscreen}
  <FullscreenWrapper>
    <Node
      { name }
      mode="only"
    />
  </FullscreenWrapper>
{:else}
  <Header />
  <DataWrapper
    { name }
  >
    <Node
      { name }
      mode="only"
    />
  </DataWrapper>
{/if}

<style>
</style>
