import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async ({ url }) => {
	const page = url.searchParams.get('page') || 1;
	const pageSize = url.searchParams.get('pageSize') || 12;

	const response = await fetch(
		`${STRAPI_API_URL}/api/project-groups` +
			`?pagination[page]=${page}` +
			`&pagination[pageSize]=${pageSize}` +
			`&sort[0]=category.name` +
			`&sort[1]=title` +
			`&populate=defaultProject.image`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			}
		}
	);

	const projectGroups = await response.json();
	return {
		groups: projectGroups.data,
		meta: projectGroups.meta
	};
};
