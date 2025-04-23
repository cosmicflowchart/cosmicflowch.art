<script>
	import PageLinks from '$lib/components/PageLinks.svelte';

	const pageTitle = 'Projects';
	const pageDescription = 'List of my crochet projects';

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
		{#each data.projects as project}
			<div class="flex justify-center px-2 py-6 m-4 bg-cfc-purple-800 rounded-xl">
				<a
					href={`/projects/${project.sku.toLowerCase()}/${project.slug}`}
					class="grid grid-cols-1 justify-center content-between space-y-4"
					class:md:content-end={!project.images}
					data-sveltekit-preload-data="hover"
				>
					{#if project.images}
						<img
							class="mx-auto rounded-xl"
							height={200}
							width={(project.images[0].width * 200) / project.images[0].height}
							src={project.images[0].formats.thumbnail.url}
							alt={project.images[0].alt}
						/>
					{/if}
					<p class="text-2xl text-center">{project.title}</p>
				</a>
			</div>
		{/each}
	</div>

	<PageLinks {page} {pageCount} {pageSize} pageRoute="projects" />
</div>
