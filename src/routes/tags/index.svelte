<script>
  import TagList from "$components/list/TagList.svelte";
import { useTitle } from "$utils/useTitle";

  import { metadata$ } from "../../stores/metadata";
  const tags = Object.keys($metadata$.tags);

  useTitle('Tags');
</script>

<h1>
  Tags
</h1>

<TagList
  tags={tags}
  orientation="vertical"
/>

<style>
</style>
