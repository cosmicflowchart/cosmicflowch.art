<script lang="ts">
	import { kebabCase } from 'lodash-es';

	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';

	const { data } = $props();
	const { pattern } = data;
</script>

<svelte:head>
	<MetaTags title={pattern.title} description={pattern.shortDescription} image={pattern.image} />
</svelte:head>

<div class="max-w-screen-lg mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{pattern.title}</h1>

	{#each pattern.content as block}
		<ContentBlock {block} />
	{/each}
	{#if pattern.pattern_variants.length > 0}
		<h2 class="text-4xl text-center my-4">Variants</h2>
		{#each pattern.pattern_variants as variant (variant.id)}
			<h3 class="text-3xl text-center my-4" id={kebabCase(variant.project.variant)}>
				{variant.project.variant}
			</h3>

			{#each variant.content as block}
				<ContentBlock {block} />
			{/each}
		{/each}
	{/if}
</div>
