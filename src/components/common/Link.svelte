<script lang="ts">
  export let href: string;
  export let newTab = false;
  export let decorated = true;
  export let bold = false;
</script>

<a 
  {href}
  target={newTab ? '_blank' : undefined}  
  rel={newTab ? 'noopener noreferrer' : undefined}
  class:decorated
  class:bold
>
  <slot />
</a>

<style>
  .decorated {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  .decorated:hover {
    text-decoration-thickness: 2px;
  }

  .bold {
    font-family: var(--fBold);
  }
</style>