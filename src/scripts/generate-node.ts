import fs from 'fs/promises';
import type { NodeMetadata } from '../types/nodes';

const NODES_DIR = 'src/nodes/';

const defaultPreset = (name: string) => `
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

const fragmentPreset = (name: string) => `
<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  import Fragment from '$components/node/templates/Fragment.svelte';
  import Document from './document.svelte.md';

  const { metadata, mode } = getNodeContext('${ name }');
</script>

<Fragment
  name={metadata.title}
  { mode }
>
  <Document />
</Fragment>

<style>
</style>
`;

const presets = {
  'default': defaultPreset,
  'fragment': fragmentPreset
};

const main = async () => {
  console.log("Validating...")

  if(!process.argv[2]) {
    throw new Error('Please provide a node title');
  }

  const name = `${process.argv[2]}`;
  // const preview = process.argv[3] ?? false;

  let preview = false;
  let preset: keyof typeof presets = 'default';

  for(let i = 3; i < process.argv.length; i++) {
    const arg = process.argv[i];
    console.log(arg);
    switch(arg) {
      case '--preview': preview = true; break;
      case '--fragment': preset = 'fragment'; break;
    }
  }

  const presetFunction = presets[preset];

  const nodes = await fs.readdir(
    NODES_DIR
  );

  if(nodes.includes(name)) {
    throw new Error(`A node with title ${name} already exists`);
  }

  const date = new Date().toUTCString();

  const metadataPreset: NodeMetadata = {
    tags: [],
    links: [],
    createdAt: date,
    updatedAt: date,
    inline: false,
    title: name,
    description: '',
    image: ''
  };


  // Create files
  console.log("Creating files...");
  const dirPath = `./${NODES_DIR}/${name}`;

  await fs.mkdir(dirPath);

  const writePromises = [
    fs.writeFile(`${dirPath}/metadata.json`, JSON.stringify(metadataPreset, null, 2)),
    fs.writeFile(`${dirPath}/${name}.svelte`, presetFunction(name)),
  ];

  if(preset === 'fragment') {
    writePromises.push(
      fs.writeFile(`${dirPath}/document.svelte.md`, `# ${name}`)
    );
  }

  if(preview) {
    writePromises.push(
      fs.writeFile(`${dirPath}/${name}.preview.svelte`, defaultPreset(name)),
    );
  }

  await Promise.all(writePromises);

  console.log(`Done creating files for node ${name}`);
}

main();