<script>
	export let href, post;
	export let showDescription = false;
	export let showCreatedAt = false;

	let image = post.image;
	if (post.images) {
		image = post.images[0];
	}
</script>

<a
	{href}
	class="grid grid-cols-1 justify-center content-between space-y-4"
	class:md:content-end={!image}
	data-sveltekit-preload-data="hover"
>
	{#if image}
		<img
			class="mx-auto rounded-xl"
			height={200}
			width={(image.width * 200) / image.height}
			src={image.formats.thumbnail.url}
			alt={image.alternativeText}
		/>
	{/if}
	<div>
		<p class="text-2xl text-center">{post.title}</p>
		{#if showCreatedAt}
			<p class="text-md text-center italic">
				{new Date(post.createdAt).toLocaleDateString('en-SE', {
					month: 'long',
					day: 'numeric',
					year: 'numeric'
				})}
			</p>
		{/if}
		{#if showDescription}
			<p class="text- text-center">{post.shortDescription}</p>
		{/if}
	</div>
</a>

<style lang="postcss">
	a {
		@apply hover:text-cfc-purple-400 focus:text-cfc-purple-400;
	}
</style>
