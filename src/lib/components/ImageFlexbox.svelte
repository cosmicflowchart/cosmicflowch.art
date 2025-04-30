<script lang="ts">
	import type { Image } from '$lib/types';
	import { selectImageUrlForSize } from '$lib/utils';

	export let images: Image[] = [];
	export let imageWidth: number | null = null;
	export let imageHeight: number | null = null;

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

<div class="flex flex-wrap justify-center px-4">
	{#each images as image}
		<div class="p-4">
			<img
				class="rounded-xl"
				height={getHeight(image)}
				width={getWidth(image)}
				style="height: {getHeight(image)}px; width: {getWidth(image)}px;"
				src={selectImageUrlForSize(image, { height: getHeight(image), width: getWidth(image) })}
				alt={image.alternativeText}
			/>
		</div>
	{/each}
</div>
