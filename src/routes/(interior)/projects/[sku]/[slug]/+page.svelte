<script lang="ts">
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import PostLink from '$lib/components/PostLink.svelte';

	const { data } = $props();
	let group_projects = $derived.by(() =>
		data.project.project_group?.projects
			?.filter((p) => p.sku !== data.project.sku)
			.sort((a, b) => a.sku.localeCompare(b.sku))
	);
</script>

<svelte:head>
	<MetaTags
		title={data.project.title}
		description={data.project.shortDescription}
		image={data.project.image}
	/>
</svelte:head>

<div class="max-w-screen-lg mx-auto px-4">
	<h1 class="text-6xl text-center my-4">
		{data.project.project_group?.titleSingular ?? data.project.title}
	</h1>
	<h2 class="text-4xl text-center my-4">{data.project.variant}</h2>

	{#each data.project.content as block (block.id)}
		<ContentBlock {block} />
	{/each}

	{#if data.project.project_group?.projects?.length > 1}
		<h2 class="text-4xl text-center my-4">More Variants</h2>
		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
			{#each group_projects as group_project (group_project.sku)}
				<div
					class="flex justify-center px-2 py-6 m-4 bg-cfc-purple-700/25
		rounded-xl"
				>
					<PostLink
						href={`/projects/${group_project.sku.toLowerCase()}/${group_project.slug}`}
						post={group_project}
						title={group_project.variant}
						titleClass="text-md text-center"
						imageHeight={100}
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>
