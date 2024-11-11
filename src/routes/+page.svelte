<script>
  import Icon from '$lib/components/Icon.svelte';
  const { data } = $props();
</script>


<h1 class="font-potra text-center text-9xl mt-16 mb-4">
  Cosmic Flowchart
</h1>

<p class="font-elliptica-bold text-6xl text-center my-4">
  Coming soon
</p>

<div class="flex justify-center my-8">
  {#each data.homepage.socialLinks as link}
  <a href={link.url} target="_blank" rel="nofollow me" aria-label={link.label} title={link.label}>
    <Icon iconName={link.iconName} class="w-24 h-24" />
  </a>
  {/each}
</div>
