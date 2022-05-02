<script context="module" lang="ts">
	import metadata from '$nodes/metadata.json';
  export async function load ({ params }) {
    const { tag } = params;

    const tags = metadata.tags ?? {};
    if(!tags[tag]) return {
      status: 302,
      redirect: '/'
    };

    const nodeNames = Object.entries(metadata.nodes)
      .filter(([, nodeMetadata]) => {
        return nodeMetadata.tags.includes(tag);
      })
      .map(([name]) => name);

    return {
      props: {
        tag,
        nodeNames
      }
    }
  }
</script>

<script lang="ts">
  import { useTitle } from '$utils/useTitle';
  import Node from '$components/node/Node.svelte';

  export let tag: string;
  export let nodeNames: string[];

  $: useTitle(`Tag ~ ${tag}`);
</script>

<h1>
  { tag }
</h1>

{#each nodeNames as name (name) }
  <Node 
    name={name}
    context={nodeNames.length === 1 ? "single" : "multiple"}
  />
{/each}