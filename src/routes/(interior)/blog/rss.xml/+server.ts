import { render } from 'svelte/server';

import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';
import ContentBlockComponent from '$lib/components/ContentBlock.svelte';
import type { RequestHandler } from './$types';
import type { ContentBlock } from '$lib/types';

export const GET: RequestHandler = async ({ url }) => {
	let response = await fetch(
		`${STRAPI_API_URL}/api/blog-posts` +
			'?pagination[page]=1' +
			'&pagination[pageSize]=25' +
			'&sort=createdAt:desc' +
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
	let blogPostsPage = await response.json();
	const blogPosts = blogPostsPage.data;
	const { pageCount } = blogPostsPage.meta.pagination;

	for (let page = 2; page <= pageCount; page++) {
		response = await fetch(
			`${STRAPI_API_URL}/api/blog-posts` +
				`?pagination[page]=${page}` +
				'&pagination[pageSize]=25' +
				'&sort=createdAt:desc' +
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
		blogPostsPage = await response.json();
		blogPosts.push(...blogPostsPage.data);
	}

	const xml = `<rss version="2.0">
	<channel>
		<title>Cosmic Flowchart</title>
		<description>
			My blog about my crochet projects, patterns, and the markets I sell them at.
		</description>
		<link>https://cosmicflowch.art/</link>
	${blogPosts.map((post: any) => {
		const content = post.content
			.map((block: ContentBlock) => render(ContentBlockComponent, { props: { block: block } }).html)
			.join('\n');
		return `		<item>
			<title>${post.title}</title>
			<link>https://cosmicflowch.art/blog/${post.slug}/</link>
			<guid isPermaLink="true">https://cosmicflowch.art/blog/${post.slug}/</guid>
			<description><![CDATA[${post.shortDescription}]]></description>
			<content type="html">
				<![CDATA[${content}]]>
			</content>
			<pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
		</item>
`;
	})}
	</channel>
</rss>`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
