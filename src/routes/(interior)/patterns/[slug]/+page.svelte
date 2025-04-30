<script>
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';

	const { data } = $props();
	const { pattern } = data;
</script>

<svelte:head>
	<MetaTags title={pattern.title} description={pattern.shortDescription} image={pattern.image} />
</svelte:head>

<div class="max-w-screen-lg mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{pattern.title}</h1>

	{#each pattern.content as block}
		<ContentBlock {block} />
	{/each}
</div>
