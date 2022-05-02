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
  tags: Map<string, number>,
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

      nodeTags.forEach(tag => {
        if(tags.has(tag)) {
          const score = tags.get(tag)! + 1.0;
          tags.set(tag, score);
        } else {
          tags.set(tag, 1.0);
        }
      });
      nodeLinks.forEach(link => addLink(nodeName, { from: nodeName, ...link }, links));

      nodes[nodeName] = metadata;
    } else {
      console.log(`Node "${nodeName}" has no metadata.`);
    }
  } catch(err) {
    console.log(`Metadata of node "${nodeName}" cannot be parsed.`);
  }
}

const sortNodes = (nodesMetadata: Record<string, Record<string, any>>) => {
  const getDate = (metadata: Record<string, any>) => {
    if(!metadata.createdAt) return undefined;
    const date = new Date(metadata.createdAt);

    if(isNaN(date.getTime())) return undefined;

    return date;
  }

  return Object.entries(nodesMetadata).sort((e1, e2) => {
    const d1 = getDate(e1[1]);
    const d2 = getDate(e2[1]);

    if(!d1) throw new Error(`Invalid date in node ${e1[0]}`);
    if(!d2) throw new Error(`Invalid date in node ${e2[0]}`);

    return d2.getTime() - d1.getTime();
  }).reduce(
    (acc, entry) => {
      acc[entry[0]] = entry[1];
      return acc;
    }, {} as Record<string, any>
  );
}

const processTags = (tags: Map<string, number>) => {
  let maxScore = 0.0;

  // Normalize
  tags.forEach(value => {
    maxScore = Math.max(value, maxScore);
  });

  tags.forEach((score, tag) => {
    tags.set(tag, score / maxScore)
  });

  // Sort
  return [...tags.entries()].sort((e1, e2) => {
    return e2[1] - e1[1]
  }).reduce(
    (acc, entry) => {
      acc[entry[0]] = entry[1];
      return acc;
    }, {} as Record<string, number>
  );
}

const sortNodeTags = (nodeMetadata: Record<string, any>, allTags: Map<string, number>) => {
  if(!nodeMetadata.tags) return;
  
  nodeMetadata.tags.sort((t1: string, t2: string) => {
    return allTags.get(t2)! - allTags.get(t1)!
  }) 
}

const main = async () => {
  const links = new Map<string, Link[]>();
  const tags = new Map<string, number>();

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
  // Also sort tags
  Object.values(metadata.nodes).forEach(nodeMetadata => {
    delete nodeMetadata.links;

    sortNodeTags(nodeMetadata, tags);
  });
  
  // Sort node entries by date
  metadata.nodes = sortNodes(metadata.nodes);

  // TODO: count tag usage, add weights to each tag! (show often used tags first (?))
  // TODO: or show most recently changed tag first?

  // Write to file
  fs.writeFileSync(
    METADATA_FILE_PATH,
    JSON.stringify({
      ...metadata,
      links: Object.fromEntries(links),
      tags: processTags(tags)
    }, null, 2)
  );

  console.log("Done!");
}

main();