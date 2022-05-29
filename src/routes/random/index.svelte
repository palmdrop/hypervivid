<script lang="ts" context="module">
  import metadata from "$nodes/metadata";

  const nodeNames = Object.keys(metadata.nodes);

  export async function load () {
    const node = nodeNames[Math.floor(Math.random() * nodeNames.length)];

    return {
      status: 302,
      redirect: `/nodes/${node}`
    };
  }
</script>

<main>
</main>

<style>
</style>
