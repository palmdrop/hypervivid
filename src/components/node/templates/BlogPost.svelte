<script lang="ts">
  import type { NodeName } from "$types/nodes";

  import { getNodeContext } from "$utils/useNodeContext";
  export let name: NodeName;

  const { metadata } = getNodeContext(name);
</script>

<div class="wrapper">
  <div class="post">
    {#if metadata.image }
      <img 
        src={metadata.image} 
        alt={""}
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
    max-width: 1000px;
  }

  img {
    width: 100%;
    height: 45vh;
    max-height: 400px;

    object-fit: cover;

    border-radius: var(--borderRadius1);
  }
</style>

