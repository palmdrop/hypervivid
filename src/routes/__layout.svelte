<script lang="ts">
	import type { NavEntry } from '$types/general';
	import Header from '$components/header/Header.svelte';
  import RootPage from '$components/page/RootPage.svelte';

</script>

<RootPage>
  <Header />
  <slot />
</RootPage>