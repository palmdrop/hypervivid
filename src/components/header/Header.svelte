<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { NavEntry } from '$types/general';
	import Navbar from '$components/navigation/Navbar.svelte';
  import Breadcrumbs from './Breadcrumbs.svelte';
  import { NODE_NAMES } from '$constants';
  import { loading } from '$stores/loading';

  export let sticky = true;

  const navEntries: NavEntry[] = [
    {
      text: NODE_NAMES,
      path: '/nodes'
    },
    {
      text: 'tags',
      path: '/tags'
    },
    {
      text: 'about',
      path: '/nodes/about'
    },
    {
      text: 'links',
      path: '/nodes/links'
    },
  ];

  let showLoader = false;

  $: {
    let timeout: NodeJS.Timeout | undefined;
    if($loading && !showLoader) {

      timeout = setTimeout(() => {
        showLoader = true;
      }, 300); // only show loader if loading takes more than 300ms
    } else if(!$loading) {
      showLoader = false;
      if(timeout) clearTimeout(timeout);
      timeout = undefined
    }
  } 
</script>

<header class:sticky >
  <div>
    <Breadcrumbs 
      showHome={true}
    />
      {#if showLoader}
        <p
          transition:fade|local
        >
          Page loading...
        </p>
      {/if}
  </div>
  <Navbar
    entries={navEntries}
  />
</header>

<style>
  header {
    border-bottom: var(--borderPrimary);

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: stretch;

    background-color: var(--cBg);

    top: 0;
    z-index: 10;
  }

  header.sticky {
    position: sticky;
  }

  header > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: -1px;
  }

  p {
    padding-left: 0.5em;
  }
</style>