<script lang="ts" context="module">
  export type MatchSettings<T = string> = {
    searchOn: T[],
    matchMode: 'any' | 'all' | number
  }

</script>

<script lang="ts">
  // TODO: import metadata only in module context?
  import metadata from "$nodes/metadata";
  import type { NodeName, Tag, Node } from "$types/nodes";

  export let tagFilter: MatchSettings<Tag> | undefined = undefined;
  export let linkFilter: MatchSettings<NodeName> | undefined = undefined;
  export let titleSearch: MatchSettings<string> | undefined = undefined;
  export let descriptionSearch: MatchSettings<string> | undefined = undefined;

  let matchedNodes: NodeName[] = [];
</script>

<style>
</style>
