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
  let graph: SVGElement;

  // TODO
  /*
  
    * tag colors
    * only show certain tags or branches
    * paths?
    * show preview/node info on hover?

  */

  onMount(() => {
    // TODO: try this one: https://observablehq.com/@d3/disjoint-force-directed-graph
    const chart = ForceGraph(
      data, {
        nodeId: d => d.id,
        nodeGroup: d => d.group,
        nodeTitle: d => `${d.id}\n${d.group}`,
        linkStrokeWidth: l => Math.sqrt(l.value),
        width,
        height,
        nodeStrength: -100,
        linkStrength: 0.1
        // invalidation
      }
    );

    container.appendChild(chart);
  });

</script>

<div class="node">
  <div id="graph" bind:this={container}>
  </div> 
</div>

<style>
  .node {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #graph {
    border: 1px solid black;
  }
</style>
