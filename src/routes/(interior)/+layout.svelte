<div class="max-w-screen-xl mx-auto">
  <slot />
</div>

<style lang="postcss">
:global(html) {
  color: var(--foreground);
  background:
    var(--background-start)
    linear-gradient(
      to bottom right,
      transparent,
      var(--background-end)
    );
  background-attachment: fixed;
}
</style>
