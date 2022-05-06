<script lang="ts">
	import type { NodeMetadata } from '$types/nodes';
  import { onMount } from "svelte";

  export let name: string;
  export let nodeMetadata: NodeMetadata;

  let date = new Date();
  $: time = date.toISOString().split('T')[1].slice(0, -1);

  onMount(() => {
    const interval = setInterval(() => {
      date = new Date();
    }, 1);

    return () => {
      clearInterval(interval);
    }
  })

</script>

<div>{time}</div>

<style>
</style>