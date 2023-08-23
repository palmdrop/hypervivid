<script lang="ts">
  export let src: string;
  export let width: string = "";
  export let height: string = "";
  export let title: string;
  export let style: string = "";
</script>

<iframe
  { src }
  { width }
  { height }
  { title }
  { style }
  referrerpolicy="no-referrer"
/>

<style>
  iframe {
    border: 20px solid var(--cFg);
    border-radius: 50px;

    box-shadow: 0px 0px 20px var(--cFg);
  }
</style>
