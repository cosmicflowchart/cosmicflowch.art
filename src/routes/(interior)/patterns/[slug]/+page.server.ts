import { error, redirect } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async ({ params }) => {
	const response = await fetch(
		`${STRAPI_API_URL}/api/patterns?filters[slug][$eqi]=${params.slug}&populate[0]=variants&populate[1]=steps.images&populate[2]=images`,
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
