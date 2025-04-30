<script lang="ts">
	import type { Image } from '$lib/types';
	import { selectImageUrlForSize } from '$lib/utils';

	export let title: string | null = null;
	export let description: string | null = null;
	export let image: Image | null = null;

	title = title ? `${title} | Cosmic Flowchart` : 'Cosmic Flowchart';
</script>

<title>{title}</title>
{#if description}
	<meta name="description" content={description} />
	<meta name="og:description" content={description} />
{/if}
<meta name="og:title" content={title} />
<meta name="og:locale" content="en_US" />
{#if image}
	<meta name="og:image" content={selectImageUrlForSize(image, { width: 500 })} />
{:else}
	<meta name="og:image" content="/svg/cfc-logo-circle.svg" />
{/if}
