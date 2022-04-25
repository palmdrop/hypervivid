/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fs from 'fs';
import type { Link } from '../src/types/links';

// TODO: add to env
const NODE_PATH = 'src/nodes/';
const NODE_REGEX = /^.*\.svelte$/;

const DEFAULT_LINK_STRENGTH = 0.5;
const NODE_IMPORT_REGEX = /['|"](\.[^(/|.)]*|(src\/nodes))\/([^/]+)\.svelte['|"]/g;
const NODE_NAME_REGEX = /(.*).svelte/;

const METADATA_FILE_PATH = 'src/nodes/metadata.json';

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
  nodeFileName: string,
  links: Map<string, Link[]>,
  tags: Set<string>
) => {
  const current = nodeFileName.match(NODE_NAME_REGEX)![1];

  console.log(`Processing node "${current}"...`);

  // Create links based on imports
  const data = fs.readFileSync(
    NODE_PATH + nodeFileName,
    'utf8'
  );

  const matches = [...data.matchAll(
    NODE_IMPORT_REGEX
  )];

  matches.forEach(match => {
    const other = match[3];

    addUndirectedLink(current, other, links);
  })

  // Read metadata
  try {
    const metadataPath = NODE_PATH + current + '.metadata.json';
    if(fs.existsSync(metadataPath)) {
      const metadata = JSON.parse(fs.readFileSync(
        metadataPath,
        'utf8'
      ));

      const nodeTags: string[] = metadata.tags ?? [];
      const nodeLinks: Link[] = metadata.links ?? [];

      nodeTags.forEach(tag => tags.add(tag));
      nodeLinks.forEach(link => addLink(current, { from: current, ...link }, links));
    } else {
      console.log(`Node "${current}" has no metadata.`);
    }
  } catch(err) {
    console.log(`Metadata of node "${current}" cannot be parsed.`);
  }
}


const main = async () => {
  const links = new Map<string, Link[]>();
  const tags = new Set<string>();

  console.log("Processing metadata...")

  await Promise.all(fs.readdirSync(NODE_PATH)
    .filter(file => NODE_REGEX.test(file))
    .map(nodeFileName => processNode(
      nodeFileName, 
      links,
      tags
    ))
  );

  console.log(`Metadata processed. Writing to file "${METADATA_FILE_PATH}"`);

  fs.writeFileSync(
    METADATA_FILE_PATH,
    JSON.stringify({
      links: Object.fromEntries(links),
      tags: [...tags]
    }, null, 2)
  )

  console.log("Done!");
}

main();