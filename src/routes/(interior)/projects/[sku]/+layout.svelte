<script lang="ts">
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import RichText from '$lib/components/RichText.svelte';
	import { selectImageUrlForSize } from '$lib/utils';
	const { children, data } = $props();
</script>

<svelte:head>
	<MetaTags
		title={data.project.title}
		description={data.project.shortDescription}
		image={data.project.images ? data.project.images[0] : null}
	/>
</svelte:head>

<div class="max-w-screen-xl mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{data.project.title}</h1>
	<RichText
		paragraphClass="max-w-screen-md text-xl text-center my-4 mx-auto"
		richText={data.project.description}
	/>

	<div class="flex flex-wrap justify-center px-4">
		{#each data.project.images as image}
			<div class="p-4">
				<img
					class="rounded-xl"
					height={500}
					width={(image.width * 500) / image.height}
					src={selectImageUrlForSize(image, { width: 500 })}
					alt={image.alternativeText}
				/>
			</div>
		{/each}
	</div>

	{#each data.project.content as block}
		<ContentBlock {block} />
	{/each}

	{@render children()}
</div>
