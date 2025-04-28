<script>
	import PageLinks from '$lib/components/PageLinks.svelte';
	import PostLink from '$lib/components/PostLink.svelte';

	const pageTitle = 'Blog';
	const pageDescription =
		'A craft blog about the crochet items I make and the events I sell them at.';

	const { data } = $props();
	let { page, pageCount, pageSize } = $derived(data.meta.pagination);
</script>

<svelte:head>
	<title>{pageTitle} | Cosmic Flowchart</title>
	<meta name="description" content={pageDescription} />
	<meta name="og:description" content={pageDescription} />
	<meta name="og:title" content="{pageTitle} | Cosmic Flowchart" />
	<meta name="og:locale" content="en_US" />
</svelte:head>

<div class="max-w-screen-xl mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{pageTitle}</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		{#each data.posts as post}
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
