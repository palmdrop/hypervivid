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

    const nodeNames = filterSearchNodes(
      nodesMetadata.nodes,
      [{
        settings: {
          matchOn: [tag],
        },
        lookup: (node) => node.tags as unknown as Tag[]
      }],
      'any'
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
  import { filterSearchNodes } from '../../utils/filterSearch';
    import PageFooter from '../../components/footer/page/PageFooter.svelte';

  export let tag: Tag;
  export let nodeNames: NodeName[];

  let mainRef: HTMLElement;
  const useMainRef = (ref: HTMLElement) => {
    mainRef = ref;
  }

  $: useTitle(`${tag} ~ ${SITE_NAME}`);

  $: description = tag in tagsMetadata 
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

  <section class="description-container">
    <div>
      {#each description as line }
        <Paragraph wide>
          { line }
        </Paragraph>
      {/each}
    </div>
  </section>

  <NodeList
    nodeNames={nodeNames}
    modeFirst="preview"
    modeRest="preview"
    batchCount={10}
  />
</main>
<PageFooter />

<style>
  main {
    padding-top: 1em;
    width: 100%;

    min-height: 73vh;
    overflow: hidden;
  }

  .description-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    padding: 0.5em;

    margin: auto;
  }
</style>