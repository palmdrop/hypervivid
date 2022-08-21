<script lang="ts">
	import type { NodeMode } from '$types/nodes';
  export let mode: NodeMode;
  export let name: string = "";
  export let limited: boolean = [
    'inline', 'preview'
  ].includes(mode);

  // TODO: what about multiple fragments? no appropriate nodeMode?
  export const decorate = [
    'main', 'only'
  ].includes(mode);

  const fadeOut = limited;
</script>

<div class="node">
  <section 
    class:decorate
    class:limited
    class:fadeOut
  >
    { #if name } <span>{name}</span> {/if}
    <div class="content">
      <slot />
    </div>
    {#if !limited}
      <div class="content">
        <slot name="extra" />
      </div>
    {/if}
  </section>
</div>

<style>
  .node {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }

  section {
    position: relative;
    padding-top: 2.0em;
    width: 100%;
    height: auto;
    max-width: 1000px;
  }

  .content {
    height: 100%;
  }

  .decorate {
    padding-left: clamp(0.5em, 7vw, 5em);
    padding-right: clamp(0.5em, 7vw, 5em);
    padding-top: clamp(3.0em, 10vw, 5em);
    padding-bottom: clamp(3.0em, 10vw, 5em);

    margin: 0.5em;
    border-radius: var(--borderRadius2);
    box-shadow: var(--neumorphicShadow);

    border: 2px solid var(--cBgBright);
  }

  .fadeOut::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;

    background: linear-gradient(
      0deg, 
      var(--cBg) 0%, 
      rgba(255,255,255,0) 55%, 
      rgba(255,255,255,0) 100%
    );
  }

  .limited .content {
    max-height: 12em;
    overflow: hidden;
  }

  span {
    position: absolute;
    font-size: var(--fontSizeLarge);
    font-family: var(--fDisplay);

    color: var(--cBg);
    opacity: 0.8;

    text-shadow: 0px 0px 8px var(--cFg);

    top: 0.0em;

    text-transform: uppercase;
  }

  .decorate span {
    right: 5%;
    top: clamp(0.5em, 7vw, 1.5em)
  }
</style>