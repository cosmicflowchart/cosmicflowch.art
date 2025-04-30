export type Image = {
	alternativeText: string;
	height: number;
	id: number | string;
	url: string;
	width: number;
	formats: {
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
		thumbnail: {
			url: string;
			width: number;
			height: number;
		};
	};
};
