<script lang="ts">
  export let speed = 3000;
  export let reverseDirection = false;
  export let hideOverflow = true;
  export let style = "";
</script>

<div 
  class="banner"
  style="
    --speed: {speed / 1000}s;
    {style};
  "
  class:hideOverflow
  class:reverseDirection
>
  <div class="section">
    <slot />
  </div>
  <div class="section">
    <slot />
  </div>
</div>

<style>
  .banner {
    display: flex;
    flex-direction: row;

    width: 100%;
    position: relative;
  }

  .hideOverflow {
    overflow: hidden;
  }

  .section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    position: relative;
    animation: marquee var(--speed) linear infinite;
  }

  .reverseDirection > .section {
    animation-direction: reverse;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>