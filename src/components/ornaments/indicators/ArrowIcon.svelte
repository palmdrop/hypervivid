<script lang="ts">
  import Arrow1 from "./arrows/Arrow1.svelte";
  import Arrow2 from "./arrows/Arrow2.svelte";

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
  <Arrow1 
    { strokeWidth }
    { size }
  />
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

