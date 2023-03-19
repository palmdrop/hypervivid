import * as d3 from 'd3';

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/disjoint-force-directed-graph
export function ForceGraph({
  nodes, // an iterable of node objects (typically [{id}, …])
  links // an iterable of link objects (typically [{source, target}, …])
}, {
  nodeId = d => d.id, // given d in nodes, returns a unique identifier (string)
  nodeGroup, // given d in nodes, returns an (ordinal) value for color
  nodeGroups, // an array of ordinal values representing the node groups
  nodeTitle, // given d in nodes, a title string
  nodeFill = "currentColor", // node stroke fill (if not using a group color encoding)
  nodeStroke = "#fff", // node stroke color
  nodeStrokeWidth = 1.5, // node stroke width, in pixels
  nodeStrokeOpacity = 1, // node stroke opacity
  nodeRadius = 5, // node radius, in pixels
  nodeStrength,
  linkSource = ( {source} ) => source, // given d in links, returns a node identifier string
  linkTarget = ( {target} ) => target, // given d in links, returns a node identifier string
  linkStroke = "#999", // link stroke color
  linkStrokeOpacity = 0.6, // link stroke opacity
  linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
  linkStrength,
  colors = d3.schemeTableau10, // an array of color strings, for the node groups
  width = 640, // outer width, in pixels
  height = 400, // outer height, in pixels
} = {}) {
  // Compute values.
  const N = nodes.map(nodeId);
  const U = nodes.map(node => node.url);
  const LS = links.map(linkSource);
  const LT = links.map(linkTarget);
  if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
  const T = nodes.map(nodeTitle);
  const G = nodeGroup == null ? null : nodes.map(nodeGroup);
  const W = typeof linkStrokeWidth !== "function" ? null : links.map(linkStrokeWidth);

  // Replace the input nodes and links with mutable objects for the simulation.
  nodes = nodes.map((_, i) => ({ id: N[i] }));
  links = links.map((_, i) => ({ source: LS[i], target: LT[i] }));

  // Compute default domains.
  if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

  // Construct the scales.
  const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(({index: i}) => N[i]);
  if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
  if (linkStrength !== undefined) forceLink.strength(linkStrength);

  const simulation = d3.forceSimulation(nodes)
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

  return Object.assign(svg.node(), {scales: {color}});
}