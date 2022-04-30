<script>
  import { title$ } from "$stores/head";
  import { useTitle } from "$utils/useTitle";

  import { metadata$ } from "../../stores/metadata";
  const tags = $metadata$.tags;

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
