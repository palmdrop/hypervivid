/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fs from 'fs';
import type { Link } from '../src/types/nodes';

// TODO: add to env
const NODE_PATH = 'src/nodes/';

const DEFAULT_LINK_STRENGTH = 0.5;
const NODE_IMPORT_REGEX = /['|"](.\/)?(\.\.\/[^(/|.)]*)\/([^/]+)\.svelte['|"]/g;

const METADATA_FILE_PATH = NODE_PATH + 'metadata.json';

type Metadata = {
  links: Map<string, Link[]>,
  tags: Set<string>,
  nodes: Record<string, Record<string, any>>
}

/**
 * 1) Create basic links
 *  * Read all nodes
 *  * Check for node imports, patterns like /import [.*]/nodes/[a-zA-Z0-9-_].svelte/g
 *    * (check recursively? or enforce no node imports outside root nodes? pass nodes as children to components)
 *  * Link these nodes together using bidirectonal graph (implemented as hashmap)
 * 
 * 2) Create complex links
 *  * Analyze word usage/packages/patterns/shared imports, etc 
 *  * Create looser links based on this data
 */

const addLink = (node: string, link: Link, links: Map<string, Link[]>) => {
  if(!links.has(node)) links.set(node, []);
  links.get(node)!.push(link);
}

const addUndirectedLink = (
  current: string, 
  other: string,
  links: Map<string, Link[]>
) => {
  addLink(
    current, {
      from: current,
      to: other,
      kind: 'consumes',
      strength: DEFAULT_LINK_STRENGTH
    }, 
    links
  );

  addLink(
    other, {
      from: other,
      to: current,
      kind: 'consumed',
      strength: DEFAULT_LINK_STRENGTH
    }, 
    links
  );
}

const processNode = async (
  nodeName: string,
  metadata: Metadata
) => {
  // const current = nodeFileName.match(NODE_NAME_REGEX)![1];
  const { links, tags, nodes } = metadata;

  console.log(`Processing node "${nodeName}"...`);
  const path = `${NODE_PATH}/${nodeName}/${nodeName}.svelte`;

  // Create links based on imports

  if(!fs.existsSync(path)) {
    console.error(`Error: There's no node at path "${path}`);
    return;
  }

  const data = fs.readFileSync(
    path,
    'utf8'
  );

  const matches = [...data.matchAll(
    NODE_IMPORT_REGEX
  )];

  matches.forEach(match => {
    const other = match[3];

    addUndirectedLink(nodeName, other, links);
  })

  // Read metadata
  try {
    const metadataPath = `${NODE_PATH}/${nodeName}/metadata.json`;
    if(fs.existsSync(metadataPath)) {
      const metadata = JSON.parse(fs.readFileSync(
        metadataPath,
        'utf8'
      ));

      const nodeTags: string[] = metadata.tags ?? [];
      const nodeLinks: Link[] = metadata.links ?? [];

      nodeTags.forEach(tag => tags.add(tag));
      nodeLinks.forEach(link => addLink(nodeName, { from: nodeName, ...link }, links));

      nodes[nodeName] = metadata;
    } else {
      console.log(`Node "${nodeName}" has no metadata.`);
    }
  } catch(err) {
    console.log(`Metadata of node "${nodeName}" cannot be parsed.`);
  }
}


const main = async () => {
  const links = new Map<string, Link[]>();
  const tags = new Set<string>();

  const metadata: Metadata = {
    links, 
    tags,
    nodes: {}
  }

  console.log("Processing metadata...")

  await Promise.all(fs.readdirSync(NODE_PATH)
    .filter(path => !path.includes('.')) // filter out files
    // .filter(file => NODE_REGEX.test(file))
    .map(path => processNode(
      path,
      metadata
    ))
  );

  console.log(`Metadata processed. Writing to file "${METADATA_FILE_PATH}"`);

  // Remove links, the updated link list will exist in "metadata.links"
  Object.values(metadata.nodes).forEach(nodeMetadata => {
    delete nodeMetadata.links;
  });

  fs.writeFileSync(
    METADATA_FILE_PATH,
    JSON.stringify({
      ...metadata,
      links: Object.fromEntries(links),
      tags: [...tags]
    }, null, 2)
  );

  console.log("Done!");
}

main();