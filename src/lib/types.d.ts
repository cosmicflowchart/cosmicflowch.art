export type ContentBlock = {
	__component:
		| 'content.text-block'
		| 'content.image'
		| 'content.image-carousel'
		| 'content.image-flexbox'
		| 'content.image-grid';
	alignment?: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
	columns?: number;
	height?: number;
	image?: Image;
	imageHeight?: number;
	images?: Image[];
	imageWidth?: number;
	text: any[];
	width?: number;
};

export type Image = {
	alternativeText: string;
	height: number;
	id: number | string;
	size: number;
	url: string;
	width: number;
	formats?: {
		small?: {
			height: number;
			size: number;
			url: string;
			width: number;
		};
		medium?: {
			height: number;
			size: number;
			width: number;
			url: string;
		};
		large?: {
			height: number;
			size: number;
			url: string;
			width: number;
		};
		thumbnail?: {
			height: number;
			size: number;
			url: string;
			width: number;
		};
	};
};

export type FormattedMaterial = {
	title: string;
	variants?: {
		name: string;
		manufacturerNumber: string;
		amountGrams: number;
		quantity: number;
	}[];
};

export type LinkedMaterial = {
	amountGrams: number;
	materialVariant: {
		name: string;
		manufacturerNumber: string;
		materialGroup: {
			name: string;
			brand: string;
		};
	};
	quantity: number;
};

export type OtherMaterial = {
	description: string;
};
