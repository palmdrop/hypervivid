<script lang="ts">
  export let mode: 'open' | 'close';
  export let transitionDuration: number = 400;
  export let size: string = '25px';
</script>

<div
  class={mode}
  style="
    width: {size};
    height: {size};
    transition: {transitionDuration / 1000}s;
  "
/>

<style>
  div {
    background-color: var(--cBg);
    letter-spacing: 0;
    border: var(--borderPrimary);

    border-radius: 2px;
  }

  .open {
    transform: rotateZ(0);
  }

  .close {
    transform: rotateZ(135deg);
  }
</style>