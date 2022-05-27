<script lang="ts">
  export let items: any[] = [];
</script>

<ul>
  {#each items as item, index (item) }
    <li>
      <slot {item} {index} />
    </li>
  {/each}
</ul>

<style>
  li {
    list-style-type: georgian;
    list-style-position: inside;

    padding-bottom: 1em;

    font-size: clamp(1rem, 3vw, 30px);
  }
</style>
