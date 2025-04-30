<script lang="ts">
	import type { Image } from '$lib/types';

	export let images: Image[] = [];
	export let imageWidth: number | null = null;
	export let imageHeight: number | null = null;
	export let columns = 4;

	const getHeight = (image: Image) => {
		if (imageHeight) {
			return imageHeight;
		}
		if (imageWidth) {
			return (image.height * imageWidth) / image.width;
		}
		return image.height;
	};

	const getWidth = (image: Image) => {
		if (imageWidth) {
			return imageWidth;
		}
		if (imageHeight) {
			return (image.width * imageHeight) / image.height;
		}
		return image.width;
	};
</script>

<div
	class="grid grid-cols-1 justify-center items-center px-4"
	class:md:grid-cols-2={columns >= 2}
	class:lg:grid-cols-3={columns >= 3}
	class:xl:grid-cols-4={columns >= 4}
>
	{#each images as image}
		<div class="p-4">
			<img class="rounded-xl" src={image.url} alt={image.alternativeText} />
		</div>
	{/each}
</div>
