<script>
  import Logo from '$lib/components/BannerLogo.svelte';

  let { children } = $props();
  let showMenu = $state(false);

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<style lang="postcss">
div#content {
  color: var(--foreground);
  background:
    var(--background-start)
    linear-gradient(
      to bottom right,
      transparent,
      var(--background-end)
    );
}

nav a {
  @apply text-cfc-purple-200;
  @apply hover:text-cfc-purple-400;
  @apply focus:outline-none;
  @apply focus:text-cfc-purple-400;
}
</style>

<div id="banner" class="w-full">
  <nav class="container px-2 py-2 md:px-4 md:py-8 mx-auto md:flex md:justify-between md:items-center">
    <div class="flex items-center items-end justify-center">
      <div class="flex flex-1 justify-center items-center">
        <a href="/" data-sveltekit-preload-data="off" class="mx-auto md:mx-0">
          <Logo class="h-24 w-32"/>
        </a>
        <a class="hidden lg:block mx-2 text-4xl xl:text-5xl font-potra" href="/" data-sveltekit-preload-data="off">
          Cosmic&nbsp;Flowchart
        </a>
      </div>
      
      <!-- Mobile menu button -->
      <div class="flex justify-end md:hidden">
        <button onclick={toggleNavbar} aria-label="{showMenu ? 'Close Menu' : 'Open Menu'}" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div
      class="flex-col my-2 space-y-4 items-center md:flex md:space-y-0 md:flex-row md:space-x-10 md:mt-0"
      class:flex={showMenu}
      class:hidden={!showMenu}
    >
      <a class="text-3xl font-bold" href="/projects">Projects</a>
      <a class="text-3xl font-bold" href="/patterns">Patterns</a>
      <a class="text-3xl font-bold" href="/blog">Blog</a>
    </div>
  </nav>
</div>

<div id="content" class="w-full min-h-screen mt-0 py-4">
  <div class="max-w-screen-xl mx-auto">
    {@render children()}
  </div>
</div>
