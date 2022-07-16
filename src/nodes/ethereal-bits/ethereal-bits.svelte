<script lang="ts">
  import Paragraph from '$components/common/Paragraph.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  import type { SvelteComponentDev } from 'svelte/internal';

  type Bit = {
    Component: typeof SvelteComponentDev, 
    background?: string
  };

  const nameRegex = /.\/bits\/(\w+).svelte/g;

  const imports = import.meta.globEager('./bits/*');
  const bits = Object.entries(imports).reduce((acc, [path, bitImport]) => {
    let name = bitImport.name;
    if(!name) {
      name = [...path.matchAll(nameRegex)][0][1];
    }

    acc[name] = {
      Component: bitImport.default,
      background: bitImport.background
    }

    return acc;
  }, {} as { [name: string]: Bit })

  const { metadata } = getNodeContext('ethereal-bits');
</script>

<div class="node">
  <Paragraph
    big
    style="
      padding: 0.3em;
    "
  >
    { metadata.description }
  </Paragraph>
  <ul>
    {#each Object.entries(bits) as [name, bit], i (i)}
      <li
        style="
          {bit.background ? `background: ${bit.background};` : ''}
        "
      >
        <h2>{ name }</h2>
        <svelte:component this={bit.Component} />
      </li>
    {/each}
  </ul>
</div>

<style>
  .node {
    width: 100vw;
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1em;
  }

  li {
    border-top: var(--borderPrimary);
    width: 100%;
    padding: 10em 0em;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    position: absolute;
    top: 0.3em;
    left: 0.3em;
    font-size: 1.4em;
    text-transform: lowercase;

    color: var(--cFgFaded);
  }
</style>
  