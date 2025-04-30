<script>
	import MetaTags from '$lib/components/MetaTags.svelte';
	import PageLinks from '$lib/components/PageLinks.svelte';
	import PostLink from '$lib/components/PostLink.svelte';

	const { data } = $props();
	let { page, pageCount, pageSize } = $derived(data.meta.pagination);
</script>

<svelte:head>
	<MetaTags title="Projects" description="List of my crochet projects" />
</svelte:head>

<div class="max-w-screen-xl mx-auto px-4">
	<h1 class="text-6xl text-center my-4">Projects</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		{#each data.projects as project (project.sku)}
			<div
				class="flex justify-center px-2 py-6 m-4 bg-cfc-purple-700/25
			rounded-xl"
			>
				<PostLink href={`/projects/${project.sku.toLowerCase()}/${project.slug}`} post={project} />
			</div>
		{/each}
	</div>

	<PageLinks {page} {pageCount} {pageSize} pageRoute="projects" />
</div>
