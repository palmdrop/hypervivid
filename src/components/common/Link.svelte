<script lang="ts">
  export let href: string | undefined = undefined;
  export let onClick: ((event: Event) => void) | undefined = undefined;
  export let newTab = false;
  export let underline = true;
  export let bold = false;
  export let decorated = false;
  export let big = false;
  export let omitBorder: 'left' | 'right' | 'top' | 'bottom' | undefined = undefined;
</script>

<svelte:element this={onClick ? 'button' : 'a'}
  {href}
  on:click={onClick}
  target={newTab ? '_blank' : undefined}  
  rel={newTab ? 'noopener noreferrer' : undefined}
  class:underline
  class:bold
  class:decorated
  class:big
  class={'link ' + (omitBorder ? 'omit-' + omitBorder : '')}
>
  <slot />
</svelte:element>

<style>
  .link {
    text-decoration: none;
  }

  .link:hover {
    text-decoration: none;
  }

  .underline {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  .underline:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  .bold {
    font-family: var(--fBold);
  }

  .decorated {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: var(--borderPrimary);
    border-bottom: unset;
    height: 100%;
    width: 100%;
  }

  .omit-left {
    border-left: unset;
  }

  .omit-right {
    border-right: unset;
  }

  .omit-top {
    border-top: unset;
  }

  .omit-bottom {
    border-bottom: unset;
  }
  
  .decorated:hover {
    color: var(--cFgInverted);
  }

  .decorated:hover::before {
    background-color: var(--cBgInverted);
    box-shadow: var(--pillShadow);
  }

  .decorated::before {
    position: absolute;
    content: '';

    inset: 0;

    border-radius: var(--borderRadius1);
    outline: var(--borderPrimary);

    z-index: -1;

    transition: 0.3s;
  }

  .big {
    font-size: clamp(1rem, 3vw, 30px);
  }

</style>