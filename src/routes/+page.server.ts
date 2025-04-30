import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async () => {
	const homepageResponse = await fetch(
		`${STRAPI_API_URL}/api/homepage` +
			'?populate[0]=events.dates' +
			'&populate[1]=featuredProjects.image' +
			'&populate[2]=featuredPatterns.image' +
			'&populate[3]=aboutMePicture',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			}
		}
	);
	const homepage = await homepageResponse.json();

	const footerResponse = await fetch(`${STRAPI_API_URL}/api/footer?populate=*`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${STRAPI_API_TOKEN}`
		}
	});
	const footer = await footerResponse.json();

	const blogResponse = await fetch(
		`${STRAPI_API_URL}/api/blog-posts?pagination[pageSize]=3&sort=createdAt:desc&populate=*`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			}
		}
	);
	const posts = await blogResponse.json();

	return {
		footer: footer.data,
		homepage: homepage.data,
		posts: posts.data
	};
};
