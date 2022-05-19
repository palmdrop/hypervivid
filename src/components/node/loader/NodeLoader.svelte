<script lang="ts">
  import { fade } from 'svelte/transition';
	import Paragraph from '$components/text/Paragraph.svelte';
  import type { NodeMode } from '$types/nodes';

  export let mode: NodeMode;
  export let name: string;
  export let transitionDuration: number = 200;
</script>

<div 
  class={`loader ${mode}`}
  transition:fade|local={{
    duration: transitionDuration
  }}
>
  {#if mode === 'only'}
    <div class="only-container">
      <Paragraph wide center faded>
        Loading { name }...
      </Paragraph>
    </div>
  {:else}
    <Paragraph wide center faded>
      Loading...
    </Paragraph>
  {/if}
</div>

<style>
  .loader {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .only-container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--cBg);
  }

  .only, * {
    transform: scale(1.5);
  }
</style>