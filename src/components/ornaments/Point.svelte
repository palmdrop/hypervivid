<script>
  export let size = 12;
  export let margin = 0;

  $: shadowSize = Math.round(0.15 * size);
</script>

<div 
  class="point" 
  style="
    width: {size}px;
    height: {size}px;
    box-shadow: inset 0px {shadowSize}px {shadowSize}px rgba(255.0, 255.0, 255.0, 0.55);
  " 
/>

<style>
  div {
    border-radius: 100%;
    background-color: var(--cFg);
  }
</style>

