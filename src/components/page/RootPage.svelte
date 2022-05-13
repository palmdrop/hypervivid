<script lang="ts">
  import { title$ } from '$stores/head';

  import '../../global.css';
  import '../../fonts.css';
  import '../../theme.css';
</script>

<svelte:head>
  <title>
    { $title$ }
  </title>
</svelte:head>

<slot />