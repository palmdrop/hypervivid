<script lang="ts">
	import type { NavEntry } from '$types/general';
	import Navbar from '$components/navigation/Navbar.svelte';

  export let navEntries: NavEntry[];
</script>

<header>
  <Navbar
    entries={navEntries}
  />
</header>

<style>
  header {
    padding: 1em 0em;
    margin-bottom: 1em;
    border-bottom: 1px solid black;

    width: 100vw;
  }
</style>