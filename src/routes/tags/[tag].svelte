<script context="module" lang="ts">
	import nodesMetadata from '$nodes/metadata';
	import type { NodeName, Tag } from '$types/nodes';

  export async function load ({ params }) {
    const { tag }: { tag: Tag } = params;

    const tags = nodesMetadata.tags ?? {};
    if(!tags[tag]) return {
      status: 302,
      redirect: '/'
    };

    const nodeNames = Object.entries(nodesMetadata.nodes)
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
	import tagsMetadata from '$tags/metadata';

  export let tag: Tag;
  export let nodeNames: NodeName[];

  let mainRef: HTMLElement;
  const useMainRef = (ref: HTMLElement) => {
    mainRef = ref;
  }

  $: useTitle(`${tag} ~ ${SITE_NAME}`);

  const description = tag in tagsMetadata 
    ? tagsMetadata[tag]
    : [`All ${NODE_NAMES} with tag "${tag}".`];
</script>

<Header />
<main
  use:useMainRef
>
  <h1>
    { tag }
  </h1>

  {#each description as line }
    <Paragraph wide center>
      { line }
    </Paragraph>
  {/each}

  <NodeList
    nodeNames={nodeNames}
    modeFirst="preview"
    modeRest="preview"
    batchCount={10}
    scrollElement={mainRef}
  />
</main>

<style>
  main {
    padding-top: 1em;
    width: 100vw;

    overflow-x: hidden;
  }
</style>