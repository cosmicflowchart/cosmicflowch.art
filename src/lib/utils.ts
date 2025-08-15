import type { FormattedMaterial, Image, LinkedMaterial, OtherMaterial } from '$lib/types';

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

export function formatMaterial(
	linkedMaterial: LinkedMaterial[],
	otherMaterial: OtherMaterial[]
): FormattedMaterial[] {
	const materials: FormattedMaterial[] = [];
	if (linkedMaterial) {
		for (const material of linkedMaterial) {
			const title = `${material.materialVariant.materialGroup.brand} ${material.materialVariant.materialGroup.name}`;
			const variant = {
				name: material.materialVariant.name,
				manufacturerNumber: material.materialVariant.manufacturerNumber,
				amountGrams: material.amountGrams,
				quantity: material.quantity
			};
			const found = materials.find((m) => m.title === title);
			if (found) {
				if (!found.variants) {
					found.variants = [];
				}
				found.variants.push(variant);
			} else {
				materials.push({
					title,
					variants: [variant]
				});
			}
		}
	}
	if (otherMaterial) {
		for (const material of otherMaterial) {
			materials.push({ title: material.description });
		}
	}

	return materials;
}
