import { error } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async ({ params }) => {
	const response = await fetch(
		`${STRAPI_API_URL}/api/blog-posts?` +
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

	const blogPost = await response.json();

	if (blogPost.data && blogPost.data.length > 0) {
		return {
			post: blogPost.data[0]
		};
	} else {
		error(404, 'Blog Post not found');
	}
};
