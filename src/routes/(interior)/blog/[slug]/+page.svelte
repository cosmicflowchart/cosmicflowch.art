<script>
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import RichText from '$lib/components/RichText.svelte';

	const { data } = $props();
	const { post } = data;

	const createdDate = new Date(post.createdAt).toLocaleDateString('en-SE', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
	const updatedDate = new Date(post.updatedAt).toLocaleDateString('en-SE', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<svelte:head>
	<title>{post.title} | Cosmic Flowchart</title>
	<meta name="description" content={post.shortDescription} />
	<meta name="og:description" content={post.shortDescription} />
	<meta name="og:title" content="{post.title} | Cosmic Flowchart" />
	<meta name="og:locale" content="en_US" />
	{#if post.image}
		<meta name="og:image" content={post.image.url} />
	{/if}
</svelte:head>

<div class="max-w-screen-lg mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{post.title}</h1>
	<p class="text-md text-center italic">
		{createdDate}
		{#if updatedDate > createdDate}
			(Edited: {updatedDate})
		{/if}
	</p>
	<RichText richText={post.description} />

	{#each post.content as block}
		<ContentBlock {block} />
	{/each}
</div>
