/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Link as NodeLink, NodeMetadata } from '../types/nodes';
import fs from 'fs';

// TODO: add to env
const NODES_DIR = 'src/nodes/';

const DEFAULT_LINK_KIND = 'tangent';
const DEFAULT_LINK_STRENGTH = 0.5;
const NODE_IMPORT_REGEX = /['|"](.\/)?(\.\.\/[^(/|.)]*)\/([^/]+)\.svelte['|"]/g;
const NODE_NAME_REGEX = /<Node[^(/>)]name={?['|"](\w+)["|']}?[^(/>]*[/?>]/g;
const NODE_LINK_REGEX = /['|"]\/nodes\/([^(/|.|"|')]*)["|']/g;

const METADATA_FILE_PATH = NODES_DIR + 'metadata.ts';
const RSS_PATH = 'static/rss.xml';
const PREVIEW_IMAGE_PATH = '/nodes/';

type Link = Omit<NodeLink, 'kind'> & { kind: string };
type Metadata = {
  links: Map<string, Link[]>,
  tags: Map<string, number>,
  nodes: Record<string, Record<string, any>>
}

const wrapRss = (rss: { feed: string }) => {
  rss.feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="http://www.palmdrop.site/rss.xml" rel="self" type="application/rss+xml" />
<title>Hypervivid ~ Hypersoft</title>
<link>https://www.palmdrop.site</link>
<description>Experimental webspace for exploring digital art, technology and the web.</description>
${rss.feed}
</channel>
</rss>`;

  return rss.feed;
}

const addLink = (node: string, link: Link, links: Map<string, Link[]>) => {
  if(!links.has(node)) links.set(node, []);
  const linksArray = links.get(node)!;

  // Ignore duplicate links
  if(linksArray.find(otherLink => otherLink.to === link.to)) return;

  linksArray.push(link);
}

const addUndirectedLink = (
  current: string, 
  other: string,
  links: Map<string, Link[]>,
  strength = DEFAULT_LINK_STRENGTH,
  kind = 'consumes'
) => {
  const currentKind = kind;
  let otherKind: string;

  switch(currentKind) {
    case 'consumes': otherKind = 'consumed'; break;
    case 'consumed': otherKind = 'consumes'; break;
    case 'tangent': otherKind = 'tangent'; break;
    case 'next': otherKind = 'previous'; break;
    case 'previous': otherKind = 'next'; break;
    case 'sequence': otherKind = 'sequence'; break;
    default: otherKind = currentKind;
  }

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
  metadata: Metadata,
  allNodeNames: string[],
  rss: { feed: string }
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

  // Read metadata
  try {
    const nodeDirPath = `${NODES_DIR}/${nodeName}`;
    const metadataPath = `${nodeDirPath}/metadata.json`;
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

      nodeLinks.forEach(link => {
        if(typeof link !== 'object') {
          addUndirectedLink(nodeName, link, links, DEFAULT_LINK_STRENGTH, DEFAULT_LINK_KIND);
        } else {
          addUndirectedLink(nodeName, link.to, links, link.strength, link.kind)
        }
      });

      // Verify that all links have corresponding nodes
      links.set(nodeName, (links.get(nodeName) ?? []).filter(link => {
        const linkNodeExists = allNodeNames.includes(link.to);
        if (!linkNodeExists) {
          console.error(`Warning: Link from node "${nodeName}" to "${link.to}" is invalid. "${link.to}" does not exist.`);
        }

        return linkNodeExists;
      }));

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

      // Get edited date
      try {
        const nodeFiles = fs.readdirSync(nodeDirPath);
        let nodeUpdatedAt: Date | undefined = undefined;
        nodeFiles.forEach(fileName => {
          const filePath = `${nodeDirPath}/${fileName}`;
          const stats = fs.statSync(filePath);

          const fileUpdatedAt = stats.mtime;

          if(!nodeUpdatedAt || fileUpdatedAt > nodeUpdatedAt) {
            nodeUpdatedAt = fileUpdatedAt;
          }
        });

        metadata.updatedAt = nodeUpdatedAt ?? metadata.createdAt;
      } catch (err) {
        console.log('Could not determine updated time for node', nodeName);
      }

      nodes[nodeName] = metadata;

      // Add to rss feed
      rss.feed += `<item>
<guid>https://palmdrop.site/nodes/${nodeName}</guid>
<title>${metadata.title || nodeName}</title>
<link>https://palmdrop.site/nodes/${nodeName}</link>
<description>${metadata.description}</description>
<pubDate>${new Date(metadata.createdAt).toUTCString()}</pubDate>
</item>`;
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

const findMostRecentlyUpdatedNode = (nodes: Metadata['nodes'], skipNodes: string[] = []) => {
  const result = Object.keys(nodes).reduce((acc, name) => {
    if(skipNodes.includes(name)) return acc;

    const node = nodes[name];
    const contender = { node, name };

    if(!acc) return contender;

    const { node: otherNode } = acc;
    return new Date(node.updatedAt) > new Date(otherNode.updatedAt) ? contender : acc;
  }, undefined as undefined | { node: Metadata['nodes'][string], name: string })

  if(result) return result.name;
  return undefined;
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

  const nodeNames = fs.readdirSync(NODES_DIR);
  const rss = { feed: '' };

  await Promise.all(nodeNames
    .filter(name => !name.includes('.')) // filter out files
    .map(name => processNode(
      name,
      metadata,
      nodeNames,
      rss
    ))
  );

  console.log(`Metadata processed. Writing to file "${METADATA_FILE_PATH}"`);

  // Update links and sort tags
  Object.entries(metadata.nodes).forEach(([name, nodeMetadata]) => {
    nodeMetadata.links = metadata.links.get(name);

    sortNodeTags(nodeMetadata, tags);
  });
  
  // Sort node entries by date
  metadata.nodes = sortNodes(metadata.nodes);

  Object.values(metadata.links).forEach(nodeLinks => sortNodeLinks(nodeLinks));

  // TODO: or show most recently changed tag first?

  // Write to file
  const latestNode = Object.keys(metadata.nodes)[0];
  const mostRecentlyUpdatedNode = findMostRecentlyUpdatedNode(metadata.nodes, [latestNode]);

  fs.writeFileSync(
    METADATA_FILE_PATH,
    `export default ${JSON.stringify({
      ...metadata,
      links: Object.fromEntries(links),
      tags: processTags(tags),
      latestNode,
      mostRecentlyUpdatedNode
    }, null, 2)} as const;`
  );

  fs.writeFileSync(
    RSS_PATH,
    wrapRss(rss)
  );

  console.log("Done!");
}

main();