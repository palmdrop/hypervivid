import { redirect } from '@sveltejs/kit';
import metadata from "$nodes/metadata";

const nodeNames = Object.keys(metadata.nodes);

export async function load () {
  const node = nodeNames[Math.floor(Math.random() * nodeNames.length)];

  throw redirect(302, `/nodes/${node}`);
}
