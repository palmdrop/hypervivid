<script lang="ts">
  type Direction = 'vertical' | 'horizontal';
  export let direction: Direction = 'vertical';
  export let alternativeDirection: Direction | undefined = undefined;
  export let breakpoint = 700;

  let width = 0;

  $: activeDirection = (width < breakpoint || !alternativeDirection) ? direction : alternativeDirection;
</script>

<svelte:window bind:innerWidth={width} />

<div class={`container container-${activeDirection}`}>
  {#each { length: 5 } as _, i (i) }
    <div class={'moon ' + activeDirection} />
  {/each}
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .container-vertical {
    flex-direction: column;
  }

  .container-horizontal {
    flex-direction: row;
  }

  .moon {
    background-color: var(--cBg);
    width: 5em;
    height: 5em;

    border-radius: 100%;
  }

  .vertical {
    box-shadow: inset 0px -20px 10px var(--cFgFaded);
    margin-bottom: -2em;
  }

  .horizontal {
    box-shadow: inset -20px 0px 10px var(--cFgFaded);
    margin-left: -2em;
  }
</style>
