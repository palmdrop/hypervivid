/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Link as NodeLink, NodeMetadata } from '../types/nodes';
import fs from 'fs';

// TODO: add to env
const NODES_DIR = 'src/nodes/';

const DEFAULT_LINK_STRENGTH = 0.5;
const NODE_IMPORT_REGEX = /['|"](.\/)?(\.\.\/[^(/|.)]*)\/([^/]+)\.svelte['|"]/g;
const NODE_NAME_REGEX = /<Node[^(/>)]+name={?["|'](\w+)["|']}?[^(/>)]*\/>/g;
const NODE_LINK_REGEX = /['|"]\/nodes\/([^(/|.|"|')]*)["|']/g;

const METADATA_FILE_PATH = NODES_DIR + 'metadata.ts';

const PREVIEW_IMAGE_PATH = '/nodes/';

type Link = Omit<NodeLink, 'kind'> & { kind: string };
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
  links: Map<string, Link[]>,
  strength = DEFAULT_LINK_STRENGTH,
  kind = 'consumes'
) => {
  const currentKind = kind;
  const otherKind = kind === 'consumes' 
    ? 'consumed'
    : (kind === 'consumed') 
    ? 'consumes'
    : 'tangent';

  addLink(
    current, {
      from: current,
      to: other,
      kind: currentKind,
      strength
    }, 
    links
  );

  addLink(
    other, {
      from: other,
      to: current,
      kind: otherKind,
      strength
    }, 
    links
  );
}

const processNode = async (
  nodeName: string,
  metadata: Metadata
) => {
  const { links, tags, nodes } = metadata;

  if(!links.has(nodeName)) links.set(nodeName, []);

  console.log(`Processing node "${nodeName}"...`);
  const path = `${NODES_DIR}/${nodeName}/${nodeName}.svelte`;

  // Create links based on imports

  if(!fs.existsSync(path)) {
    console.error(`Error: There's no node at path "${path}`);
    return;
  }

  const data = fs.readFileSync(
    path,
    'utf8'
  );

  const addLinks = (regex: RegExp, index: number, kind = 'consumes', strength = DEFAULT_LINK_STRENGTH) => {
    const allMatches = [...data.matchAll(
      regex
    )].map(matches => matches[index]);

    const uniqueMatches = Array.from(new Set<string>(allMatches));

    uniqueMatches.forEach(match => {
      addUndirectedLink(nodeName, match, links, strength, kind);
    });
  }

  addLinks(NODE_IMPORT_REGEX, 3);
  addLinks(NODE_NAME_REGEX, 1);
  addLinks(NODE_LINK_REGEX, 1, 'references');

  /*
  [...data.matchAll(
    NODE_IMPORT_REGEX
  )].forEach(([,,,other]) => {
    addUndirectedLink(nodeName, other, links);
  });

  [...data.matchAll(
    NODE_NAME_REGEX
  )].forEach(([,other]) => {
    addUndirectedLink(nodeName, other, links);
  });

  [...data.matchAll(
    NODE_LINK_REGEX
  )].forEach(([,other]) => {
    // addUndirectedLink(nodeName, other, links, DEFAULT_LINK_STRENGTH, 'references');
    console.log(other)
  });
  */



  // Read metadata
  try {
    const metadataPath = `${NODES_DIR}/${nodeName}/metadata.json`;
    if(fs.existsSync(metadataPath)) {
      const metadata = JSON.parse(fs.readFileSync(
        metadataPath,
        'utf8'
      )) as NodeMetadata;

      const nodeTags: string[] = metadata.tags ?? [];
      const nodeLinks: Link[] = metadata.links ?? [];

      nodeTags.forEach(tag => {
        if(
          Number.isInteger(Number.parseInt(tag)) &&
          tag === `${Number.parseInt(tag)}`
        ) {
          throw new Error(`Tags cannot be integers: "${tag}"`);
        }

        if(tags.has(tag)) {
          const score = tags.get(tag)! + 1.0;
          tags.set(tag, score);
        } else {
          tags.set(tag, 1.0);
        }
      });
      nodeLinks.forEach(link => 
        addUndirectedLink(nodeName, link.to, links, link.strength, link.kind)
      );

      // Check if preview image exists if not explicitly defined
      if(!metadata.image || !metadata.image.length) {
        const jpgPath = `${PREVIEW_IMAGE_PATH}${nodeName}.preview.jpg`;
        const pngPath = `${PREVIEW_IMAGE_PATH}${nodeName}.preview.png`;
        if(fs.existsSync('static' + jpgPath)) {
          metadata.image = jpgPath;
        } else if(fs.existsSync('static' + pngPath)) {
          metadata.image = pngPath;
        }
      }

      nodes[nodeName] = metadata;
    } else {
      // TODO: Create default metadata
      console.log(`Node "${nodeName}" has no metadata.`);
    }
  } catch(err) {
    console.log(`Metadata of node "${nodeName}" cannot be parsed: `, err);
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

const sortNodeLinks = (links: Link[]) => {
  return links.sort((l1, l2) => {
    return l2.strength - l1.strength;
  });
}

const sortNodeTags = (nodeMetadata: Record<string, any>, allTags: Map<string, number>) => {
  if(!nodeMetadata.tags) return;
  
  nodeMetadata.tags.sort((t1: string, t2: string) => {
    return allTags.get(t2)! - allTags.get(t1)!
  }) 
}

const processTags = (tags: Map<string, number>) => {
  let maxWeight = 0.0;

  const tagsData = new Map<string, {
    weight: number,
    count: number
  }>();

  // Calculate weight
  tags.forEach(value => {
    maxWeight = Math.max(value, maxWeight);
  });

  tags.forEach((count, tag) => {
    tagsData.set(tag, {
      weight: count / maxWeight,
      count,
    })
  });

  // Sort
  return [...tagsData.entries()].sort((e1, e2) => {
    return e2[1].weight - e1[1].weight
  }).reduce(
    (acc, entry) => {
      acc[entry[0]] = entry[1];
      return acc;
    }, {} as Record<string, { weight: number, count: number }>
  );
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

  await Promise.all(fs.readdirSync(NODES_DIR)
    .filter(path => !path.includes('.')) // filter out files
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

  Object.values(metadata.links).forEach(nodeLinks => sortNodeLinks(nodeLinks));

  // TODO: or show most recently changed tag first?

  // Write to file
  fs.writeFileSync(
    METADATA_FILE_PATH,
    `export default ${JSON.stringify({
      ...metadata,
      links: Object.fromEntries(links),
      tags: processTags(tags)
    }, null, 2)} as const;`
  );

  console.log("Done!");
}

main();