<script lang="ts">
	import type { NavEntry } from '$types/general';
	import Navbar from '$components/navigation/Navbar.svelte';
  import Breadcrumbs from './Breadcrumbs.svelte';

  export let navEntries: NavEntry[];
</script>

<header>
  <Breadcrumbs />
  <Navbar
    entries={navEntries}
  />
</header>

<style>
  header {
    padding: 1em 0em;
    border-bottom: var(--borderPrimary);

    width: 100vw;

    display: flex;
    justify-content: space-between;

    background-color: var(--cBg);
  }
</style>