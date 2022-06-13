<script>
  import Link from "./Link.svelte";
</script>

<Link
  {...$$props}
  newTab
>
  <slot />
</Link>
