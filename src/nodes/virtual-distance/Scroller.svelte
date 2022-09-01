<script lang="ts">
  import LoopingScrollBanner from "../../components/ornaments/LoopingScrollBanner.svelte";

  export let count = 5;
  export let word = 'space';
  export let speed: number = -7000;
  export let elementMargin = "2em";
  export let fontSize = "1rem";
  export let minSize = "0px";

  export let distance: string = "3em";

</script>

<LoopingScrollBanner 
  hideOverflow={false}
  speed={Math.abs(speed)}
  reverseDirection={speed < 0}
>
  {#each { length: count } as _, i (i)}
    <div 
      class="entry"
      style="
        --dist: {distance};
        --width: calc(max(100vw / {count}, {minSize}));
        --margin: {elementMargin};
        --fontSize: {fontSize};
      "
    >
      { word }
    </div>
  {/each}
</LoopingScrollBanner>

<style>
  .entry {
    pointer-events: all;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #00000065;

    font-family: var(--fDisplay);
    font-size: var(--fontSize);

    width: var(--width);
    height: calc(var(--width) / 1.5);
    margin: var(--margin);

    border: 1px solid #30502013;
    background-color: var(--cBg);

    box-shadow: 
      0em var(--dist) calc(var(--dist) / 2.5) #20000038,
      0em calc(var(--dist) * 1.3) calc(var(--dist) / 2.0) #40700218,
      0em -0.1em 0.5em #ffdfdf28,
      0em 0.0em 2.0em #00000015
      ;
  }
</style>