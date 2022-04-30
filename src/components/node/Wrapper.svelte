<script lang="ts">
	import { getStringComparator } from '$utils/general';
	import type { NodeContext, Link } from '$types/nodes';

	import { metadata$ } from '$stores/metadata';

  export let name: string;
  export let context: NodeContext

  let metadata: Record<string, any>
  $: metadata = $metadata$.nodes[name];

  let links: Link[];
  $: links = $metadata$.links[name].sort((a, b) => getStringComparator(a.to, b.to));

  let tags: string[];
  $: tags = metadata.tags;

  const nodeMetadata = {
    ...metadata,
    links
  }

  // TODO: make wrapper read node file?

  // TODO: Pass links/tags down to node using context? 
  // TODO: Show consumed nodes in separate category? 

  // TODO: create route for each tag!
</script>

<!-- Section or main depending on context? -->
<div class="wrapper">
  <section class="node-container">
    <slot />
  </section>

  <footer>
    <div class="links">
      <h2>
        Links
      </h2>
      <ul>
        {#each links as link}
          <li>
            <a
              href={`/nodes/${link.to}`}
            >
              { link.to } - "{link.kind}"
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="tags">
      <h2>
        Tags
      </h2>
      <ul>
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

    </div>
  </footer>
</div>

<style>
  .wrapper {
    width: 100%;
    overflow-y: hidden;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .node-container {
    flex-grow: 1;
  }

  footer {
    min-height: 50px;
    padding: 2em;

    display: flex;
    flex-direction: row;

    justify-content: space-around;
    border-top: 1px solid black;
  }

  footer {
    display: flex;
  }

  footer h2 {
    font-size: 1.5rem;
    margin-bottom: 0.3em;
  }

  .tags > ul {
    display: flex;
    flex-direction: row;
  }

  li {
    padding-right: 0.5em;
    padding-bottom: 0.5em;
  }
</style>
