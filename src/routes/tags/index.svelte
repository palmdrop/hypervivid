<script>
  import TagList from '$components/list/TagList.svelte';
  import { useTitle } from '$utils/useTitle';
  import { metadata$ } from '$stores/metadata';
  import Paragraph from '$components/common/Paragraph.svelte';
  import { NODE_NAME, NODE_NAMES } from '$constants';

  const tags = Object.keys($metadata$.tags);

  useTitle('Tags');

  // TODO: add option to toggle tags. Create feed with only those nodes that have the tags. Also make it possible to open a specific tag.
</script>

<div class="node">
  <main>
    <h1>TAGS</h1>

    <Paragraph wide>
      Each {NODE_NAME} is tagged. Tags may say something about the contents of a node. The number indicates
      how many {NODE_NAMES} are tagged with this particular tag.
    </Paragraph>

    <TagList {tags} orientation="horizontal" showCount={true} />

    <div class="img-container">
      <img alt="" src="/img/connections/r5.jpg" />
    </div>
  </main>
</div>

<style>
  .node {
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    padding-bottom: 1em;
  }

  main {
    padding-top: 1em;
    max-width: 800px;

    margin: 10px;
    overflow: hidden;
  }

  @media (min-width: 780px) {
    main {
      margin: auto;
    }
  }

  .img-container {
    border: var(--borderPrimary);
    height: 801px;
  }

  img {
    width: 100%;
    height: 800px;

    border-radius: var(--borderRadius2);
  }
</style>
