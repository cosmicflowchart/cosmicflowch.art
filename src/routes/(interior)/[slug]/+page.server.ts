import { error } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async ({ params }) => {
	const response = await fetch(
		`${STRAPI_API_URL}/api/pages?` +
			`filters[slug][$eqi]=${params.slug}` +
			'&populate[0]=content.image' +
			'&populate[1]=content.images' +
			'&populate[2]=image',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			}
		}
	);

	const pages = await response.json();

	if (pages.data && pages.data.length > 0) {
		return {
			page: pages.data[0]
		};
	} else {
		error(404, 'Blog Post not found');
	}
};
