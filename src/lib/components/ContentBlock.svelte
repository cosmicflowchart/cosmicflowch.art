<script lang="ts">
	import type { ContentBlock } from '$lib/types';

	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import ImageFlexbox from '$lib/components/ImageFlexbox.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import RichText from '$lib/components/RichText.svelte';
	import { selectImageUrlForSize } from '$lib/utils';

	export let block: ContentBlock;
	export let defaultImageHeight = 500;
	export let defaultImageWidth = 400;
	export let defaultColumns = 4;

	let alignmentClass = 'text-left';
	switch (block.alignment) {
		case 'left':
			alignmentClass = 'text-left';
			break;
		case 'center':
			alignmentClass = 'text-center';
			break;
		case 'right':
			alignmentClass = 'text-right';
			break;
		case 'justify':
			alignmentClass = 'text-justify';
			break;
		case 'start':
			alignmentClass = 'text-start';
			break;
		case 'end':
			alignmentClass = 'text-end';
			break;
	}
</script>

{#if block.__component === 'content.text-block'}
	<div class={alignmentClass}>
		<RichText heading2Class="text-4xl my-4" richText={block.text} />
	</div>
{:else if block.__component === 'content.image'}
	{#if block.image}
		<div class="flex flex-wrap justify-center px-4">
			<div class="p-4">
				<img
					class="rounded-xl"
					height={block.height || defaultImageHeight}
					width={block.width ||
						(block.image.width * (block.height || defaultImageHeight)) / block.image.height}
					src={selectImageUrlForSize(block.image, {
						height: block.height || defaultImageHeight,
						width:
							block.width ||
							(block.image.width * (block.height || defaultImageHeight)) / block.image.height
					})}
					alt={block.image.alternativeText}
				/>
			</div>
		</div>
	{/if}
{:else if block.__component === 'content.image-carousel'}
	<div class="flex justify-center py-4">
		<ImageCarousel images={block.images} width={block.width || defaultImageWidth} />
	</div>
{:else if block.__component === 'content.image-flexbox'}
	<div class="flex justify-center py-4">
		<ImageFlexbox
			images={block.images}
			imageWidth={block.imageWidth || null}
			imageHeight={block.imageHeight || defaultImageHeight}
		/>
	</div>
{:else if block.__component === 'content.image-grid'}
	<div class="flex justify-center py-4">
		<ImageGrid
			images={block.images}
			imageWidth={block.imageWidth || null}
			imageHeight={block.imageHeight || null}
			columns={block.columns || defaultColumns}
		/>
	</div>
{/if}
