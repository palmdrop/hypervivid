<script lang="ts">
  import { page } from '$app/stores';

  $: backUrl = $page.url.pathname.slice(0, $page.url.pathname.lastIndexOf('/'));
</script>

<main>
  <a
    class="back-button"
    href={backUrl}
  >
    X
  </a>
  <slot />
</main>

<style>
  main {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .back-button {
    position: absolute;
    top: 4px;
    right: 4px;

    font-size: 2rem;

    text-decoration: none;
  }
</style>