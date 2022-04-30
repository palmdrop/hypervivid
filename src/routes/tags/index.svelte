<script>
  import { metadata$ } from "../../stores/metadata";
  const tags = $metadata$.tags;

  console.log(tags);
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
