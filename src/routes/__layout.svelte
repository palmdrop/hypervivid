<script lang="ts">
	import { fade, blur } from 'svelte/transition';
  import { title$ } from '$stores/head';
  import { loading } from '$stores/loading';
  import { navigating } from '$app/stores';
  import { onMount } from 'svelte';

  import '../global.css';
  import '../fonts.css';
  import '../theme.css';
  import { isExternalURL } from '../utils/general';
import { Loader } from 'three';
import StarLoader from '../components/ornaments/loaders/StarLoader.svelte';

  $: $loading = (
    !!$navigating &&
    !isExternalURL($navigating.to)
  );


  let mounted = false;

  onMount(() => {
    /*
      Override default addEventListener function to block instagram/facebook/meta from injecting selection listeners.
      Please read more at https://krausefx.com/blog/ios-privacy-instagram-and-facebook-can-track-anything-you-do-on-any-website-in-their-in-app-browser
    */
    const addEventListener = document.addEventListener;
    const newAddEventListener: typeof addEventListener = function (this: any, _, listener) {
      if (listener.toString().indexOf("messageHandlers.fb_getSelection") > -1) {
        return null;
      }

      return addEventListener.apply(this, arguments as any);
    }

    document.addEventListener = newAddEventListener;

    mounted = true;
  });
</script>

<svelte:head>
  <title>
    { $title$ }
  </title>
</svelte:head>

{#if !mounted}
  <div 
    class="loading"
    transition:fade={{
      duration: 100
    }}
  >
    <StarLoader />
  </div>
{/if}
<slot />

{@html `<!-- 
  These spans are inserted to trick instagram/facebook/meta to not inject tracking scripts on the page.
  Please read more at https://krausefx.com/blog/ios-privacy-instagram-and-facebook-can-track-anything-you-do-on-any-website-in-their-in-app-browser
-->`}
<span id="iab-pcm-sdk" />
<span id="iab-autofill-sdk" />

<style>
  .loading {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: var(--cBg);

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>