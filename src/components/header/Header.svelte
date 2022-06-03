<script lang="ts">
	import type { NavEntry } from '$types/general';
	import Navbar from '$components/navigation/Navbar.svelte';
  import Breadcrumbs from './Breadcrumbs.svelte';
  import { NODE_NAMES } from '$constants';

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
</script>

<header>
  <Breadcrumbs 
    showHome={true}
  />
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
</style>