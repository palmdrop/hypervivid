<script lang="ts">
  import type { NodeName } from "$types/nodes";

  import { getNodeContext } from "$utils/useNodeContext";
  export let name: NodeName;
  export let fullsizeImage = false;

  const { metadata } = getNodeContext(name);
</script>

<div class="wrapper">
  <div class="post">
    {#if metadata.image }
      <img 
        src={metadata.image} 
        alt={""}
        class:fullsize={fullsizeImage}
      />
    {/if}
    <h1>{ metadata.title }</h1>
    <slot />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .post {
    width: clamp(300px, 100%, 1000px);
    padding: 1em;
  }

  img {
    width: 100%;
    height: 45vh;
    max-height: 400px;

    object-fit: cover;

    border-radius: var(--borderRadius1);
  }

  img.fullsize {
    max-height: unset;
    height: unset;
  }
</style>

