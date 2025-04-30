<script>
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import RichText from '$lib/components/RichText.svelte';

	const { data } = $props();
	const { pattern } = data;
</script>

<svelte:head>
	<MetaTags
		title={pattern.title}
		description={pattern.shortDescription}
		image={pattern.images[0]}
	/>
</svelte:head>

<div class="max-w-screen-xl mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{pattern.title}</h1>
	<RichText richText={pattern.description} />

	<div class="flex flex-wrap justify-center px-4">
		{#each pattern.images as image}
			<div class="p-4">
				<img
					class="rounded-xl"
					height={500}
					width={(image.width * 500) / image.height}
					src={image.formats.small.url}
					alt={image.alternativeText}
				/>
			</div>
		{/each}
	</div>

	<h2 class="text-4xl text-center my-4">Steps</h2>
	{#each pattern.steps as step}
		<RichText richText={step.instructions} />
		<div class="flex flex-wrap justify-center px-4">
			{#each step.images as image}
				<div class="p-4">
					<img
						class="rounded-xl"
						height={200}
						width={(image.width * 200) / image.height}
						src={image.formats.small.url}
						alt={image.alternativeText}
					/>
				</div>
			{/each}
		</div>
	{/each}

	{#each pattern.content as block}
		<ContentBlock {block} />
	{/each}
</div>
