<script lang="ts">
  import Arrow1 from "../icons/Arrow1.svelte";

  export let direction: 'right' | 'left' | 'down' | 'up' = 'right';
  export let transitionDuration: number = 400;
  export let strokeWidth = 1.2;
  export let size = 25;
</script>

<div
  class={direction}
  style="
    transition: {transitionDuration / 1000}s;
  "
>
  <!--➺-->
  <!--⇝-->
  <!--⤐-->
  <!--ᐅ-->
  <svg 
    width={size}
    height={size}
    viewBox="0 0 75 88" 
    stroke-width={`${strokeWidth}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      vector-effect="non-scaling-stroke"
      d="M0.5 1.56476L74 44L0.5 86.4352V1.56476Z" 
      stroke="currentColor"
    />
  </svg>

  <!--
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25.5 7.56476L99 50L25.5 92.4352V7.56476Z" stroke="black"/>
  <path d="M84.75 58.2272L39.75 84.208C33.4167 87.8646 25.5 83.2939 25.5 75.9808V24.0192C25.5 16.7061 33.4167 12.1354 39.75 15.792L84.75 41.7728C91.0833 45.4293 91.0833 54.5707 84.75 58.2272Z" stroke="black"/>
  </svg>
  -->
</div>

<style>
  div {
    font-size: 1.7em;
    margin: 0.2em;
  }

  .right {
    transform: rotateZ(0);
    margin-top: -2px;
    margin-left: 0px;
  }

  .down {
    transform: rotateZ(90deg);
    margin-top: -1px;
    margin-left: -2px;
  }

  .left {
    transform: rotateZ(180deg);
    margin-top: -3px;
    margin-left: 0px;
  }

  .up {
    transform: rotateZ(270deg);
    margin-top: 2px;
    margin-left: 2px;
  }
</style>

