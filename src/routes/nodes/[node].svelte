<script context="module" lang="ts">
  const imports = import.meta.glob('../../nodes/*/[^.]+.svelte');
  export async function load ({ params }) {
    const { node: name } = params;

    // TODO: figure out how not to hard code path?
    const path = `../../nodes/${name}/${name}.svelte`;

    if(path in imports) {
      const node = (await imports[path]()).default;
      return {
        props: {
          name,
          node
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
import NodeWrapper from "$components/node/Wrapper.svelte";
  import { useTitle } from "$utils/useTitle";

  import type { SvelteComponent } from "svelte";
  export let name: string;
  // export let node: SvelteComponent;

  $: useTitle(`Node ~ ${name}`);
</script>

<NodeWrapper
  name={name}
  context="single"
>
  <Node
    name={name}
    context="single"
  />
</NodeWrapper>

<style>
</style>
