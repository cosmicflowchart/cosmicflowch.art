<script>
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';

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
	<MetaTags title={post.title} description={post.shortDescription} image={post.image} />
	<link
		rel="alternate"
		type="application/atom+xml"
		title="Atom feed for the Cosmic Flowchart Blog"
		href="blog/feed.atom"
	/>
</svelte:head>

<div class="max-w-screen-lg mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{post.title}</h1>
	<p class="text-md text-center italic">
		{createdDate}
		{#if updatedDate > createdDate}
			(Edited: {updatedDate})
		{/if}
	</p>

	{#each post.content as block}
		<ContentBlock {block} />
	{/each}
</div>
