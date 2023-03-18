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
  console.log("Generating graph data...");
  const metadata = (await import("../../" + NODES_DIR + 'metadata.ts')).default;

  // TODO: use set to avoid duplicate links?

  const nodes: Node[] = Object
    .entries(metadata.nodes)
    .map(([name, node]: [string, any]) => {
      return {
        id: name,
        group: node.tags[0]
      };
    });


  const links: Link[] = Object
    .values(metadata.links)
    .flatMap(links => links)
    .map((link: any) => {
      return {
        source: link.from,
        target: link.to,
        value: Math.round(link.strength)
      }
    });

  fs.writeFileSync(
    GRAPH_DATA_PATH,
    `export default ${JSON.stringify({
      nodes,
      links
    }, null, 2)} as const;`
  );

  console.log("Done generating graph data...");
}

main();

