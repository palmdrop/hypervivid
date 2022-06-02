import type { NodeContext, NodeName } from "$types/nodes";
import { getContext } from "svelte";

export const getNodeContext = (
  name: NodeName
) => getContext<NodeContext>(name);