<script lang="ts" context="module">
  export type MovingImage = {
    x: number,
    y: number,
    scale: number,
    url: string,
    transitionTime: number
  };
</script>

<script lang="ts">
  import TransformableImage from "./TransformableImage.svelte";
  export let data: MovingImage;

  export let width: number | undefined = undefined;
  export let height: number | undefined = undefined;
  export let alt: string;

  export let wrapperStyle: string | undefined = undefined;
</script>

<TransformableImage 
  src={data.url} 
  alt={alt}
  width={width}
  height={height}
  scale={data.scale}
  translateX={`${data.x}%`}
  translateY={`${data.y}%`}
  transitionTime="{data.transitionTime / 1000}s"
  wrapperStyles={wrapperStyle}
  {...$$restProps}
/>

<style>
</style>
