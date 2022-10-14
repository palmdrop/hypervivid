<script context="module" lang="ts">
  export const prerender = false;

  export async function load({ params, url }) {
    let searchPhrase = url.searchParams.get('search') ?? "";
    let tags = (
      url.searchParams.has('tags') 
      ? url.searchParams.get('tags')!.split(',')
      : []
    ) as Tag[];

    return {
      props: {
        searchPhrase,
        tags
      }
    }
  }
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import type { Tag } from '$types/nodes';
  import NodeList from "$components/list/NodeList.svelte";
  import { useTitle } from "$utils/useTitle";

  import { NODE_NAMES, SITE_NAME } from '$constants';
  import Paragraph from '$components/common/Paragraph.svelte';
  import Link from '$components/common/Link.svelte';
  import Header from '$components/header/Header.svelte';
  import SearchBar from '../../components/filter/SearchBar.svelte';
  import { standardFilterSearchNodes } from '../../utils/filterSearch';
  import metadata from '../../nodes/metadata';
  import TagFilter from '../../components/filter/TagFilter.svelte';
  import PageFooter from '../../components/footer/page/PageFooter.svelte';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  useTitle(`${NODE_NAMES} ~ ${SITE_NAME}`);

  let mounted = false;

  let mainRef: HTMLElement;
  const useMainRef = (ref: HTMLElement) => {
    mainRef = ref;
  }

  export let searchPhrase = "";
  export let tags: Tag[] = [];

  const onSearchChange = (searchPhrase: string) => {
    const newUrl = new URL($page.url);
    !!searchPhrase?.length 
      ? newUrl.searchParams.set('search', searchPhrase)
      : newUrl.searchParams.delete('search');

    goto(newUrl.toString());
  }

  const onTagChange = (tags: Tag[]) => {
    const newUrl = new URL($page.url);
    !!tags.length
      ? newUrl.searchParams.set('tags', tags.join(','))
      : newUrl.searchParams.delete('tags');

    goto(newUrl.toString());
  }

  $: matchedNodes = standardFilterSearchNodes(
    metadata.nodes,
    tags.length === 0 ? undefined : {
      matchOn: tags, 
      matchMode: 'all'
    },
    undefined,
    searchPhrase === "" ? undefined : {
      matchOn: [searchPhrase],
      matchMode: 'any'
    },
    searchPhrase === "" ? undefined : {
      matchOn: [searchPhrase],
      matchMode: 'any'
    },
    'all'
  );

  onMount(() => {
    mounted = true;
  })
</script>

<Header />
<main
  use:useMainRef
>
  <h1>
    { NODE_NAMES }
  </h1>

  <div class="description-container">
    <Paragraph big>
      Nodes are entries on the page. A node can be anything. Words, art, interactive 3D scenes. Nodes are connected.
    </Paragraph>
    <SearchBar 
      bind:searchPhrase={searchPhrase}
      onChange={onSearchChange}
    />
    <TagFilter 
      bind:tags
      onChange={onTagChange}
    />
    <Paragraph big style="margin-top: 0.5em">
      <Link
        href='/random'
      >
        Open a random node.
      </Link>
    </Paragraph>
  </div>

  {#key matchedNodes}
    <NodeList
      nodeNames={matchedNodes}
      modeFirst="preview"
      modeRest="preview"
      batchCount={10}
      emptyText="No nodes found..."
    />
  {/key}
</main>
<PageFooter />

<style>
  main {
    padding-top: 1em;
    width: 100%;
    height: 100%;
    min-height: 110vh;

    overflow-y: hidden;
  }

  .description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-bottom: 1.2em;
  }

  h1 {
    text-transform: uppercase;
  }
</style>