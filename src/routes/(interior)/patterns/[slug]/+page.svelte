<script>
	import RichText from '$lib/components/RichText.svelte';
	const { data } = $props();
	const { pattern } = data;
</script>

<svelte:head>
	<title>{pattern.title} | Cosmic Flowchart</title>
	<meta name="description" content={pattern.shortDescription} />
	<meta name="og:description" content={pattern.shortDescription} />
	<meta name="og:title" content="{pattern.title} | Cosmic Flowchart" />
	<meta name="og:locale" content="en_US" />
	{#if pattern.images}
		<meta name="og:image" content={pattern.images[0].formats.thumbnail.url} />
	{/if}
</svelte:head>

<div class="max-w-screen-xl mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{pattern.title}</h1>
	<RichText richText={pattern.description} />

	<div class="flex flex-wrap justify-center px-4">
		{#each pattern.images as image}
			<div class="p-4">
				<img
					height={500}
					width={(image.width * 500) / image.height}
					src={image.formats.small.url}
					alt={image.alt}
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
						height={200}
						width={(image.width * 200) / image.height}
						src={image.formats.small.url}
						alt={image.alt}
					/>
				</div>
			{/each}
		</div>
	{/each}

	{#if pattern.variants.length > 0}
		<h2 class="text-4xl text-center my-4">Variants</h2>
		{#each pattern.variants as variant}
			<h3 class="text-2xl text-center my-4">{variant.title}</h3>
			<RichText richText={variant.description} />

			<div class="flex flex-wrap justify-center px-4">
				{#each variant.images as image}
					<div class="p-4">
						<img
							height={500}
							width={(image.width * 500) / image.height}
							src={image.formats.small.url}
							alt={image.alt}
						/>
					</div>
				{/each}
			</div>
		{/each}
	{/if}
</div>
