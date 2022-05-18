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
      text: 'manifest',
      path: '/nodes/manifest'
    },
    {
      text: 'about',
      path: '/nodes/about'
    },
  ];
</script>

<header>
  <!--
  <a
    href="/"
  >
    <Sphere 
      size={30}
    />
  </a>
  -->
  <div>
    <Breadcrumbs 
      showHome={true}
    />
    <Navbar
      entries={navEntries}
    />
  </div>
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

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
</style>