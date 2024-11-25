<script>
  import "../app.css";
</script>

<slot />

<style lang="postcss">
:root {
  --foreground: theme('colors.cfc-purple.950');
  --background-start: theme('colors.cfc-purple.100');
  --background-end: theme('colors.cfc-purple.50');
  --banner-foreground: theme('colors.cfc-purple.800');
  --banner-background-start: theme('colors.cfc-purple.200');
  --banner-background-end: theme('colors.cfc-purple.100');
  --banner-background-image: url('/svg/cfc-bg-stars-light.svg');
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground: theme('colors.white');
    --background-start: theme('colors.cfc-purple.900');
    --background-end: theme('colors.cfc-purple.950');
    --banner-foreground: theme('colors.cfc-purple.200');
    --banner-background-start: theme('colors.cfc-purple.800');
    --banner-background-end: theme('colors.cfc-purple.700');
    --banner-background-image: url('/svg/cfc-bg-stars-dark.svg');
  }
}
</style>

