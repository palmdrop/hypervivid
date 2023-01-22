<script lang="ts">
  import { metadata$ } from "$stores/metadata";

  export let tags: string[];
  export let orientation: 'vertical' | 'horizontal'
  export let stretch = false;
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
    {#each weightedTags as {tag, count} }
      <li class:stretch>
        <a 
          href={`/tags/${tag}`}
        >
          { tag } {#if showCount } ({count}) {/if}
        </a>
      </li>
    {/each}
    { #if stretch }
      <li class="filler" />
    { /if }
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
    line-height: 1.0em;
  }

  li.stretch {
    flex: 1 1 auto;
  }

  a {
    --margin: 2px 2px;
    display: block;
    box-sizing: border-box;
    text-align: center;

    text-decoration: none;

    font-family: var(--fMono);

    color: var(--cFg);
    background-color: var(--cBg);

    padding: 0.4em 0.5em;
    margin: var(--margin);
    border-radius: var(--borderRadius1);
    border: var(--borderPrimary);

    font-size: 0.9rem;
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
    color: var(--cFgInverted);
    background-color: var(--cBgInverted);
    text-decoration: none;
  }

  .filler {
    height: 0px;
    flex-grow: 100;
  }
</style>