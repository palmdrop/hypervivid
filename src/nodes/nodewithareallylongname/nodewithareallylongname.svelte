
  <script lang="ts">
    import { getNodeContext } from '$utils/useNodeContext';
    const { name, metadata } = getNodeContext('nodewithareallylongname');

  </script>

  <div>
    { name }
  </div>

  <style>
  </style>
  