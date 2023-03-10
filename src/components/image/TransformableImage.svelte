<script lang="ts">
  export let src: string;
  export let alt: string;

  export let scale: number | string = 1.0;
  export let translateX: number | string = 0.0;
  export let translateY: number | string = 0.0;
  export let translateZ: number | string = 0.0;

  export let transitionTime: string = '0.5s';

  export let containerWidth: number | undefined = undefined;
  export let containerHeight: number | undefined = undefined;
  export let imageWidth: number | undefined = undefined;
  export let imageHeight: number | undefined = undefined;

  export let wrapperStyles: string | undefined = undefined;
</script>

<div 
  class="wrapper"
  style="
    --container-width: {containerWidth};
    --container-height: {containerHeight};
    --transition-time: {transitionTime};

    --scale: {scale};
    --translate-x: {translateX};
    --translate-y: {translateY};
    --translate-z: {translateZ};

    {wrapperStyles ?? ""}
  "
>
  <img
    {src}
    {alt}
    width={imageWidth}
    height={imageHeight}
    {...$$restProps}
  />
</div>

<style>
  .wrapper {
    width: var(--container-width);
    height: var(--container-height);

    display: inline-block;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }

  img {
    vertical-align: middle;
    object-fit: cover;

    animation-fill-mode: forwards;

    transition: var(--transition-time);
    transform: translate3d(var(--translate-x), var(--translate-y), var(--translate-z)) scale(var(--scale));

    /*
    transition-timing-function: steps(10, jump-start);
    */
    transition-timing-function: ease-in-out;
  }
</style>