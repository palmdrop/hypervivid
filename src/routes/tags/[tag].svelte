<script context="module" lang="ts">
	import metadata from '../../nodes/metadata.json';
  export async function load ({ params }) {
    const { tag } = params;

    const imports = import.meta.glob('../../nodes/*/*.svelte');

    const tags: string[] = metadata.tags ?? [];
    if(!tags.includes(tag)) return {
      status: 302,
      redirect: '/'
    };

    const nodeNames = Object.entries(metadata.nodes)
      .filter(([, nodeMetadata]) => {
        return nodeMetadata.tags.includes(tag);
      })
      .map(([name]) => name);

    // TODO figure out how not to hard code path
    const nodes = (await Promise.all(
      nodeNames.map(name => imports[`../../nodes/${name}/${name}.svelte`]())
    )).map(node => node.default);

    return {
      props: {
        tag,
        nodes
      }
    }
  }
</script>

<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { useTitle } from '$utils/useTitle';

  export let tag: string;
  export let nodes: SvelteComponent[];

  $: useTitle(`Tag ~ ${tag}`);
</script>

<h1>
  { tag }
</h1>

{#each nodes as Component }
  <svelte:component this={Component} />
{/each}