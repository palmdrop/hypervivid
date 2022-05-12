<script lang="ts">
  import { onMount } from "svelte";
  import { getNodeContext } from '$utils/useNodeContext';

  let date = new Date();
  $: time = date.toISOString().split('T')[1].slice(0, -1);

  const { name, metadata } = getNodeContext('N3');

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