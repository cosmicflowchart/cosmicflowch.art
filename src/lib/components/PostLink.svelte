<script>
	import { selectImageUrlForSize } from '$lib/utils';

	export let href, post;
	export let image = null;
	export let imageHeight = 150;
	export let showDescription = false;
	export let showCreatedAt = false;
	export let title = null;
	export let titleClass = 'text-2xl text-center';

	if (!image) {
		image = post.image;
	}
	if (!title) {
		title = post.title;
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
			height={image}
			width={(image.width * imageHeight) / image.height}
			src={selectImageUrlForSize(image, { height: imageHeight })}
			alt={image.alternativeText}
		/>
	{/if}
	<div>
		<p class={titleClass}>{title}</p>
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
			<p class="text-md text-center">{post.shortDescription}</p>
		{/if}
	</div>
</a>

<style lang="postcss">
	a {
		@apply hover:text-cfc-purple-400 focus:text-cfc-purple-400;
	}
</style>
