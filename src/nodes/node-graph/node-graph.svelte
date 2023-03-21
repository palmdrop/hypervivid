<script lang="ts">
  // Lots of the d3 code is based on @d3/disjoint-force-directed-graph
  // Example is heavily modified.

  // Copyright 2021 Observable, Inc.
  // Released under the ISC license.
  // https://observablehq.com/@d3/disjoint-force-directed-graph

  import { getNodeContext } from '$utils/useNodeContext';
  const { name, metadata } = getNodeContext('node-graph');

  // TODO: uninstall and only install required modules
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  import data from '../graph-data';
  import type { SimulationNodeDatum } from 'd3';

  const width = 1000;
  const height = 1000;

  let innerWidth: number;
  let innerHeight: number;

  let container: HTMLElement;
  let tooltip: HTMLDivElement;

  // TODO
  /*
    * tag colors
    * only show certain tags or branches
    * paths?
    * show preview/node info on hover?
    * add default image for nodes without thumbnail!
  */

  let activeNode: typeof data.nodes[number] | undefined = undefined;
  let hoveredMouseX = 0;
  let hoveredMouseY = 0;

  onMount(() => {
    const { nodes, links } = data;

    const nodeStrength = -600;
    const linkStrength = 0.7;

    const nodeRadius = 8;
    const nodeStrokeWidth = 1;
    const nodeStroke = 'var(--cFgFaded)';
    const nodeFill = 'currentColor';
    const linkStrokeWidth = () => 2;
    const linkStroke = 'var(--cFgSoft)';
    const linkStrokeOpacity = 0.5;

    const nodeStrokeOpacity = 1;

    const colors = [
      "var(--cBgBright)"
    ];

    // Compute values.
    const linkWidths = links.map(link => 1.5);

    // Compute default domains.
    const nodeGroups = d3.sort(nodes.map(node => node.group ?? 0));

    // Construct the scales.
    const color = d3.scaleOrdinal(nodeGroups, colors);

    // Construct the forces.
    const forceNode = d3.forceManyBody();
    const forceLink = d3.forceLink(links).id(({index: i}) => nodes[i!].id);
    if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
    if (linkStrength !== undefined) forceLink.strength(linkStrength);

    const simulation = d3.forceSimulation(nodes as SimulationNodeDatum[])
        .force("link", forceLink)
        .force("charge", forceNode)
        .force("x", d3.forceX())
        .force("y", d3.forceY())
        .on("tick", ticked);

    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    const link = svg.append("g")
      .selectAll("line")
      .data(links as (typeof links[number] & { index: number })[])
      .join("line")
        .attr("stroke-opacity", linkStrokeOpacity)
        .attr("stroke-width", typeof linkStrokeWidth !== "function" ? linkStrokeWidth : null)
        .style("stroke", linkStroke)
        .style("stroke-linecap", "round")

    if (linkWidths) link.attr("stroke-width", ({index: i}) => linkWidths[i]);

    const node = svg.append("g")
        .attr("fill", nodeFill)
        .attr("stroke", nodeStroke)
        .attr("stroke-opacity", nodeStrokeOpacity)
        .attr("stroke-width", nodeStrokeWidth)
        .attr("filter", 'drop-shadow(0px 0px 5px #00000088)')
      .selectAll("circle")
      .data(nodes as (typeof nodes[number] & { index: number })[])
      .join('a')
        .attr("href", ({ url }) => url)
        .attr("target", "_blank")
      .append("circle")
        .attr("r", nodeRadius)
        .call(drag(simulation))

    node.attr("fill", ({ group }) => color(group ?? 0));

    let isDragging = false;

    const calculateTooltipX = (event: any) => {
      const x = event.pageX;
      const tooltipWidth = tooltip.getBoundingClientRect().width;

      if(x + tooltipWidth < innerWidth) {
        return x;
      } else {
        return x - tooltipWidth;
      }
    }

    const calculateTooltipY = (event: any) => {
      const y = event.pageY;
      const tooltipHeight = tooltip.getBoundingClientRect().height;

      if(y + tooltipHeight < innerHeight) {
        return y;
      } else {
        return y - tooltipHeight;
      }
    }

    node
      .on('mouseover', function (event, node) {
        d3.select(this)
          .style('fill', 'var(--cAccent)');

        link
          .style('stroke', function (linkD: any) {
            return linkD.source.id === node.id || linkD.target.id === node.id
              ? 'var(--cFgFaded)'
              : linkStroke;
          });

        if(!isDragging) {
          hoveredMouseX = calculateTooltipX(event);
          hoveredMouseY = calculateTooltipY(event);
          activeNode = node;
        }
      })
      .on('mousemove', function (event) {
        hoveredMouseX = calculateTooltipX(event);
        hoveredMouseY = calculateTooltipY(event);
      })
      .on('mouseout', function () {
        activeNode = undefined;

        d3.select(this)
          .style('fill', 'var(--cBgBright)');

        link
          .style('stroke', linkStroke);
      });

    function ticked() {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);
    }

    function drag(simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>) {    
      function dragstarted(event: d3.D3DragEvent<SVGElement, d3.SimulationNodeDatum, d3.SimulationNodeDatum>) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      
      function dragged(event: d3.D3DragEvent<SVGElement, d3.SimulationNodeDatum, d3.SimulationNodeDatum>) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
        isDragging = true;
      }
      
      function dragended(event: d3.D3DragEvent<SVGElement, d3.SimulationNodeDatum, d3.SimulationNodeDatum>) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
        isDragging = false;
      }
      
      return d3.drag<SVGCircleElement, any>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    const graph = Object.assign(svg.node()!, {scales: {color}});

    container.appendChild(graph);
  });

</script>

<svelte:window 
  bind:innerWidth={innerWidth}
  bind:innerHeight={innerHeight}
/>

<div class="node">
  <div id="graph" bind:this={container} />
    <div 
      class="tooltip"
      style:left="{hoveredMouseX + 10}px"
      style:top="{hoveredMouseY - 25}px"
      bind:this={tooltip}
      style:visibility={activeNode ? 'visible' : 'hidden'}
    >
      { #if activeNode }
        <div class="image-container">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            style="
            "
          >
            <line x1="100%" y1="0" x2="0" y2="100%" />
            <line x1="0%" y1="0" x2="100%" y2="100%" />
          </svg>
          { #if activeNode.image }
            <img 
              src={activeNode.image}
              alt={activeNode.title}
            />
          { /if }
        </div>
        <h1>
          { activeNode.title }
        </h1>
        <p>
          { activeNode.description }
        </p>
      { /if }
    </div>
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

    border-radius: var(--borderRadius1);
    border: var(--borderPrimary);
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

  .tooltip {
    position: absolute;
    background-color: var(--cBg);
    padding: 0.5em;
    border: var(--borderPrimary);

    max-width: 50vw;
    width: 400px;

    z-index: 1;
  }

  .tooltip .image-container {
    width: 100%;
    aspect-ratio: 1;
    position: relative;
  }

  .tooltip svg {
    position: absolute;
    top: 0;
    left: 0;

    stroke: var(--cFg);
    stroke-width: 1px;
    width: 100%;
    aspect-ratio: 1;
    box-sizing: border-box;
    border: var(--borderPrimary);

    z-index: -1;
  }

  .tooltip img {
    object-fit: cover;

    width: 100%;
    height: 100%;

    color: var(--cBg);
  }

  .tooltip h1 {
    font-size: 1em;
    text-align: left;
    font-weight: bold;

    padding-bottom: 0.5em;
  }
</style>
