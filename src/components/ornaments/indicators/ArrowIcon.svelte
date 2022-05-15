<script lang="ts">
  export let direction: 'right' | 'left' | 'down' | 'up' = 'right';
</script>

<div
  class={direction}
>
  <!--➺-->
  <!--⇝-->
  ⤐
</div>

<style>
  div {
    transition: 0.5s;
    font-size: 2em;
  }

  .right {
    transform: rotateZ(0);
    margin-top: 3px;
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

