<script lang="ts">
  import { random } from '$utils/random';
  import Grass from '../svg/Grass.svelte';

</script>

<div class="container">
{#each { length: Math.floor(random(20, 30)) } as _, i (i)}
  <div
    class="grass-container"
    style="
      transform: 
        scale({(() => {
          const n = random(0.3, 0.8);
          return `${Math.random() > 0.5 ? n : -n}, ${n}`
        })()}) 
        translateY(100%)
        rotate({random(-10, 10)}deg)
        translateX({random(-30, 30)}px)
        translateY(-100%)
      ;
    "
  >
    <Grass />
    <div class="sphere" />
  </div>
{/each}
</div>

<style>
  .container {
    position: relative;
    height: 1050px;
    top: -170px;
    left: -100px;
  }

  .grass-container {
    position: absolute;
  }

  .sphere {
    --color: #ffffff;
    --color2: rgba(255, 255, 255, 0.214);

    position: relative;
    width: 250px;
    height: 250px;
    background: radial-gradient(var(--color), var(--color2));
    border-radius: 100%;

    box-shadow: 0px 0px 100px var(--color);
    
    top: -150px;
    left: -50px;
  }
</style>