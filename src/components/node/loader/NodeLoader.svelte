<script lang="ts">
  import type { NodeMode } from '$types/nodes';
  import StarLoader from '$components/ornaments/loaders/StarLoader.svelte';

  export let mode: NodeMode;
</script>

<div 
  class={`loader ${mode}`}
>
  <StarLoader 
    size={'8em'}
    fadeIn
  />
</div>

<style>
  .loader {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 1px;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--cBg);
  }
</style>