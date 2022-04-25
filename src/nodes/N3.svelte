<script context="module">
  export const metadata = {
    tags: ['1ab', '1bd', '1c3']
  };
  // your script goes here
</script>

<script>
import { onMount } from "svelte";


  // your script goes here

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
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->