<script>
  import { useTitle } from "$utils/useTitle";

  import { metadata$ } from "../../stores/metadata";
  const tags = Object.keys($metadata$.tags);

  useTitle('Tags');
</script>

<h1>
  Tags
</h1>

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

<style>
</style>
