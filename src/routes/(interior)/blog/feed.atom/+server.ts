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

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<title>Cosmic Flowchart</title>
	<id>https://cosmicflowch.art/</id>
	<link rel="alternate" href="https://cosmicflowch.art/" />
	<link rel="self" href="https://cosmicflowch.art/blog/feed.atom" />
	<updated>${new Date(Math.max(...blogPosts.map((post: any) => new Date(post.updatedAt)))).toUTCString()}</updated>
	<author>
		<name>Ulrich Feindt</name>
	</author>
	<description>
		My blog about my crochet projects, patterns, and the markets I sell them at.
	</description>
	${blogPosts.map((post: any) => {
		const content = post.content
			.map((block: ContentBlock) => render(ContentBlockComponent, { props: { block: block } }).html)
			.join('\n');
		return `		<entry>
		<title>${post.title}</title>
		<link rel="alternate" type="text.html" href="https://cosmicflowch.art/blog/${post.slug}/" />
		<id>https://cosmicflowch.art/blog/${post.slug}/</id>
		<published>${new Date(post.createdAt).toUTCString()}</published>
		<updated>${new Date(post.updatedAt).toUTCString()}</updated>
		<description><![CDATA[${post.description}]]></description>
		<content type="html">
			<![CDATA[${content}]]>
		</content>
	</entry>`;
	})}
</feed>`;

	return new Response(xml, { headers: { 'Content-Type': 'application/atom+xml' } });
};
