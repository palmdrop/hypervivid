<script lang="ts">
  export let tags: string[];
  export let orientation: 'vertical' | 'horizontal'
</script>

<ul class={orientation}>
  {#each tags as tag }
    <li>
      <a 
        href={`/tags/${tag}`}
      >
        { tag }
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    padding: 0.5em 0;
  }

  .vertical {
    flex-direction: column;
  }

  .horizontal {
    flex-direction: row;
  }

  li {
    padding-right: 0.5em;
  }
</style>