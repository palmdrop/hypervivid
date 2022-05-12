import type { NodeContext, NodeMetadata, NodeName } from "$types/nodes";
import { getContext, setContext } from "svelte";

export const getNodeContext = (
  name: NodeName
) => getContext<NodeContext>(name);

export const setNodeContext = (
  name: NodeName, 
  metadata: NodeMetadata
) => setContext<NodeContext>(name, {
  name,
  metadata
});