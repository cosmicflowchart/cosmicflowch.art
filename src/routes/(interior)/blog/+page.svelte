<script>
	import Icon from '$lib/components/Icon.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import PageLinks from '$lib/components/PageLinks.svelte';
	import PostLink from '$lib/components/PostLink.svelte';

	const { data } = $props();
	let { page, pageCount, pageSize } = $derived(data.meta.pagination);
</script>

<svelte:head>
	<MetaTags
		title="Blog"
		description="A craft blog about the crochet items I make and the events I sell them at."
	/>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="RSS feed for the Cosmic Flowchart Blog"
		href="blog/rss.xml"
	/>
</svelte:head>

<div class="max-w-screen-xl mx-auto px-4">
	<div class="flex justify-center items-center space-x-4">
		<h1 class="text-6xl text-center my-4">Blog</h1>
		<a href="blog/rss.xml" aria-label="RSS Feed">
			<Icon iconName="rss" class="w-8 h-8" />
		</a>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
		{#each data.posts as post (post.slug)}
			<div
				class="flex justify-center px-4 py-6 m-4 bg-cfc-purple-700/25
			rounded-xl"
			>
				<PostLink href={`/blog/${post.slug}`} {post} showDescription={true} showCreatedAt={true} />
			</div>
		{/each}
	</div>

	<PageLinks {page} {pageCount} {pageSize} pageRoute="patterns" />
</div>
