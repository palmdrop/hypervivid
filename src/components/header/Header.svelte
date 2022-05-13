<script lang="ts">
	import type { NavEntry } from '$types/general';
	import Navbar from '$components/navigation/Navbar.svelte';
  import Breadcrumbs from './Breadcrumbs.svelte';
  import Sphere from '$components/ornaments/Sphere.svelte';

  const navEntries: NavEntry[] = [
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

<header>
  <a
    href="/"
  >
    <Sphere 
      size={30}
    />
  </a>
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

    width: 100vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--cBg);

    padding: 0.1em 0em;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
</style>