<script lang="ts">
  export let wide = false;
  export let big = false;
</script>

<p 
  class:wide
  class:big
>
  <slot />
</p>

<style>
  p {
    color: var(--cFg);
    max-width: 40ch;
    text-align: left;

    line-height: 1.5em;

    font-size: 1.1rem;
  }

  p:not(:last-child) {
    padding-bottom: 0.5em;
  }

  .wide {
    max-width: unset;
  }

  .big {
    font-size: clamp(1rem, 3vw, 100vw);
    padding-left: 1em;
  }
</style>