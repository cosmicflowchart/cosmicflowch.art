<script lang="ts">
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import MaterialList from '$lib/components/MaterialList.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import PostLink from '$lib/components/PostLink.svelte';
	import { formatMaterial } from '$lib/utils.js';
	import { kebabCase } from 'lodash-es';

	const { data } = $props();
	// const { project } = data;
	let project = $derived.by(() => data.project);
	let group_projects = $derived.by(() =>
		project.project_group?.projects
			?.filter((p) => p.sku !== project.sku)
			.sort((a, b) => a.sku.localeCompare(b.sku))
	);
	let primaryMaterial = $derived.by(() =>
		formatMaterial(project.primaryMaterial, project.otherPrimaryMaterial)
	);
	let secondaryMaterial = $derived.by(() =>
		formatMaterial(project.secondaryMaterial, project.otherSecondaryMaterial)
	);
</script>

<svelte:head>
	<MetaTags title={project.title} description={project.shortDescription} image={project.image} />
</svelte:head>

<div class="max-w-screen-lg mx-auto px-4">
	<h1 class="text-6xl text-center my-4">
		{project.project_group?.titleSingular ?? project.title}
	</h1>
	<h2 class="text-4xl text-center my-4">{project.variant}</h2>

	{#each project.content as block (block.id)}
		<ContentBlock {block} />
	{/each}
	{#if project.pattern_variant}
		<div class="text-xl">
			<b>Pattern:</b>
			<a
				class="text-cfc-purple-200 hover:text-cfc-purple-400"
				href={`/patterns/${project.pattern_variant.pattern.slug}`}
			>
				{project.pattern_variant.pattern.title}
			</a>
			(Variant:
			<a
				class="text-cfc-purple-200 hover:text-cfc-purple-400"
				href={`/patterns/${project.pattern_variant.pattern.slug}#${kebabCase(project.variant)}`}
			>
				{project.variant}
			</a>)
		</div>
	{:else if project.pattern}
		<div class="text-xl">
			<b>Pattern:</b>
			<a
				class="text-cfc-purple-200 hover:text-cfc-purple-400"
				href={`/patterns/${project.pattern.slug}`}
			>
				{project.pattern.title}
			</a>
		</div>
	{:else if project.project_group?.patternExternal}
		<div class="text-xl">
			<b>Pattern:</b>
			<a
				class="text-cfc-purple-200 hover:text-cfc-purple-400"
				href={project.project_group.patternExternal.url}
			>
				{project.project_group.patternExternal.title}
			</a>
			{#if project.project_group.patternExternal.author}
				by {project.project_group.patternExternal.author}
			{/if}
			{#if project.project_group.patternExternal.website}
				on {project.project_group.patternExternal.website}
			{/if}
		</div>
	{/if}

	{#if primaryMaterial.length > 0}
		<h2 class="text-4xl text-center my-4">Primary Material</h2>
		<MaterialList materials={primaryMaterial} />
	{/if}
	{#if secondaryMaterial.length > 0}
		<h2 class="text-4xl text-center my-4">Secondary Material</h2>
		<MaterialList materials={secondaryMaterial} />
	{/if}

	{#if project.project_group?.projects?.length > 1}
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
