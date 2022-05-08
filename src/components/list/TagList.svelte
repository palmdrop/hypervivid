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

    max-width: 600px;
    flex-wrap: wrap;
  }

  .vertical {
    flex-direction: column;
  }

  .horizontal {
    flex-direction: row;
  }

  li {
    line-height: 2.3em;
  }

  a {
    box-sizing: border-box;

    text-decoration: none;

    color: var(--cFgInverted);
    background-color: var(--cBgInverted);

    padding: 0.1em 0.7em;
    margin: 0.1em;
    border-radius: var(--borderRadius1);
    border: var(--borderPrimary);
  }

  a:hover {
    color: var(--cFg);
    background-color: var(--cBg);
  }
</style>