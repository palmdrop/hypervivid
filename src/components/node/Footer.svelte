<script lang="ts">
	import type { NodeMetadata } from '$types/nodes';
  export let nodeMetadata: NodeMetadata;

  $: links = nodeMetadata.links ?? [];
  $: tags = nodeMetadata.tags ?? [];
</script>

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

<style>
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
