<script>
  import "../app.css";
</script>

<div class="max-w-screen-xl mx-auto">
  <slot />
</div>

<style lang="postcss">
:root {
  --foreground: theme('colors.cfc-purple.950');
  --background-start: theme('colors.cfc-purple.400');
  --background-end: theme('colors.cfc-purple.300');
  --background-image: url('svg/cfc-bg-stars-light.svg');
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground: theme('colors.cfc-purple.300');
    --background-start: theme('colors.cfc-purple.950');
    --background-end: theme('colors.cfc-purple.900');
    --background-image: url('svg/cfc-bg-stars-dark.svg');
  }
}

:global(html) {
  color: var(--foreground);
  background:
    linear-gradient(
      to bottom right,
      transparent,
      var(--background-end)
    ) 
    var(--background-start);
  background-image: var(--background-image),
    linear-gradient(
      to bottom right,
      transparent,
      var(--background-end)
    )  ;
  background-attachment: fixed;
}
</style>
