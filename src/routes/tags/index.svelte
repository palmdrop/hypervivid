<script>
  import TagList from "$components/list/TagList.svelte";
  import { useTitle } from "$utils/useTitle";
  import { metadata$ } from "$stores/metadata";
import Paragraph from "$components/text/Paragraph.svelte";

  const tags = Object.keys($metadata$.tags);

  useTitle('Tags');
</script>


<main>
  <h1>
    TAGS
  </h1>

  <Paragraph>
    Each node is tagged. 
    Tags are not categories, tags are just identifiers. 
    The number indicates how many nodes are tagged with this particular tag. 
  </Paragraph>

  <TagList
    tags={tags}
    orientation="horizontal"
    showCount={true}
  />
</main>

<style>
  main {
    padding-top: 1em;
  }
</style>
