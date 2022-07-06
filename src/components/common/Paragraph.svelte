<script lang="ts">
  export let center = false;
  export let wide = false;
  export let big = false;
  export let faded = false;
  export let bold = false;
  export let tooltip: undefined | string = undefined 
  export let style: string | undefined = undefined;
</script>

<p 
  class:center 
  class:wide 
  class:big 
  class:faded
  class:bold
  title={tooltip}
  style={style}
>
  <slot />
</p>

<style>
  p {
    /*color: var(--cFg);*/
    max-width: 44ch;

    line-height: 1.25em;

    font-size: 1rem;
  }

  p:not(:last-child) {
    padding-bottom: 1.0em;
  }

  .center {
    text-align: center;
  }

  .wide {
    max-width: unset;
  }

  .big {
    font-size: var(--fontSizeLarge);
  }

  .faded {
    opacity: 0.3;
  }

  .bold {
    font-family: var(--fBold);
  }
</style>
