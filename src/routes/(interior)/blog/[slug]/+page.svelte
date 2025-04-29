<script>
	import RichText from '$lib/components/RichText.svelte';
	import { text } from '@sveltejs/kit';
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
		<meta name="og:image" content={post.image.formats.thumbnail.url} />
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
		{#if block.__component === 'content.text-block'}
			<RichText heading2Class="text-4xl my-4" richText={block.text} />
		{:else if block.__component === 'content.image'}
			{#each block.images as image}
				<div class="flex flex-wrap justify-center px-4">
					<div class="p-4">
						<img
							class="rounded-xl"
							height={400}
							width={(image.width * 400) / image.height}
							src={image.url}
							alt={image.alternativeText}
						/>
					</div>
				</div>
			{/each}
		{/if}
	{/each}
</div>
