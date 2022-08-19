<script lang="ts">
  // TODO: import metadata only in module context?
  import metadata from "$nodes/metadata";
	import { filterSearchNodes, type Lookup, type MatchSettings, type NodeMatcher } from '$utils/filterSearch';
  import type { NodeName, Tag, Node, Link } from "$types/nodes";
  import NodeList from "../../list/NodeList.svelte";

  export let tagFilter: MatchSettings<Tag> | undefined = undefined;
  export let linkFilter: MatchSettings<NodeName> | undefined = undefined;
  export let titleSearch: MatchSettings<string> | undefined = undefined;
  export let descriptionSearch: MatchSettings<string> | undefined = undefined;

  const addMatcher = <T = any>(matchers: NodeMatcher[], settings: MatchSettings<T> | undefined, lookup: Lookup<T, Node>) => {
    if(!settings) return;
    matchers.push({
      settings,
      lookup
    });
  }

  let matchers: NodeMatcher[];
  $: {
    matchers = [];
    addMatcher(matchers, tagFilter, node => node.tags as unknown as Tag[]);
    addMatcher(matchers, linkFilter, node => node.links.map((link: Link) => link.to));
    addMatcher(matchers, titleSearch, node => node.title as unknown as string);
    addMatcher(matchers, descriptionSearch, node => node.description as unknown as string);
    matchers = matchers;
  }

  let matchedNodes: NodeName[];
  $: {
    matchedNodes = filterSearchNodes(metadata, matchers, 'all');
  }
</script>

<NodeList
  nodeNames={matchedNodes}
  modeFirst="preview"
  modeRest="preview"
/>

<style>
</style>
