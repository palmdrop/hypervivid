import fs from 'fs/promises';
import type { NodeMetadata } from '../types/nodes';

const NODES_DIR = 'src/nodes/';

const main = async () => {
  console.log("Validating...")

  if(!process.argv[2]) {
    throw new Error('Please provide a node title');
  }

  const name = `${process.argv[2]}`;
  const preview = process.argv[3] ?? false;

  const nodes = await fs.readdir(
    NODES_DIR
  );

  if(nodes.includes(name)) {
    throw new Error(`A node with title ${name} already exists`);
  }

  const metadataPreset: NodeMetadata = {
    tags: [],
    links: [],
    createdAt: new Date().toUTCString(),
    inline: false,
    title: name,
    description: '',
    image: ''
  };

  const componentPreset = (name: string) => `
<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  const { name, metadata } = getNodeContext('${name}');

</script>

<div>
  { name }
</div>

<style>
</style>
  `;

  // Create files
  console.log("Creating files...");
  const dirPath = `./${NODES_DIR}/${name}`;

  await fs.mkdir(dirPath);

  const writePromises = [
    fs.writeFile(`${dirPath}/metadata.json`, JSON.stringify(metadataPreset, null, 2)),
    fs.writeFile(`${dirPath}/${name}.svelte`, componentPreset(name)),
  ]

  if(preview) writePromises.push(
    fs.writeFile(`${dirPath}/${name}.preview.svelte`, componentPreset(name)),
  );

  await Promise.all(writePromises);

  console.log(`Done creating files for node ${name}`);
}

main();