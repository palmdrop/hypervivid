<script lang="ts">
	import p5 from 'p5';
	import { sketch } from '../../modules/living-drone/src/living-drone/sketch';
	import { settings } from '../../modules/living-drone/src/living-drone/settings';
  import { onDestroy } from 'svelte';
  import ExternalLink from '$components/common/ExternalLink.svelte';

  const backgroundColor = settings.rendererSettings.colors.background;

  let p: p5;
  const useSketch = (element: HTMLDivElement) => {
    p = new p5(sketch, element);
  }

  onDestroy(() => {
    p?.remove();
  });
</script>

<div 
  class="container"
  style="
    --backgroundColor: rgb({backgroundColor.r}, {backgroundColor.g}, {backgroundColor.b});
  "
>
  <article>
    <h1>
      Living Drone for <ExternalLink href="https://fveld.com">fveld</ExternalLink>
    </h1>
    <p>
      I made a generative art piece as a background animation for the fveld record label.
    </p>
    <p>
      The amazing living drone project is dedicated to living, collaborative and generative music. The people at fveld were a joy to work with.
    </p>
    <p>
      <ExternalLink href="https://fveld.com/living-drone">
        Visit, listen.
      </ExternalLink>
    </p>
  </article>
  <div use:useSketch />
</div>

<style>
  .container {
    overflow: hidden;
    height: 100%;
  }

  article {
    position: absolute;
    top: 1em;
    left: 0em;

    padding: 1.5em;
    margin: 1em;

    width: 500px;
    max-width: calc(100vw - 2em);

    text-align: left;

    border: var(--borderPrimary);

    background-color: var(--backgroundColor);
  }

  h1 {
    font-size: 2rem;
    text-align: left;
  }

  p {
    padding-bottom: 1.0em;
  }
</style>
