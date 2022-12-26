import { redirect } from '@sveltejs/kit';
import nodesMetadata from '$nodes/metadata';
import type { Tag } from '$types/nodes';
import { filterSearchNodes } from '../../../utils/filterSearch';

export async function load ({ params }) {
  const { tag }: { tag: Tag } = params;

  const tags = nodesMetadata.tags ?? {};
  if(!tags[tag]) throw redirect(302, '/');

  const nodeNames = filterSearchNodes(
    nodesMetadata.nodes,
    [{
      settings: {
        matchOn: [tag],
      },
      lookup: (node) => node.tags as unknown as Tag[]
    }],
    'any'
  );

  return {
    tag,
    nodeNames
  }
}
