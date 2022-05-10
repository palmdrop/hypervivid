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
      .filter(
        ([, nodeMetadata]) => (nodeMetadata.tags as string[]).includes(tag)
      ).map(
        ([name]) => name
      );

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
  import NodeList from '$components/list/NodeList.svelte';

  export let tag: string;
  export let nodeNames: string[];

  $: useTitle(`Tag ~ ${tag}`);
</script>

<main>
  <h1>
    { tag }
  </h1>

  <NodeList
    nodeNames={nodeNames}
    contextFirst="multiple-secondary"
    contextRest="link"
  />
</main>

<style>
  main {
    padding-top: 1em;
  }
</style>