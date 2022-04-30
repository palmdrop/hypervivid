<script context="module" lang="ts">
  export async function load ({ params }) {
    const { node: name } = params;

    // TODO: figure out how not to hard code path?
    const imports = import.meta.glob('../../nodes/*/*.svelte');
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
  import NodeWrapper from "$components/node/Wrapper.svelte";

  import type { SvelteComponent } from "svelte";
  export let name: string;
  export let node: SvelteComponent;
</script>

<NodeWrapper
  name={name}
  context="single"
>
  <svelte:component this={node} />
</NodeWrapper>

<style>
</style>
