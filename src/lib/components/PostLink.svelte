<script>
	export let href, post;
</script>

<a
	{href}
	class="grid grid-cols-1 justify-center content-between space-y-4"
	class:md:content-end={!post.images}
	data-sveltekit-preload-data="hover"
>
	{#if post.images}
		<img
			class="mx-auto rounded-xl"
			height={200}
			width={(post.images[0].width * 200) / post.images[0].height}
			src={post.images[0].formats.thumbnail.url}
			alt={post.images[0].alt}
		/>
	{/if}
	<p class="text-2xl text-center">{post.title}</p>
</a>

<style lang="postcss">
	a {
		@apply hover:text-cfc-purple-400 focus:text-cfc-purple-400;
	}
</style>
