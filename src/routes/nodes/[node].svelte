<script context="module" lang="ts">
  import metadata from '$nodes/metadata';

  export async function load ({ params }) {
    const { node: name } = params;

    if(Object.keys(metadata.nodes).includes(name)) {
      return {
        props: {
          name,
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
  import NodeWrapper from "$components/node/DataWrapper.svelte";
  import { useTitle } from "$utils/useTitle";
  import type { NodeName } from '$types/nodes';

  export let name: NodeName;

  $: useTitle(`Node ~ ${name}`);
</script>

<NodeWrapper
  name={name}
>
  <Node
    name={name}
    mode="single"
  />
</NodeWrapper>

<style>
</style>
