<script lang="ts">
  export let center = false;
  export let wide = false;
  export let big = false;
  export let faded = false;
</script>

<p class:center class:wide class:big class:faded>
  <slot />
</p>

<style>
  p {
    color: var(--cFg);
    max-width: 44ch;
    text-align: left;

    line-height: 1.5em;

    font-size: 1rem;
  }

  p:not(:last-child) {
    padding-bottom: 0.5em;
  }

  .center {
    text-align: center;
  }

  .wide {
    max-width: unset;
  }

  .big {
    font-size: clamp(1rem, 3vw, 30px);
  }

  .faded {
    opacity: 0.3;
  }
</style>
