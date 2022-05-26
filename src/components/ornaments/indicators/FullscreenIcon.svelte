<script lang="ts">
  export let mode: 'open' | 'close';
  export let transitionDuration: number = 400;
  export let strokeWidth = 1.5;
  export let size: string = '30px';
</script>

<div
  class={mode}
  style="
    transition: {transitionDuration / 1000}s;
  "
>
  <svg 
    viewBox="0 0 101 101" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    stroke-width={strokeWidth}
    width={size}
    height={size}
  >
    <path 
      d="M0 0H101L99 2H0V0ZM100 101H0H100ZM0 101V1V101ZM101 0V101H99V2L101 0Z" fill="currentColor"
      vector-effect="non-scaling-stroke"
    />
    <path 
      d="M1 100L99 2" stroke="currentColor"
      vector-effect="non-scaling-stroke"
    />
    <path 
      d="M0 1.49512H24.5032C65.9245 1.49512 99.5031 35.0738 99.5031 76.4951V101" stroke="currentColor"
      vector-effect="non-scaling-stroke"
    />
  </svg>
</div>

<style>
  div {
    background-color: var(--cBg);
    padding: 0.4em 0.5em 0.25em 0.4em;

    border-radius: 5px;
  }

  .open {
    transform: rotateZ(0);
  }

  .close {
    transform: rotateZ(180deg);
  }
</style>