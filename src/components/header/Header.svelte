<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { NavEntry } from '$types/general';
	import Navbar from '$components/navigation/Navbar.svelte';
  import Breadcrumbs from './Breadcrumbs.svelte';
  import { NODE_NAMES } from '$constants';
import { loading } from '$stores/loading';

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
      text: 'manifesto',
      path: '/nodes/manifesto'
    },
    {
      text: 'about',
      path: '/nodes/about'
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

<header>
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
    align-items: center;

    background-color: var(--cBg);
  }

  header > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  p {
    padding-left: 0.5em;
  }
</style>