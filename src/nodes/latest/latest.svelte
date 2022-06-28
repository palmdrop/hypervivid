<script lang="ts">
  import Paragraph from "$components/common/Paragraph.svelte";
  import NodeList from "$components/list/NodeList.svelte";

  import { metadata$ } from "$stores/metadata";
  import { formatDate } from "$utils/general";
  import { getNodeContext } from "$utils/useNodeContext";

  const { mode, metadata } = getNodeContext('latest');
  const { latestNode, mostRecentlyUpdatedNode } = $metadata$;
  const description = metadata.description;
  const latestLabel = `Latest — ${formatDate($metadata$.nodes[latestNode].createdAt)}`;
  const recentlyUpdatedLabel = `Most Recently Updated — ${formatDate($metadata$.nodes[mostRecentlyUpdatedNode].updatedAt)}`;

  const addLink = (node: string, strength: number) => {
    if(!!metadata.links.find(link => link.to === node)) return;
    metadata.links.push({
      to: node,
      kind: 'consumes',
      strength: strength
    });
  }

  addLink(latestNode, 1.0);
  addLink(mostRecentlyUpdatedNode, 0.5);
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
  