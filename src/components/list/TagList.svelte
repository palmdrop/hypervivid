<script lang="ts">
  import { metadata$ } from "$stores/metadata";

  export let tags: string[];
  export let orientation: 'vertical' | 'horizontal'
  export let stretch = false;
  export let showCount = false;
  export let minOpacity = 0.2;

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
      <li class:stretch>
        <a 
          href={`/tags/${tag}`}
          style={`opacity: ${Math.max(weight, minOpacity)}`}
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

    flex-wrap: wrap;
    align-items: stretch;
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

  li.stretch {
    flex: 1 1 auto;
  }

  a {
    --margin: 0.2em 2px;
    display: block;
    box-sizing: border-box;
    text-align: center;

    text-decoration: none;

    font-family: var(--fMono);

    color: var(--cFgInverted);
    background-color: var(--cBgInverted);

    padding: 0.0em 0.6em;
    margin: var(--margin);
    border-radius: var(--borderRadius1);
    border: var(--borderPrimary);
  }

  a:last-child {
    margin: var(--margin);
    margin-right: 0;
  }

  a:first-child {
    margin: var(--margin);
    margin-left: 0;
  }

  a:hover {
    color: var(--cFg);
    background-color: var(--cBg);

    text-decoration: none;
  }
</style>