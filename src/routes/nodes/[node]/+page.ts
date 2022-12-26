import { redirect } from '@sveltejs/kit';
import allMetadata from '$nodes/metadata';

export async function load ({ params, url }) {
  const { 
    node: name,
  }: {
    node: string,
  } = params;

  const fullscreen = url.searchParams.get('fullscreen') === 'true';

  if(Object.keys(allMetadata.nodes).includes(name)) {
    return {
      name,
      fullscreen,
      metadata: allMetadata.nodes[name]
    }
  } else {
    throw redirect(302, '/');
  }
}
