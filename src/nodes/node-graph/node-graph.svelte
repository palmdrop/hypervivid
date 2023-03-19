<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  const { name, metadata } = getNodeContext('node-graph');

  // TODO: uninstall and only install required modules
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  import { ForceGraph } from './force-graph';
  import data from '../graph-data';

  const width = 1000;
  const height = 1000;

  let container: HTMLElement;

  // TODO
  /*
  
    * tag colors
    * only show certain tags or branches
    * paths?
    * show preview/node info on hover?
  */

  onMount(() => {
    // TODO: try this one: https://observablehq.com/@d3/disjoint-force-directed-graph
    const graph = ForceGraph(
      data, {
        nodeId: d => d.id,
        nodeGroup: d => d.group,
        nodeTitle: d => `${d.title}`,
        nodeRadius: 8,
        nodeStrokeWidth: 1,
        nodeStroke: 'var(--cFgFaded)',
        linkStrokeWidth: () => 2,//1 + Math.sqrt(l.value),
        linkStroke: 'var(--cFgSoft)',
        linkStrokeOpacity: 0.5,
        width,
        height,
        nodeStrength: -600,
        linkStrength: 0.7,
        colors: [
          /*
          '#000',
          '#333',
          '#666',
          '#999',
          '#AAA',
          */
          'var(--cBgBright)',
        ],
        // invalidation
      }
    ) as unknown as SVGElement;

    container.appendChild(graph);
  });

</script>

<div class="node">
  <div id="graph" bind:this={container} />
</div>

<style>
  .node {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #graph {
    width: 100%;
    max-width: 1000px;
    position: relative;
    overflow: hidden;

    border-radius: var(--borderRadius2);
    margin: 1em;

    z-index: 0;
  }

  #graph::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    box-shadow: inset 0px 0px 30px -20px var(--cFg);
    z-index: 1;

    pointer-events: none;
  }
</style>
