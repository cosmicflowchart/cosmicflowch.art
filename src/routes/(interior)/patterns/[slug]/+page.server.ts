import { error } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async ({ params }) => {
	const response = await fetch(
		`${STRAPI_API_URL}/api/patterns?` +
			`filters[slug][$eqi]=${params.slug}` +
			'&populate[0]=content.image' +
			'&populate[1]=content.images' +
			'&populate[2]=image' +
			'&populate[4]=pattern_variants.content.image' +
			'&populate[5]=pattern_variants.content.images' +
			'&populate[6]=pattern_variants.project',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			}
		}
	);

	const pattern = await response.json();

	if (pattern.data && pattern.data.length > 0) {
		return {
			pattern: pattern.data[0]
		};
	} else {
		error(404, 'Project not found');
	}
};
