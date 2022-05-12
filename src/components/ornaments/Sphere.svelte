<script>
  export let size = 100;
  export let margin = 0;

  $: shadowSize = Math.round(0.15 * size);
</script>

<div 
  class="sphere" 
  style="
    width: {size}px;
    height: {size}px;
    box-shadow: inset 0px {shadowSize}px {shadowSize}px rgba(0, 0, 0, 0.25);
  " 
/>

<style>
  div {
    border-radius: 100%;
    margin: 0.5em;
  }
</style>

