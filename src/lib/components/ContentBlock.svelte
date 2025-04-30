<script lang="ts">
	import type { ContentBlock, Image } from '$lib/types';

	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import ImageFlexbox from '$lib/components/ImageFlexbox.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import RichText from '$lib/components/RichText.svelte';

	export let block: ContentBlock;
	export let defaultImageHeight = 500;
	export let defaultImageWidth = 500;
	export let defaultColumns = 4;
</script>

{#if block.__component === 'content.text-block'}
	<RichText heading2Class="text-4xl my-4" richText={block.text} />
{:else if block.__component === 'content.image'}
	<div class="flex flex-wrap justify-center px-4">
		<div class="p-4">
			<img
				class="rounded-xl"
				height={block.height || defaultImageHeight}
				width={block.width ||
					(block.image.width * (block.height || defaultImageHeight)) / block.image.height}
				src={block.image.url}
				alt={block.image.alternativeText}
			/>
		</div>
	</div>
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
