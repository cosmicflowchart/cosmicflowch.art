<script>
  import Navbar from '$lib/components/NavBar.svelte';
  let { children } = $props();
</script>

<header class="w-full">
  <Navbar />
</header>

<main class="w-full min-h-screen mt-0 py-4">
  <div class="max-w-screen-xl mx-auto">
    {@render children()}
  </div>
</main>

<style lang="postcss">
main {
  color: var(--foreground);
  background:
    var(--background-start)
    linear-gradient(
      to bottom right,
      transparent,
      var(--background-end)
    );
}
</style>
