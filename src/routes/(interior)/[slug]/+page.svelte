<script>
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import RichText from '$lib/components/RichText.svelte';

	const { data } = $props();
	const { page } = data;

	const createdDate = new Date(page.createdAt).toLocaleDateString('en-SE', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
	const updatedDate = new Date(page.updatedAt).toLocaleDateString('en-SE', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<svelte:head>
	<MetaTags title={page.title} description={page.shortDescription} image={page.image} />
</svelte:head>

<div class="max-w-screen-lg mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{page.title}</h1>
	{#each page.content as block}
		<ContentBlock {block} />
	{/each}
</div>
