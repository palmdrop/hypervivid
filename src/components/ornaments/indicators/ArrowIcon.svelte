<script lang="ts">
  export let direction: 'right' | 'left' | 'down' | 'up' = 'right';
  export let transitionDuration: number = 400;
  export let strokeWidth = 1.2;
  export let size = '25px';
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
    margin-top: 0.07rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    margin-bottom: 0.02;
  }

  .right {
    transform: rotateZ(0);
  }

  .down {
    transform: rotateZ(90deg);
  }

  .left {
    transform: rotateZ(180deg);
  }

  .up {
    transform: rotateZ(270deg);
  }
</style>

