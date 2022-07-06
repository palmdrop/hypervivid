<script lang="ts">
  import Paragraph from '$components/common/Paragraph.svelte';
  import { getNodeContext } from '$utils/useNodeContext';
  import type { SvelteComponentDev } from 'svelte/internal';
  import Spheres from './soft/Spheres.svelte';
  import SprayText from './soft/SprayText.svelte';
  import Weeds from './soft/Weeds.svelte';

  const { metadata } = getNodeContext('ethereal-bits');

  const entries: (typeof SvelteComponentDev)[] = [
    Spheres,
    Weeds,
    SprayText
  ];
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
    {#each entries as Entry, i (i)}
      <li>
        <svelte:component this={Entry} />
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
    padding: 7em 0em;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
  