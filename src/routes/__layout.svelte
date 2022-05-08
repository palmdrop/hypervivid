<script lang="ts">
	import type { NavEntry } from '$types/general';
	import Header from '$components/header/Header.svelte';
  import { title$ } from '$stores/head';
  import { metadata$ } from "$stores/metadata";
  import metadata from "$nodes/metadata.json";

  import '../global.css';
  import '../fonts.css';
  import '../theme.css';

  metadata$.set(metadata);

  const navEntries: NavEntry[] = [
    /*
    {
      text: 'index',
      path: '/'
    },
    */
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