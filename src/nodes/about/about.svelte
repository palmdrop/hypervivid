
  <script lang="ts">
    import { getNodeContext } from '$utils/useNodeContext';
    const { name, metadata } = getNodeContext('about');

  </script>

  <div>
    { name }
  </div>

  <style>
  </style>
  