<script>
  import "../app.css";
  import HomepageLogo from '$lib/components/HomepageLogo.svelte';
  import Icon from '$lib/components/Icon.svelte';
  const { data } = $props();
</script>

<style lang="postcss">
:global(html) {
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

<svelte:head>
  <title>Cosmic Flowchart</title>
</svelte:head>

<div class="max-w-screen-xl mx-auto">
  <div class="flex justify-center my-16">
    <HomepageLogo />
  </div>

  <p class="text-6xl text-center my-4">
    Coming soon
  </p>

  <div class="flex justify-center my-8">
    {#each data.homepage.socialLinks as link}
    <a href={link.url} target="_blank" rel="nofollow me" aria-label={link.label} title={link.label}>
      <Icon iconName={link.iconName} class="w-24 h-24" />
    </a>
    {/each}
  </div>
</div>

