export type ContentBlock = {
	__component:
		| 'content.text-block'
		| 'content.image'
		| 'content.image-carousel'
		| 'content.image-flexbox'
		| 'content.image-grid';
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
