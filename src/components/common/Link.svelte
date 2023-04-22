<script lang="ts">
  import { page } from "$app/stores";
  import { clamp } from "lodash";
  import type { NodeName } from "../../types/nodes";
  import HoverPreview from "../node/preview/HoverPreview.svelte";

  export let href: string | undefined = undefined;
  export let onClick: ((event: Event) => void) | undefined = undefined;
  export let newTab = false;
  export let underline = true;
  export let bold = false;
  export let decorated = false;
  export let big = false;
  export let omitBorder: 'left' | 'right' | 'top' | 'bottom' | undefined = undefined;
  export let showTooltipOnHover = true;
  export let tooltipShowDelay = 200;

  let linkNode: HTMLAnchorElement;
  let tooltipNode: HTMLSpanElement | undefined = undefined;
  let innerWidth: number;
  let innerHeight: number;

  // Start with a value outside the screen to avoid flickering
  let tooltipX: number = -1000;
  let tooltipY: number = -1000;

  // TODO: Show preview
  $: isNodeLink = !!href?.startsWith('/nodes');
  $: isRelativeLink = !!href?.startsWith('/');
  $: nodeName = isNodeLink 
    ? (href?.slice('/nodes'.length + 1)) as NodeName
    : undefined;

  $: tooltipText = isRelativeLink 
    ? `${$page.url.host}${href}`
    : href;

  let isHovered = false; 
  let showTooltip = false;

  let showTooltipDelayTimeout: NodeJS.Timeout | undefined;

  const clearTooltipDelayTimeout = () => {
    if(showTooltipDelayTimeout) {
      clearTimeout(showTooltipDelayTimeout);
      showTooltipDelayTimeout = undefined;
    }
  }

  const onMouseEnter = (event: MouseEvent) => {
    if(!linkNode || !showTooltipOnHover || !tooltipNode) return;

    const linkBoundingRect = linkNode.getBoundingClientRect();
    const tooltipBoundingRect = tooltipNode.getBoundingClientRect();

    const tooltipMargin = 5;

    tooltipX = clamp(
      linkBoundingRect.left + linkBoundingRect.width / 2 - tooltipBoundingRect?.width / 2,
      tooltipMargin, 
      innerWidth - tooltipBoundingRect.width - tooltipMargin
    );

    tooltipY = clamp(
      linkBoundingRect.top + linkBoundingRect.height,
      tooltipMargin, 
      innerHeight - tooltipBoundingRect.height - tooltipMargin
    );

    isHovered = true;
    clearTooltipDelayTimeout();

    showTooltipDelayTimeout = setTimeout(
      () => {
        showTooltip = true;
      }, 
      tooltipShowDelay
    );
  }

  const onMouseLeave = () => {
    isHovered = false;

    clearTooltipDelayTimeout();
    showTooltip = false;
  }
</script>

<svelte:window
  bind:innerWidth={innerWidth}
  bind:innerHeight={innerHeight}
/>

<a
  { href }
  bind:this={linkNode}
  on:click={onClick}
  target={newTab ? '_blank' : undefined}  
  rel={newTab ? 'noopener noreferrer' : undefined}
  class:underline
  class:bold
  class:decorated
  class:big
  class={'link ' + (omitBorder ? 'omit-' + omitBorder : '')}
  { ...$$restProps }
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  on:blur={onMouseLeave}
>
  <slot/>{#if showTooltipOnHover}
    <div 
      bind:this={tooltipNode}
      class="tooltip"
      class:showTooltip
      style:left="{tooltipX}px"
      style:top="{tooltipY}px"
      style:text-decoration="{!nodeName ? 'underline' : 'none'}"
    >
      { #if nodeName }
        <HoverPreview
          nodeName={nodeName} 
        />
      { :else }
        { tooltipText }
      {/if }
    </div> 
  { /if }
</a>

<style>
  .link {
    text-decoration: none;
    cursor: pointer;
    position: relative;
    z-index: inherit;
  }

  .link:hover {
    text-decoration: none;
  }

  .underline {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  .underline:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  .bold {
    font-family: var(--fBold);
  }

  .decorated {
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: var(--borderPrimary);

  }

  .omit-left {
    border-left: unset;
  }

  .omit-right {
    border-right: unset;
  }

  .omit-top {
    border-top: unset;
  }

  .omit-bottom {
    border-bottom: unset;
  }
  
  .decorated:hover {
    color: var(--cFgInverted);
  }

  .decorated:hover::before {
    content: '';
    background-color: var(--cBgInverted);
    box-shadow: var(--pillShadow);
  }

  .decorated::before {
    position: absolute;
    content: '';

    inset: 0;

    border-radius: var(--borderRadius1);
    outline: var(--borderPrimary);

    z-index: -1;

    transition: 0.3s;
  }

  .big {
    font-size: var(--fontSizeLarge);
  }

  .tooltip {
    position: fixed;
    display: block;

    max-width: calc(100vw - 2rem);

    z-index: 1000;

    padding: 0.3rem 0.6rem;
    background-color: var(--cBg);

    box-shadow: 
      var(--hoverShadow),
      2px 2px 5px var(--cFg);

    border: var(--borderPrimary);

    font-family: var(--fRegular);
    font-size: 1rem;
    line-height: 1rem;

    visibility: hidden;
    opacity: 0;
    transition: 0.3s opacity;
  }

  .showTooltip {
    visibility: visible;
    opacity: 1;
  }
</style>