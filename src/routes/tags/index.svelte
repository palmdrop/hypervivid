<script>
  import TagList from "$components/list/TagList.svelte";
  import { useTitle } from "$utils/useTitle";
  import { metadata$ } from "$stores/metadata";
  import Paragraph from "$components/common/Paragraph.svelte";
  import { NODE_NAME, NODE_NAMES } from "$constants";

  const tags = Object.keys($metadata$.tags);

  useTitle('Tags');

  // TODO: add option to toggle tags. Create feed with only those nodes that have the tags. Also make it possible to open a specific tag.
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
