<script lang="ts">
  export let items: any[] = [];
  export let randomXOffset = 0.2;
  export let randomYOffset = 0.0;

  const randomOffset = (amount: number) => Math.floor(50 * (Math.random() * amount * 2 - amount));
  $: offsets = items.map(() => (
    { 
      x: `calc(${randomOffset(randomXOffset)}vw)`,
      y: `calc(${randomOffset(randomYOffset)}vh)`
    }
  ))
</script>

<ul>
  {#each items as item, index ({ item, index }) }
    <li>
      <div 
        class="item-container"
        style="
          position: relative;
          left: {offsets[index].x};
          top: {offsets[index].y};
        "
      >
        <slot {item} {index} />
      </div>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ( max-width: 500px )  {
    li > div {
      left: 0;
    }
  }

</style>
