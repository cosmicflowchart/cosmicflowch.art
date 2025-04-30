<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';

	export let images: {
		alternativeText: string;
		height: number;
		id: number | string;
		url: string;
		width: number;
	}[] = [];
	export let width = 400;

	let currentSlide = 0;
	let displayImages =
		images.length !== 2
			? [images[images.length - 1], ...images.slice(0, images.length - 1)]
			: [
					...images,
					{ ...images[0], id: `${images[0].id}_1}` },
					{ ...images[1], id: `${images[1].id}_2}` }
				];

	const nextImage = () => {
		currentSlide = (currentSlide + 1) % images.length;
		displayImages = [...displayImages.slice(1), displayImages[0]];
	};

	const previousImage = () => {
		currentSlide = (currentSlide - 1 + displayImages.length) % displayImages.length;
		displayImages = [
			displayImages[displayImages.length - 1],
			...displayImages.slice(0, displayImages.length - 1)
		];
	};
</script>

<div>
	<div class={`flex overflow-hidden rounded-xl`} style="width: {width}px;">
		{#each displayImages as image, index (image.id)}
			<img
				class="relative -left-full"
				class:opacity-0={index == displayImages.length - 1}
				src={image.url}
				alt={image.alternativeText}
				style="aspect-ratio: {image.width / image.height}"
				animate:flip={{ duration: 500 }}
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
