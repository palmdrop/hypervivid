<script lang="ts">
  import { metadata$ } from "$stores/metadata";

  export let tags: string[];
  export let orientation: 'vertical' | 'horizontal'

  $: tagsAndWeights = $metadata$.tags as { [tag: string]: number };

  $: weightedTags = tags
    .map(tag => ({
      tag,
      weight: Math.pow(tagsAndWeights[tag], 0.5)
    }))
    .sort((t1, t2) => (t2.weight - t1.weight));
</script>

<ul class={orientation}>
  {#each weightedTags as {tag, weight} }
    <li>
      <a 
        href={`/tags/${tag}`}
        style={`opacity: ${weight}`}
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