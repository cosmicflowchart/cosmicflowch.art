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
	url: string;
	width: number;
	formats?: {
		small?: {
			url: string;
			width: number;
			height: number;
		};
		medium?: {
			url: string;
			width: number;
			height: number;
		};
		large?: {
			url: string;
			width: number;
			height: number;
		};
		thumbnail?: {
			url: string;
			width: number;
			height: number;
		};
	};
};
