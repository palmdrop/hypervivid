<script lang="ts">
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
</div>

<style>
  div {
    font-size: 1.7em;
    margin: 0.2em;
  }

  .right {
    transform: rotateZ(0);
    margin-top: -0.15em;
    margin-left: 0em;
  }

  .down {
    transform: rotateZ(90deg);
    margin-top: -0.05em;
    margin-left: -0.02em;
  }

  .left {
    transform: rotateZ(180deg);
    margin-top: -0.15px;
    margin-left: 0px;
  }

  .up {
    transform: rotateZ(270deg);
    margin-top: 0.1em;
    margin-left: 0.1em;
  }
</style>

