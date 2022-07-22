<script lang="ts">
  import path from "path";
  export let imagePaths: string[];
  export let alts: string[] = [];
</script>

<div class="gallery">
  {#each imagePaths as path, i }
    <img 
      src={path}
      alt={
        alts.length < i ? alts[i] : ''
      }
    />
  {/each}
</div>

<style>
</style>
