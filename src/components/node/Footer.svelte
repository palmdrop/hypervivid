<script lang="ts">
	import LinkList from '$components/list/LinkList.svelte';
  import TagList from '$components/list/TagList.svelte';
  import type { NodeMetadata } from '$types/nodes';
  export let nodeMetadata: NodeMetadata;

  $: links = nodeMetadata.links ?? [];
  $: tags = nodeMetadata.tags ?? [];

  let expanded = true;
  const onToggle = () => {
    expanded = !expanded;
  }

</script>

<footer
  class:expanded
> 
  <button
    class="expander"
    on:click={onToggle}
  >
    {#if expanded}
      ᐯ 
    {:else}
      ᐱ
    {/if}
  </button>
  {#if expanded}
    <div class="date">
      <h2>
        Date
      </h2>
      <p>
        { nodeMetadata.createdAt }
      </p>
    </div>
    
    <div class="links">
      <h2>
        Links
      </h2>
      <LinkList 
        links={links}
      />
    </div>

    <div class="tags">
      <h2>
        Tags
      </h2>
      <TagList 
        tags={tags}
        orientation="horizontal"
      />
    </div>
  {:else}
    <button 
      class="metadata-button"
      on:click={onToggle}
    >
      Metadata
    </button>
  {/if}
</footer>

<style>
  .expander {
    position: absolute;
    top: 0.25em;
    left: 0.2em;

    font-size: 1.5rem;

    background: unset;
    border: none;

    cursor: pointer;
  }

  .expanded {
    min-height: 50px;
    padding: 1em 0em;
  }

  footer {
    padding: 0.5em 0em;

    position:relative;
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    border-top: var(--borderPrimary);
  }

  footer h2 {
    font-size: 1.5rem;
    margin-bottom: 0.3em;
  }

  .metadata-button {
    width: 100%;
  }
</style>
