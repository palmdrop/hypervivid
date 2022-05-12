
  <script lang="ts">
  </script>

  <div style="node">
    Scrolling all night
    {#each { length: 100 } as _, i (i) }
      <p>
        Another line
      </p>
    {/each}
  </div>

  <style>
    .node {
      overflow: scroll;
    }
  </style>
  