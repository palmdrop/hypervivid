<script lang="ts">
  import Scroller from './Scroller.svelte';
</script>

<div class="node">
  <div class="container">
    <Scroller 
      word="play"
      count={20}
      speed={-12000}
      distance="3em"
      elementMargin="1.0em"
      fontSize="1.0rem"
      minSize="70px"
    />
    <Scroller 
      word="space"
      count={4}
      speed={10000}
      elementMargin="8em"
      fontSize="1.4rem"
      distance="7em"
      minSize="300px"
    />
    <div class="overlay">
      <Scroller 
        word="flow"
        count={8}
        speed={85000}
        elementMargin="8em"
        fontSize="1.2rem"
        distance="6em"
        minSize="150px"
      />
      <Scroller 
        word="search"
        count={15}
        speed={35000}
        elementMargin="1em"
        fontSize="1.0rem"
        distance="7em"
        minSize="90px"
      />
    </div>
  </div>
</div>

<style>
  .node {
    --cBg: gray;
    background-color: var(--cBg);
    position: relative;
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  .container {
    position: relative;
    width: 100vw;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  .overlay {
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;

    pointer-events: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
