<script lang="ts">
  export let size: string | number = 100;
  export let fadeIn = false;
</script>

<svg 
  class:fadeIn
  width={size} 
  height={size} 
  viewBox="0 0 101 101" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    d="M50.4482 0.961426L52.5274 41.18L70.7851 5.28415L56.3261 42.8713L87.6055 17.5049L59.1085 45.9614L98.0011 35.5106L60.3935 49.9161L100.174 56.1879L59.9588 54.0516L93.7495 75.9614L57.8797 57.6527L79.8375 91.4123L54.5156 60.0969L60.8438 99.8688L50.4482 60.9614L40.0527 99.8688L46.3809 60.0969L21.059 91.4123L43.0168 57.6527L7.14697 75.9614L40.9377 54.0516L0.722149 56.1879L40.503 49.9161L2.89542 35.5106L41.788 45.9614L13.291 17.5049L44.5704 42.8713L30.1114 5.28415L48.3691 41.18L50.4482 0.961426Z" 
    fill="currentColor"
  />
</svg>

<style>
  svg {
    animation: spin 10s infinite linear;
    color: var(--cLoader);
  }

  .fadeIn {
    opacity: 0;
    animation: 
      spin 10s infinite linear,
      0.5s ease-in-out 0.3s 1 fadeIn;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>