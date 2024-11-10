<script>
  import Instagram from '$lib/components/icons/Instagram.svelte';
  import Mastodon from '$lib/components/icons/Mastodon.svelte';

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/cosmicflowch.art/'
  },
    {
      icon: Mastodon,
      name: 'Mastodon',
      url: 'https://dice.camp/@cosflo'
    }
  ]
</script>


<h1 class="font-potra text-center text-9xl mt-16 mb-4">
  Cosmic Flowchart
</h1>

<p class="font-elliptica-bold text-6xl text-center my-4">
  Coming soon
</p>

<div class="flex justify-center my-8">
  {#each socialLinks as link}
  <a href={link.url} target="_blank" rel="nofollow me" aria-label={link.name} title={link.name}>
    <svelte:component this={link.icon} class="w-24 h-24" />
  </a>
  {/each}
</div>
