<script lang="ts">
  export let href: string;
  export let newTab = false;
  export let underline = true;
  export let bold = false;
  export let decorated = false;
  export let big = false;
</script>

<a 
  {href}
  target={newTab ? '_blank' : undefined}  
  rel={newTab ? 'noopener noreferrer' : undefined}
  class:underline
  class:bold
  class:decorated
  class:big
>
  <slot />
</a>

<style>
  a {
    text-decoration: none;
  }

  a:hover {
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
    height: 100%;
    width: 100%;
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

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border-radius: var(--borderRadius1);
    border: var(--borderPrimary);

    margin: -1px;
    z-index: -1;

    transition: 0.3s;
  }

  .big {
    font-size: clamp(1rem, 3vw, 30px);
  }

</style>