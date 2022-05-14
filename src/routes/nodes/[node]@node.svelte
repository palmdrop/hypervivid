<script context="module" lang="ts">
  import metadata from '$nodes/metadata';

  export async function load ({ params }) {
    const { 
      node: name,
    }: {
      node: string,
    } = params;

    // const restParams = rest.split('/');

    if(Object.keys(metadata.nodes).includes(name)) {
      return {
        props: {
          name,
          // params: restParams
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
  import NodeWrapper from "$components/node/wrappers/NodeWrapper.svelte";
  import { useTitle } from "$utils/useTitle";
  import type { NodeName } from '$types/nodes';

  export let name: NodeName;
  // export let params: string[];

  // $: fullscreen = params.includes('fullscreen');

  $: useTitle(`Node ~ ${name}`);
</script>

<NodeWrapper
  { name }
>
  <Node
    { name }
    mode="only"
  />
</NodeWrapper>

<style>
</style>
