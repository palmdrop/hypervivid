import fs from 'fs/promises';
import type { NodeMetadata } from '../types/nodes';

const NODES_DIR = 'src/nodes/';

const main = async () => {
  console.log("Validating...")

  if(!process.argv[2]) {
    throw new Error('Please provide a node title');
  }

  const title = `${process.argv[2]}`;
  const preview = process.argv[3] ?? false;

  const nodes = await fs.readdir(
    NODES_DIR
  );

  if(nodes.includes(title)) {
    throw new Error(`A node with title ${title} already exists`);
  }

  const metadataPreset: NodeMetadata = {
    tags: [],
    links: [],
    createdAt: new Date().toUTCString(),
    inline: false,
    title,
    description: '',
    image: ''
  };

  const componentPreset = `
  <script lang="ts">
    export let name: string;
    export let nodeMetadata: NodeMetadata;

  </script>

  <div style="node">
    {name}
  </div>

  <style>
    .node {


    }
  </style>
  `;

  const previewComponentPreset = `
  <script lang="ts">
    export let name: string;
    export let nodeMetadata: NodeMetadata;

  </script>

  <div class="preview">
    Preview
  </div>

  <style>
    .preview {

    }
  </style>
  `

  // Create files
  console.log("Creating files...");
  const dirPath = `./${NODES_DIR}/${title}`;

  await fs.mkdir(dirPath);

  const writePromises = [
    fs.writeFile(`${dirPath}/metadata.json`, JSON.stringify(metadataPreset, null, 2)),
    fs.writeFile(`${dirPath}/${title}.svelte`, componentPreset),
  ]

  if(preview) writePromises.push(
    fs.writeFile(`${dirPath}/${title}.preview.svelte`, previewComponentPreset),
  );

  await Promise.all(writePromises);

  console.log(`Done creating files for node ${title}`);
}

main();