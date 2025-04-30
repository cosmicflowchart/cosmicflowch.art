<script>
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
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

	const defaultImageHeight = 400;
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
		{#if block.__component === 'content.text-block'}
			<RichText heading2Class="text-4xl my-4" richText={block.text} />
		{:else if block.__component === 'content.image'}
			<div class="flex flex-wrap justify-center px-4">
				<div class="p-4">
					<img
						class="rounded-xl"
						height={block.height || defaultImageHeight}
						width={block.width ||
							(block.image.width * (block.height || defaultImageHeight)) / block.image.height}
						src={block.image.url}
						alt={block.image.alternativeText}
					/>
				</div>
			</div>
		{:else if block.__component === 'content.image-carousel'}
			<div class="flex justify-center py-4">
				<ImageCarousel images={block.images} width={block.width || defaultImageHeight} />
			</div>
		{/if}
	{/each}
</div>
