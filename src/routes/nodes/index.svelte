<script>
  import { metadata$ } from "../../stores/metadata";

  const nodes = Object.keys(
    $metadata$.nodes
  );
</script>

<h1>
  Nodes
</h1>

<ul>
  {#each nodes as node }
    <li>
      <a
        href={`/nodes/${node}`}
      >
        { node }
      </a>
    </li> 
  {/each}
</ul>

<style>
</style>