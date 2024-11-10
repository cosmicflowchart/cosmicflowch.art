<script>
  import "../app.css";
</script>

<div class="max-w-screen-xl mx-auto">
  <slot />
</div>

<style lang="postcss">
:root {
  --foreground: theme('colors.cfc-purple.900');
  --background-start: theme('colors.cfc-purple.300');
  --background-end: theme('colors.cfc-purple.400');
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground: theme('colors.cfc-purple.300');
    --background-start: theme('colors.cfc-purple.950');
    --background-end: theme('colors.cfc-purple.700');
  }
}

:global(html) {
  color: var(--foreground);
  background: linear-gradient(
      to bottom right,
      var(--background-start),
      var(--background-end)
    );
  background-attachment: fixed;
}
</style>
