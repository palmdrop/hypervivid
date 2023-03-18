import type { Link as NodeLink, NodeMetadata } from '../types/nodes';
import fs from 'fs';

// TODO: move this to env variable that can be used by all scripts?
const NODES_DIR = 'src/nodes/';
const GRAPH_DATA_PATH = NODES_DIR + 'graph-data.ts';

type Node = {
  id: string,
  group: number
};

type Link = {
  source: string,
  target: string,
  value: number
}

const main = async () => {
  const metadata = (await import("../../" + NODES_DIR + 'metadata.ts')).default;

  const nodes: Node[] = [];

  // TODO: use set to avoid duplicate links?
  const links: Link[] = [];

  Object.entries(metadata.nodes).forEach(([name, node]: [string, any]) => {
    nodes.push({
      id: name,
      group: 0
    });

    // NOTE: Should I use global links list instead?
    node.links.forEach(link => {
      links.push({
        source: link.from,
        target: link.to,
        value: Math.round(link.strength)
      });
    });
  });

  fs.writeFileSync(
    GRAPH_DATA_PATH,
    `export default ${JSON.stringify({
      nodes,
      links
    }, null, 2)} as const;`
  );
}

main();

