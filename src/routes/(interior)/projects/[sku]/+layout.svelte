<script lang="ts">
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';

	const { children, data } = $props();
</script>

<svelte:head>
	<MetaTags
		title={data.project.title}
		description={data.project.shortDescription}
		image={data.project.image}
	/>
</svelte:head>

<div class="max-w-screen-lg mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{data.project.title}</h1>

	{#each data.project.content as block}
		<ContentBlock {block} />
	{/each}

	{@render children()}
</div>
