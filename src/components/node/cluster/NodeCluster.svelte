<script lang="ts">
  // TODO: import metadata only in module context?
  import metadata from "$nodes/metadata";
	import { standardFilterSearchNodes, type MatchSettings } from '$utils/filterSearch';
  import type { NodeName, Tag } from "$types/nodes";
  import NodeList from "../../list/NodeList.svelte";

  export let tagFilter: MatchSettings<Tag> | undefined = undefined;
  export let linkFilter: MatchSettings<NodeName> | undefined = undefined;
  export let titleSearch: MatchSettings<string> | undefined = undefined;
  export let descriptionSearch: MatchSettings<string> | undefined = undefined;

  $: matchedNodes = standardFilterSearchNodes(metadata.nodes, tagFilter, linkFilter, titleSearch, descriptionSearch);
</script>

<NodeList
  nodeNames={matchedNodes}
  modeFirst="preview"
  modeRest="preview"
/>

<style>
</style>
