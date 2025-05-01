<script lang="ts">
	import type { Image } from '$lib/types';
	import { selectImageUrlForSize } from '$lib/utils';
	import { flip } from 'svelte/animate';

	export let images: Image[] = [];
	export let width = 400;
	const height = Math.max(...images.map((image) => (image.height * width) / image.width));

	let currentSlide = 0;
	let hideIndex: number | null = null;
	let displayImages =
		images.length !== 2
			? [images[images.length - 1], ...images.slice(0, images.length - 1)]
			: [
					images[1],
					images[0],
					{ ...images[1], id: `${images[1].id}_2}` },
					{ ...images[0], id: `${images[0].id}_2}` }
				];

	const nextImage = () => {
		hideIndex = images.length - 1;
		currentSlide = (currentSlide + 1) % images.length;
		displayImages = [...displayImages.slice(1), displayImages[0]];
	};

	const previousImage = () => {
		hideIndex = 0;
		currentSlide = (currentSlide - 1 + displayImages.length) % displayImages.length;
		displayImages = [
			displayImages[displayImages.length - 1],
			...displayImages.slice(0, displayImages.length - 1)
		];
	};
</script>

<div>
	<div
		class="flex overflow-hidden items-center rounded-xl bg-cfc-purple-700/25"
		style="width:{width}px; height: {height}px"
	>
		{#each displayImages as image, index (image.id)}
			<img
				animate:flip={{ duration: 500 }}
				alt={image.alternativeText}
				class="flex relative -left-full"
				class:opacity-0={index == hideIndex}
				src={selectImageUrlForSize(image, { width })}
				height={(image.height * width) / image.width}
				{width}
				style="width: {width}px; height: {(image.height * width) / image.width}px"
			/>
		{/each}
	</div>

	{#if images.length > 1}
		<div class="flex justify-center items-center space-x-4 mt-2">
			<button
				class="btn text-4xl text-cfc-purple-200 hover:text-cfc-purple-400"
				aria-label="Previous Image"
				on:click={() => previousImage()}>&lt;</button
			>
			<span class="text-2xl">{currentSlide + 1} / {images.length}</span>
			<button
				class="btn text-4xl text-cfc-purple-200 hover:text-cfc-purple-400"
				aria-label="Next Image"
				on:click={() => nextImage()}>&gt;</button
			>
		</div>
	{/if}
</div>
