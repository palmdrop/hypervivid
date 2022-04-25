<script lang="ts">
  const components = 
    Object.values(import.meta.globEager('./../nodes/*.svelte'))
          .map(component => component.default);

</script>

{#each components as component }
  <svelte:component this={component} /> 
{/each}
