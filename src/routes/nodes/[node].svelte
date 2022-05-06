<script context="module" lang="ts">
  import metadata from '$nodes/metadata.json';

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

  export let name: string;

  $: useTitle(`Node ~ ${name}`);
</script>

<NodeWrapper
  name={name}
>
  <Node
    name={name}
    context="single"
  />
</NodeWrapper>

<style>
</style>
