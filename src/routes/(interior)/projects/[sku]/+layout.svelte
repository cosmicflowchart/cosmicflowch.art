<script>
	import RichText from '$lib/components/RichText.svelte';
	const { children, data } = $props();
</script>

<svelte:head>
	<title>{data.project.title} | Cosmic Flowchart</title>
	<meta name="description" content={data.project.description} />
	<meta name="og:description" content={data.project.description} />
	<meta name="og:title" content="{data.project.title} | Cosmic Flowchart" />
	<meta name="og:locale" content="en_US" />
	<meta name="og:image" content={data.project.images[0].formats.thumbnail.url} />
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
					height={500}
					width={(image.width * 500) / image.height}
					src={image.formats.small.url}
					alt={image.alt}
				/>
			</div>
		{/each}
	</div>
	{@render children()}
</div>
