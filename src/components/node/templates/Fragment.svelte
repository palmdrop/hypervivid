<script lang="ts">
	import type { NodeMode } from '$types/nodes';
  export let mode: NodeMode;
  export let name: string = "";

  // TODO: what about multiple fragments? no appropriate nodeMode?
  export const decorate = [
    'main', 'only'
  ].includes(mode);
</script>

<div class="node">
  <section class:decorate>
    { #if name } <span>{name}</span> {/if}
    <slot />
  </section>
</div>

<style>
  .node {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section {
    padding: 1em;
    max-width: 900px;
  }

  .decorate {
    padding-left: clamp(0.5em, 7vw, 5em);
    padding-right: clamp(0.5em, 7vw, 5em);
    padding-top: clamp(1.5em, 10vw, 5em);
    padding-bottom: clamp(1.5em, 10vw, 5em);

    margin: 0.5em;
    border-radius: 2em;
    box-shadow: var(--neumorphicShadow);
  }

  span {

  }
</style>