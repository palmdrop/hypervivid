<script>
  import TagList from "$components/list/TagList.svelte";
  import { useTitle } from "$utils/useTitle";
  import { metadata$ } from "$stores/metadata";
import Paragraph from "$components/text/Paragraph.svelte";
import { NODE_NAME, NODE_NAMES } from "$constants";

  const tags = Object.keys($metadata$.tags);

  useTitle('Tags');
</script>


<main>
  <h1>
    TAGS
  </h1>

  <Paragraph>
    Each { NODE_NAME } is tagged. 
    Tags are not categories, tags are just identifiers. 
    The number indicates how many { NODE_NAMES } are tagged with this particular tag. 
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
