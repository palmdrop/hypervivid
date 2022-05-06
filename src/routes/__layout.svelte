<script lang="ts">
  import Navbar from '$components/navigation/Navbar.svelte';
import { title$ } from '$stores/head';

  import '../global.css';
  import metadata from "../nodes/metadata.json";
  import { metadata$ } from "../stores/metadata";

  metadata$.set(metadata);

  const navEntries = [
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

<header>
  <Navbar
    entries={navEntries}
  />
</header>

<slot />

<style global>
  header {
    padding: 1em 0em;
    margin-bottom: 1em;
    border-bottom: 1px solid black;

    width: 100vw;
  }

  html {
    font-size: 16px;
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