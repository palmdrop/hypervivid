<script lang="ts">
  import { title$ } from '$stores/head';

  import '../global.css';
  import '../fonts.css';
  import '../theme.css';
  import { loading } from '$stores/loading';
  import { navigating } from '$app/stores';

  $: $loading = !!$navigating;
</script>

<svelte:head>
  <title>
    { $title$ }
  </title>
</svelte:head>

<slot />