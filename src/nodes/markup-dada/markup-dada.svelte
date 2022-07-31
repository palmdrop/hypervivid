
<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import { onMount } from 'svelte';
  // const { name, metadata } = getNodeContext('markup-dada');

  let selected: number[] = [];

  let minRowLength = 5;
  let maxRowLength = 27;
  let virtualRowLength = 10;

  const cellCount = 600;
  const speed = 300;
  const selectedProbability = 0.5;

  let offset = 0;

  onMount(() => {
    const timeout = setInterval(() => {
      offset++;
    }, speed);

    for(let i = 0; i < maxRowLength; i++) {
      if(Math.random() < selectedProbability) selected.push(i);
    }

    const onMouseMove = (event: MouseEvent) => {
      const delta = event.clientY / window.innerHeight;
      virtualRowLength = 
        Math.floor(
          (maxRowLength - minRowLength) * delta + minRowLength
        );
    }

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(timeout);
    }
  });
</script>

<div class="node">
  <div class="container">
    {#each { length: cellCount } as _, i (i)}
      <div 
        class="entry" 
        class:selected={selected.includes((i + offset) % virtualRowLength)}
        class:alternative={i % (virtualRowLength / 4.0) === 0}
        style="
        "
        on:click={
          () => {
            const index = (i + offset) % virtualRowLength;
            if(selected.includes(index)) {
              selected = selected.filter(s => s !== index);
            } else {
              selected = [
                ...selected,
                index
              ];
            }
          }
        }
      >
        <div />
      </div>
    {/each}
  </div>
</div>

<style>
  .node {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }

  .container {
    display: flex;
    flex-wrap: wrap;

    max-width: 700px;
    height: auto;
  }

  .entry {
    width: 20px;
    height: 20px;
    margin: 1px;
    cursor: pointer;

    background-color: var(--cBg);
    border: 1px solid var(--cBgDark);

    box-shadow: 0px 0px 2px var(--cFg);

    transition: 0.3s;
    position: relative
  }

  .entry.selected {
    background-color: var(--cBgInverted);

    box-shadow: 
      0px 0px 1px var(--cFg),
      7px 7px 5px var(--cLoader);
  }

  .entry > div {
    opacity: 0;
  }

  .entry.selected > div {
    opacity: 1;
    position: absolute;
    width: 25px;
    height: 25px;

    border-radius: 100%;

    left: calc(100% - 2px);
    top: calc(100% - 2px);

    z-index: 2;
  }

  .alternative {
    opacity: 0.3;
  }
</style>
