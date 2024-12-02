<script>
  import "../app.css";
  const { children, data } = $props();  
</script>

<svelte:head>
  {#if data.goatCounter.scriptUrl && data.goatCounter.websiteUrl}
    <script data-goatcounter="{data.goatCounter.websiteUrl}"
        async src="{data.goatCounter.scriptUrl}"></script>
  {/if}
</svelte:head>

{@render children()}

<style lang="postcss">
:root {
  --foreground: theme('colors.white');
  --background-start: theme('colors.cfc-purple.900');
  --background-end: theme('colors.cfc-purple.950');
  --banner-foreground: theme('colors.cfc-purple.200');
  --banner-background-start: theme('colors.cfc-purple.800');
  --banner-background-end: theme('colors.cfc-purple.700');
  --banner-background-image: url('/svg/cfc-bg-stars-dark.svg');
}

:global(body) {
  color: var(--banner-foreground);
  background:
    linear-gradient(
      to bottom right,
      transparent,
      var(--banner-background-end)
    ) 
    var(--banner-background-start);
  background-attachment: fixed;
  background-image: var(--banner-background-image),
    linear-gradient(
      to bottom right,
      transparent,
      var(--banner-background-end)
    );
}
</style>

