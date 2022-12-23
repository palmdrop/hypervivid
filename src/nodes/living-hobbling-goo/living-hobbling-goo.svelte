
<script lang="ts">
	import type { EncodedProgram } from './../../modules/substrates/src/stores/programStore';
	import ProgramRenderer from './../../modules/substrates/src/components/substrate/ProgramRenderer.svelte';

  import program1 from '../../assets/programs/foliage-grids/foliage-grid12.json';
  import program2 from '../../assets/programs/foliage-grids/foliage-grid11.json';
  import program3 from '../../assets/programs/foliage-grids/foliage-grid4.json';
  import g1 from '../../assets/pieces/living-hobbling-goo/fuse1.gif';
  import g2 from '../../assets/pieces/living-hobbling-goo/fuse2.gif';
  import g3 from '../../assets/pieces/living-hobbling-goo/fuse3.gif';
  import g4 from '../../assets/pieces/living-hobbling-goo/fuse4.gif';
  import g5 from '../../assets/pieces/living-hobbling-goo/fuse5.gif';
  import g6 from '../../assets/pieces/living-hobbling-goo/fuse6.gif';

  const pickRandom = <T>(array: T[], numberOfElements: number) => {
    return [...array]
      .sort(() => 0.5 - Math.random()) // This is fine since the array is so small
      .slice(0, numberOfElements);
  }

  const pickableGifs = [
    g1, g2, g3, g4, g5, g6
  ];

  const pickablePrograms = [
    program2, program3
  ] as unknown as EncodedProgram[];

  const chosenGifs = pickRandom(pickableGifs, 3);
  const chosenPrograms = [
    program1, 
    ...pickRandom(pickablePrograms, 3)
  ] as EncodedProgram[];
</script>

<main>
  <div class="wrapper">
    <div class="text">
      <p>
        ugly disgusting writhing
      </p>
      <p>
        loveful things, living goo
      </p>
      <p>
        hobbling pointlessly in
      </p>
      <p>
        mushy consolidation soup
      </p>
    </div>
    <!--
    <div class="title">
      UGLY DISGUSTING WRITHING LOVEFUL LIVING THINGS
    </div>
    <canvas 
      class="background"
      use:onBackgroundMount
    />
    -->
    <div class="container">
      { #each chosenPrograms as program, i (i) }
        <div 
          class="splice splice{i + 1}"
        >
          <ProgramRenderer 
            programData={program}
          />
        </div>
      { /each }
      { #each chosenGifs as gif, i (i) }
        <img 
          src={gif} 
          alt=""
          class="splice gif bottom{i + 1}"
        />
      { /each }
    </div>
  </div>
</main>

<style>
  main {
    --border: 1px solid rgb(75, 76, 72);
    --grid-size: 15px;
    --grid-offset: calc(var(--grid-size) * -0.5 + 1);

    position: relative;

    width: 100%;
    height: 100vh;
    background-color: rgb(139, 138, 134);

    margin: 0;
    padding-top: 1em;
  }

  .wrapper {
    position: relative;

    /*
    NICE UGLY COLOR
    background-color: rgb(77, 69, 4);
    */
    background-color: rgb(183, 190, 182);
    background-image: radial-gradient(rgb(15, 20, 8) 1px, transparent 0);
    background-size: var(--grid-size) var(--grid-size);
    background-position: var(--grid-offset) var(--grid-offset);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: var(--border);
    margin: 0em 1em;
    
    width: calc(100vw - 2em);
    min-height: calc(100vh - 2em);
  }

  .title {
    position: fixed;
    font-family: monospace;
    z-index: 10000;
    color: rgb(159, 238, 23);
    font-size: clamp(2rem, 10vw, 10rem);

    text-align: center;
    font-style: italic;

    max-width: 1500px;
    opacity: 0;

  }

  .title:hover {
    opacity: 0;
  }

  .text {
    position: absolute;
    top: 25%;
    left: 5%;
    z-index: 2;

    background-color: transparent;
    color: greenyellow;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.891);

    font-family: monospace;
    font-style: italic;

    font-size: clamp(0.7rem, 3vw, 1.2rem);
  }

  .text p {
    padding-bottom: 0.5em;
  }

  .container {
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, auto);
    grid-template-areas: 
    /*
      "main main bottom1"
      "main main bottom2"
      "top1 top2 bottom3"
      ;
      */
      "top1 top1 top1 top2 top2 top2"
      "main main main main main main"
      "main main main main main main"
      "bottom1 bottom1 bottom2 bottom2 bottom3 bottom3"
      ;

    border-right: var(--border);
    border-bottom: var(--border);

    margin: 1em;

    max-width: 1000px;
    max-height: 90vh;
    aspect-ratio: 3/3.965;
  }

  .splice {
    padding: 0.4rem;
    border-left: var(--border);
    border-top: var(--border);

    width: 100%;
    height: 100%;
  }

  .splice1 {
    grid-area: main;
    aspect-ratio: 4/3;
  }

  .splice2 {
    grid-area: top1;
  }

  .splice3 {
    grid-area: top2;
  }

  .splice2, .splice3 {
    aspect-ratio: 3/2;
  }

  .gif {
    object-fit: cover;
    max-width: 100%;
    filter: brightness(1.3) saturate(0.8);
  }

  .bottom1 {
    grid-area: bottom1;
  }

  .bottom2 {
    grid-area: bottom2;
  }

  .bottom3 {
    grid-area: bottom3;
  }
</style>
