<script lang="ts">
  import { metadata$ } from "$stores/metadata";

  export let tags: string[];
  export let orientation: 'vertical' | 'horizontal'
  export let showCount = false;

  $: weightedTags = tags
    .map(tag => ({
      tag,
      weight: Math.pow($metadata$.tags[tag].weight, 0.5),
      count: $metadata$.tags[tag].count
    }))
    .sort((t1, t2) => (t2.weight - t1.weight));
</script>

{#if tags.length}
  <ul class={orientation}>
    {#each weightedTags as {tag, weight, count} }
      <li>
        <a 
          href={`/tags/${tag}`}
          style={`opacity: ${weight}`}
        >
          { tag } {#if showCount } ({count}) {/if}
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <slot />
{/if}

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

    padding: 0.1em 0.8em;
    margin: 0.1em 0.2em;
    border-radius: var(--borderRadius1);
    border: var(--borderPrimary);
  }

  a:hover {
    color: var(--cFg);
    background-color: var(--cBg);
  }
</style>