<script>
	import { page } from '$app/stores';
  import HomepageLogo from '$lib/components/HomepageLogo.svelte';
</script>

<svelte:head>
  <title>{$page.error.message} | Cosmic Flowchart</title>
</svelte:head>

<div class="flex justify-center my-16">
  <a href="/"><HomepageLogo /></a>
</div>

<h1 class="text-6xl text-center my-4">{$page.status}: {$page.error.message}</h1>
