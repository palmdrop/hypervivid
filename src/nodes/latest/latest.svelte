<script lang="ts">
  import Paragraph from "$components/common/Paragraph.svelte";
  import NodeList from "$components/list/NodeList.svelte";

  import { metadata$ } from "$stores/metadata";
  import { formatDate } from "$utils/general";
  import { getNodeContext } from "$utils/useNodeContext";

  const { mode, metadata } = getNodeContext('latest');
  const { latestNode, mostRecentlyUpdatedNode } = $metadata$;
  const description = metadata.description;
  const latestLabel = `Recently Created — ${formatDate($metadata$.nodes[latestNode].createdAt)}`;
  const recentlyUpdatedLabel = `Recently Updated — ${formatDate($metadata$.nodes[mostRecentlyUpdatedNode].updatedAt)}`;

  // TODO: add support for dynamic links? Links exported from module script
  // TODO: add support for custom label rendering! see point list
  // TODO: fix updatedAt sort

  console.log("RENDERING!")
</script>

<div>
  { #if mode === 'only' }
    <div class='description'>
      <Paragraph wide big center>
        { description }
      </Paragraph>
    </div>
  {/if}
  <NodeList
    modeFirst='preview-force'
    modeRest='preview-force'
    itemLabels={[latestLabel, recentlyUpdatedLabel]}
    nodeNames={[latestNode, mostRecentlyUpdatedNode]}
  />
</div>

<style>
  .description {
    padding-top: 2em;
    padding-bottom: 1em;
  }
</style>
  