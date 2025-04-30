import type { Image } from '$lib/types';

export function selectImageUrlForSize(
	image: Image,
	{ height = 0, width = 0 }: { height?: number; width?: number }
): string {
	const images = [image, ...(image.formats ? Object.values(image.formats) : [])].sort(
		(a, b) => a.size - b.size
	);

	const matchingImage = images.find((i) => i.height >= height && i.width >= width);
	return matchingImage?.url || images[images.length - 1].url;
}
