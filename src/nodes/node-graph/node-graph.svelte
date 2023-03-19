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

  let container: HTMLElement;

  // TODO
  /*
  
    * tag colors
    * only show certain tags or branches
    * paths?
    * show preview/node info on hover?
  */

  onMount(() => {
    const { nodes: nodesData, links: linksData } = data;
    

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
    const N = nodesData.map(node => node.id);
    const T = nodesData.map(node => node.title);
    const U = nodesData.map(node => node.url);
    const LS = linksData.map(link => link.source);
    const LT = linksData.map(link => link.target);
    // if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
    const G = nodesData.map(node => (node as any).group ?? 0);
    const W = linksData.map(link => 1.5);

    // Replace the input nodes and links with mutable objects for the simulation.
    const nodes = nodesData.map((_, i) => ({ id: N[i] }));
    const links = linksData.map((_, i) => ({ source: LS[i], target: LT[i] }));

    // Compute default domains.
    // if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);
    const nodeGroups = d3.sort(G);

    // Construct the scales.
    const color = d3.scaleOrdinal(nodeGroups, colors);

    // Construct the forces.
    const forceNode = d3.forceManyBody();
    const forceLink = d3.forceLink(links).id(({index: i}) => N[i!]);
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
      .data(links)
      .join("line")
        .attr("stroke-opacity", linkStrokeOpacity)
        .attr("stroke-width", typeof linkStrokeWidth !== "function" ? linkStrokeWidth : null)
        .style("stroke", linkStroke)
        .style("stroke-linecap", "round")

    if (W) link.attr("stroke-width", ({index: i}) => W[i]);

    const node = svg.append("g")
        .attr("fill", nodeFill)
        .attr("stroke", nodeStroke)
        .attr("stroke-opacity", nodeStrokeOpacity)
        .attr("stroke-width", nodeStrokeWidth)
        .attr("filter", 'drop-shadow(0px 0px 5px #00000088)')
      .selectAll("circle")
      .data(nodes)
      .join('a')
        .attr("href", ({ index }) => U[index])
        .attr("target", "_blank")
      .append("circle")
        .attr("r", nodeRadius)
        .call(drag(simulation))

    if (G) node.attr("fill", ({index: i}) => color(G[i]));

    const tooltip = d3.select('body')
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("background", "var(--cBg)")
      .style("padding", "0.5em")
      .style("border", "var(--borderPrimary)")
      .text("");

    /*
    node
      .append("title").text(({index: i}) => T[i]);
    */

    let isDragging = false;

    // TODO: simply use a callback and create tooltip using svelte instead!
    node
      .on('mouseover', function (event, d) {
        d3.select(this)
          .style('fill', 'var(--cAccent)');

        link
          .style('stroke', function (linkD) {
            return linkD.source.id === d.id || linkD.target.id === d.id
              ? 'var(--cFgFaded)'
              : linkStroke;
          });

        if(!isDragging) {
          tooltip
            .text(T[d.index])
            .style("visibility", "visible")
            .style("top", `${event.pageY + 10}px`)
            .style("left", `${event.pageX + 10}px`);
        }
      })
      .on('mousemove', function (event, d) {
        tooltip
          .style("top", `${event.pageY + 10}px`)
          .style("left", `${event.pageX + 10}px`)
      })
      .on('mouseout', function () {
        tooltip
          .style("visibility", "hidden");

        d3.select(this)
          .style('fill', 'var(--cBgBright)');

        link
          .style('stroke', linkStroke);
      });

    function ticked() {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    }

    function drag(simulation) {    
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
        tooltip.style("visibility", "hidden");
      }
      
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
        isDragging = true;
      }
      
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
        isDragging = false;
      }
      
      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    const graph = Object.assign(svg.node()!, {scales: {color}});

    // TODO: try this one: https://observablehq.com/@d3/disjoint-force-directed-graph
    /*
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
          'var(--cBgBright)',
        ],
        // invalidation
      }
    ) as unknown as SVGElement;
    */

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
