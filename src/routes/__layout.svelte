<script lang="ts">
  import { title$ } from '$stores/head';

  import '../global.css';
  import metadata from "../nodes/metadata.json";
  import { metadata$ } from "../stores/metadata";

  metadata$.set(metadata);
</script>

<svelte:head>
  <title>
    { $title$ }
  </title>
</svelte:head>

<header>
  <nav>
    <a
      href="/"
    >
      index
    </a>
    <a
      href="/nodes"
    >
      nodes
    </a>
    <a
      href="/tags"
    >
      tags
    </a>
  </nav>
</header>

<slot />

<style global>
  header {
    padding: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid black;
  }

  header nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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