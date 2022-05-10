<script lang="ts">
	import type { NavEntry } from '$types/general';
	import Header from '$components/header/Header.svelte';
  import { title$ } from '$stores/head';

  import '../global.css';
  import '../fonts.css';
  import '../theme.css';

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
    },
    {
      text: 'manifest',
      path: '/nodes/manifest'
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