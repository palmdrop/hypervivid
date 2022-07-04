<div class="container">
  {#each { length: 9 } as _, i (i)}
    <div
      class="sphere"
      style="
        width: {200 - i * 25}px;
        height: {200 - i * 25}px;
        left: {i * i * 4}px;
      "
    />
  {/each}
</div>

<style>
  .container {
    position: relative;
    left: -100px;
    height: 200px;
  }

  .sphere {
    box-sizing: border-box;

    position: absolute;
    width: 100px;
    height: 100px;

    background: #0C2631;
    box-shadow: 0px 4px 4px rgba(37, 1, 1, 0.21), inset 0px -10px 20px #24183E, inset 0px 10px 20px rgba(255, 255, 255, 0.93);
    border-radius: 100%;
  }
</style>