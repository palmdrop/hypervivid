<script context="module" lang="ts">
	import metadata from '$nodes/metadata';
	import type { NodeName, Tag } from '$types/nodes';

  export async function load ({ params }) {
    const { tag }: { tag: Tag } = params;

    const tags = metadata.tags ?? {};
    if(!tags[tag]) return {
      status: 302,
      redirect: '/'
    };

    const nodeNames = Object.entries(metadata.nodes)
      .filter(
        ([, nodeMetadata]) => (nodeMetadata.tags as unknown as Tag[]).includes(tag)
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
  import Paragraph from '$components/common/Paragraph.svelte';
  import { NODE_NAMES, SITE_NAME } from '$constants';
  import Header from '$components/header/Header.svelte';

  export let tag: Tag;
  export let nodeNames: NodeName[];

  $: useTitle(`${tag} ~ ${SITE_NAME}`);
</script>

<Header />
<main>
  <h1>
    { tag }
  </h1>

  <Paragraph wide center>
    All {NODE_NAMES} with tag "{tag}."
  </Paragraph>

  <NodeList
    nodeNames={nodeNames}
    modeFirst="preview"
    modeRest="preview"
  />
</main>

<style>
  main {
    padding-top: 1em;
    width: 100vw;

    overflow-x: hidden;
  }
</style>