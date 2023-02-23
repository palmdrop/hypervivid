<script lang="ts">
  import * as THREE from 'three';
  import { onMount } from "svelte";
  import type { EncodedProgram } from "../../modules/substrates/src/stores/programStore";
  import MultiProgramRenderer from '../../modules/substrates/src/components/substrate/MultiProgramRenderer.svelte';
  
  const programs = Object.values(
    import.meta.glob('../../assets/programs/breath-crunch/*.json', { eager: true })
  ).map((entry) => (entry as { default: EncodedProgram }).default);

  // TODO: mouse-like thing wandering around the page, leaving trails
  // NOTE: follows the mouse if it's moving, wanders freely otherwise
  // TODO: figure out how to use css animations to animate mouse movement!
  // TODO: draw jagged lines that persist, but fade, in the background

  const phrases = [
    "breathe like this",
    "this is my culture",
    "hyper-meditation",
    "rage breathing",
    "consider the breath",
    "imagine red fields",
    "along these lines",
    "noise-cancelling oxygene",
    "irrational breathing",
    "seething exercise",
    "unproductive breathing",
    "breath puke",
    "don't hold it",
    "decontrol",
    "catharsis stimulator",
    "supersensorium",
    "becoming slime mold",
    "sophisticated decadence",
    "alternative breathing",
    "culture void-fill",
    "lung-crunch",
    "slacking ritual"
  ];

  const minSwitchDelay = 15000;
  const maxSwitchDelay = 30000;

  let programIndex: number = 0;
  let phraseIndex: number = 0;
  const time = THREE.MathUtils.randFloat(300, 10000);
  let loading: boolean;

  onMount(() => {
    let timeout: NodeJS.Timeout;

    const getNewIndex = (previous: number, min: number, max: number) => {
      let newIndex = previous;
      while(newIndex === previous) {
        newIndex = Math.floor(THREE.MathUtils.randFloat(min, max));
      }

      return newIndex;
    }

    const updateIndex = () => {
      programIndex = getNewIndex(programIndex, 0, programs.length);
      phraseIndex = getNewIndex(phraseIndex, 0, phrases.length);

      timeout = setTimeout(() => {
        updateIndex();
      }, THREE.MathUtils.randFloat(minSwitchDelay, maxSwitchDelay));
    }

    updateIndex();

    return () => {
      clearInterval(timeout);
    }
  });
</script>

<div class="node">
  <div class="wrapper">
    <div class="container">
      <MultiProgramRenderer
        programsData={programs}
        index={programIndex}
        scale={currentScale => (1 + THREE.MathUtils.randFloatSpread(0.5)) * currentScale}
        uniformOverrides={{
          time
        }}
        style="
          width: calc(100vw - 2em);
          max-width: 800px;

          height: calc(100vh - 2em);
          max-height: 1200px;
        "
        bind:loading
      />
    </div>
  </div>
  { #if loading }
    <p class="loading">
      [loading]
    </p>
  { :else }
  <div class="phrases">
    <ul>
      {#each phrases as phrase, i (phrase)}
        <li class:active={i === phraseIndex}>
          { phrase }
        </li>
      {/each}
    </ul>
    <h1>
      { phrases[phraseIndex] }
    </h1>
  </div>
  {/if }
</div>

<style>
  .node {
    --background: rgb(129, 130, 119);
    --foreground: rgb(204, 214, 171);
    --highlight: var(--foreground);
    --emphasis: rgb(204, 255, 0);
    --grid-color: rgb(164, 165, 162);

    --grid-size: 5px;
    --grid-offset: calc(var(--grid-size) / 2);

    --border-shadow: 
      0px 0px 0px 1px var(--highlight),
      0px 0px 0px 5px var(--background),
      0px 0px 0px 6px var(--highlight),
      0px 0px 0px 10px var(--background),
      0px 0px 0px 11px var(--highlight);

    --text-shadow: 
      0.03em 0.03em 0.1em var(--background),
      -0.03em -0.03em 0.1em var(--background);

    width: 100%;
    height: 100vh;
    background-color: var(--background);

    background-image: radial-gradient(var(--grid-color) 1px, transparent 0);
    background-size: var(--grid-size) var(--grid-size);
    background-position: var(--grid-offset) var(--grid-offset);

    font-size: 16px;
  }

  .wrapper {
    position: relative;
    display: flex;

    width: 100vw;
    height: 100vh;

    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .container {
    box-shadow: var(--border-shadow);
  }

  .phrases {
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    bottom: 1.3em;
    padding-right: 2.0em;

    color: var(--foreground);

    text-align: right;
  }

  .phrases ul {
    font-family: SyneItalic;
    font-size: clamp(1.0em, 3vw, 1.5em);

    letter-spacing: -0.13em;
    line-height: 0.5em;
  }

  .phrases li {
    color: var(--foreground);
    text-shadow: var(--text-shadow);
    transition: 0.5s;
  }

  .phrases li.active {
    color: var(--emphasis);
    text-shadow: 0px 0px 0.6em var(--emphasis);
  }

  h1 {
    font-size: clamp(2.2em, 8vw, 5em);
    text-shadow: var(--text-shadow);

    font-family: SyneMono;
    letter-spacing: -0.15em;
    line-height: 0.5em;

    padding-right: 0.08em;
    padding-bottom: 0.2em;
  }

  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
