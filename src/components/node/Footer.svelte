<script lang="ts">
	import LinkList from '$components/list/LinkList.svelte';
  import TagList from '$components/list/TagList.svelte';
  import type { NodeMetadata } from '$types/nodes';
  export let nodeMetadata: NodeMetadata;

  $: links = nodeMetadata.links ?? [];
  $: tags = nodeMetadata.tags ?? [];
</script>

<footer>
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
</footer>

<style>
  footer {
    min-height: 50px;
    padding: 2em 0em;

    display: flex;
    flex-direction: row;

    justify-content: space-around;
    border-top: 1px solid black;
  }

  footer h2 {
    font-size: 1.5rem;
    margin-bottom: 0.3em;
  }
</style>
