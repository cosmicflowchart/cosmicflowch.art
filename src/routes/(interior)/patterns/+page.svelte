<script>
	const pageTitle = 'Patterns';
	const pageDescription = 'List of crochet patterns';

	const { data } = $props();
	let { page, pageCount, pageSize } = $derived(data.meta.pagination);
	let minPage = $derived(Math.max(1, page - 2));
	let maxPage = $derived(Math.min(pageCount, page + 2));
	let pages = $derived(Array.from({ length: maxPage - minPage + 1 }, (_, i) => i + minPage));

	const pageBaseLink = `/patterns?pageSize=${pageSize}&page=`;
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
		{#each data.patterns as pattern}
			<div class="flex justify-center px-2 py-6 m-4 bg-cfc-purple-800 rounded-xl">
				<a href={`/patterns/${pattern.slug}`} data-sveltekit-preload-data="hover">
					<img
						class="mx-auto rounded-xl"
						height={200}
						width={(pattern.images[0].width * 200) / pattern.images[0].height}
						src={pattern.images[0].formats.thumbnail.url}
						alt={pattern.images[0].alt}
					/>
					<p class="text-2xl text-center mt-4">{pattern.title}</p>
				</a>
			</div>
		{/each}
	</div>
</div>
