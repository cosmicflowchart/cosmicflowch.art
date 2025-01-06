<script>
	const pageTitle = 'Projects';
	const pageDescription = 'List of my crochet projects';

	const { data } = $props();
	let { page, pageCount, pageSize } = $derived(data.meta.pagination);
	let minPage = $derived(Math.max(1, page - 2));
	let maxPage = $derived(Math.min(pageCount, page + 2));
	let pages = $derived(Array.from({ length: maxPage - minPage + 1 }, (_, i) => i + minPage));

	const pageBaseLink = `/projects?pageSize=${pageSize}&page=`;
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
		{#each data.projects as project}
			<div class="flex justify-center px-2 py-6 m-4 bg-cfc-purple-800 rounded-xl">
				<a
					href={`/projects/${project.sku.toLowerCase()}/${project.slug}`}
					data-sveltekit-preload-data="hover"
				>
					<img
						class="mx-auto rounded-xl"
						height={200}
						width={(project.images[0].width * 200) / project.images[0].height}
						src={project.images[0].formats.thumbnail.url}
						alt={project.images[0].alt}
					/>
					<p class="text-2xl text-center mt-4">{project.title}</p>
				</a>
			</div>
		{/each}
	</div>
	{#if pages.length > 1}
		<div id="pagination" class="text-2xl mx-auto my-4 flex justify-center">
			{#if minPage > 1}
				<div><a href="{pageBaseLink}{1}">&#8810;</a></div>
			{/if}
			{#if page > 1}
				<div><a href="{pageBaseLink}{page - 1}">&lt;</a></div>
			{/if}
			{#each pages as pageNumber}
				{#if pageNumber == page}
					<div class="border-2 border-cfc-purple-700">{pageNumber}</div>
				{:else}
					<div><a href="{pageBaseLink}{pageNumber}">{pageNumber}</a></div>
				{/if}
			{/each}
			{#if page < pageCount}
				<div><a href="{pageBaseLink}{page + 1}">&gt;</a></div>
			{/if}
			{#if maxPage < pageCount}
				<div><a href="{pageBaseLink}{pageCount}">&#8811;</a></div>
			{/if}
		</div>
	{/if}
</div>

<style lang="postcss">
	#pagination > div {
		@apply min-w-8 mx-2 p-2 bg-cfc-purple-800 rounded-xl flex items-center justify-center;
	}
</style>
