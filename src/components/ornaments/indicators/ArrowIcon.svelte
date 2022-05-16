<script lang="ts">
  export let direction: 'right' | 'left' | 'down' | 'up' = 'right';
  export let transitionDuration: number = 400;
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
  ᐅ
</div>

<style>
  div {
    font-size: 1.7em;
    margin: 0.2em;
  }

  .right {
    transform: rotateZ(0);
    margin-top: 4px;
    margin-left: 0px;
  }

  .down {
    transform: rotateZ(90deg);
    margin-top: -2px;
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

