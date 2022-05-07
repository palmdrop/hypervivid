<script lang="ts">
	import Header from '$components/header/Header.svelte';
	import type { NavEntry } from '$types/general.ts';
  import { title$ } from '$stores/head';
  import { metadata$ } from "$stores/metadata";
  import metadata from "$nodes/metadata.json";

  import Navbar from '$components/navigation/Navbar.svelte';

  import '../global.css';
  import '../fonts.css';

  metadata$.set(metadata);

  const navEntries: NavEntry[] = [
    {
      text: 'index',
      path: '/'
    },
    {
      text: 'nodes',
      path: '/nodes'
    },
    {
      text: 'tags',
      path: '/tags'
    },
    {
      text: 'info',
      path: '/nodes/info'
    }
  ];
</script>

<svelte:head>
  <title>
    { $title$ }
  </title>
</svelte:head>

<Header
  navEntries={navEntries}
/>
<slot />

<style global>
  html {
    font-size: 16px;
    font-family: 'Sporting_Grotesque-Regular'
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.5rem;
  }
</style>