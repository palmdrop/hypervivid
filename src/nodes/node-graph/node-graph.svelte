<script lang="ts">
  import { getNodeContext } from '$utils/useNodeContext';
  const { name, metadata } = getNodeContext('node-graph');

  // TODO: uninstall and only install required modules
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  import { ForceGraph } from './force-graph';
  import data from '../graph-data';

  const width = 500;
  const height = 500;

  let container: HTMLElement;

  onMount(() => {
    // TODO: try this one: https://observablehq.com/@d3/disjoint-force-directed-graph
    const chart = ForceGraph(
      data, {
        nodeId: d => d.id,
        nodeGroup: d => d.group,
        nodeTitle: d => `${d.id}\n${d.group}`,
        linkStrokeWidth: l => Math.sqrt(l.value),
        width,
        height: 600,
        // invalidation
      }
    );

    container.appendChild(chart);

  });

</script>

<div class="node">
  <div id="graph" bind:this={container} />
</div>

<style>
</style>
