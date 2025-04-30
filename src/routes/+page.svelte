<script>
	import HomepageCard from '$lib/components/HomepageCard.svelte';
	import HomepageCardContainer from '$lib/components/HomepageCardContainer.svelte';
	import HomepageLogo from '$lib/components/HomepageLogo.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import PostLink from '$lib/components/PostLink.svelte';
	import RichText from '$lib/components/RichText.svelte';

	const { data } = $props();
	let lastUpdateYear = new Date().getFullYear();

	const pageDescription =
		'A collection of crochet patterns and projects + a blog of my craft adventures';
</script>

<svelte:head>
	<MetaTags description={pageDescription} />
</svelte:head>

<main class="max-w-screen-lg mx-auto min-h-[calc(100vh-120px)] px-4">
	<div class="flex justify-center my-16 mx-4">
		<HomepageLogo class="max-w-md" />
	</div>

	<div class="flex justify-center my-8 space-x-8">
		{#each data.footer.socialLinks as link}
			<a
				href={link.url}
				target="_blank"
				rel="nofollow me"
				aria-label={link.label}
				title={link.label}
			>
				<Icon iconName={link.iconName} class="w-24 h-24" />
			</a>
		{/each}
	</div>

	<RichText
		heading1Class="text-6xl text-center text-pretty my-4"
		paragraphClass="text-2xl text-center text-pretty my-4 mx-auto"
		unorderedListClass="text-2xl my-4 mx-auto list-disc pl-6"
		richText={data.homepage.aboutMeText}
	/>

	<h2 class="text-6xl text-center my-4">Upcoming Events</h2>
	<HomepageCardContainer count={data.homepage.events.length}>
		{#each data.homepage.events.slice(0, 3) as event}
			<HomepageCard>
				<a href={event.url} target="_blank" rel="noopener noreferrer">
					<h3 class="text-2xl text-center">{event.name}</h3>
					<p class="text-lg text-center mb-4">{event.location}</p>
					{#each event.dates as date}
						<p class="text-lg text-center">
							{new Date(date.date).toLocaleDateString('en-SE', {
								weekday: 'short',
								month: 'long',
								day: 'numeric'
							})}
							{date.startTime.slice(0, 5)}&#8211;{date.endTime.slice(0, 5)}
						</p>
					{/each}
				</a>
			</HomepageCard>
		{/each}
	</HomepageCardContainer>

	<h2 class="text-6xl text-center my-4"><a href="/projects">Craft Projects</a></h2>
	<p class="text-2xl text-center text-pretty my-4 mx-auto">
		These are some of the items I've made and maybe even sold at a local market.
	</p>
	<HomepageCardContainer count={data.homepage.featuredProjects.length}>
		{#each data.homepage.featuredProjects as project}
			<HomepageCard>
				<PostLink href={`/projects/${project.sku.toLowerCase()}/${project.slug}`} post={project} />
			</HomepageCard>
		{/each}
	</HomepageCardContainer>
	<p class="text-2xl text-center my-4 mx-auto">
		<a href="/projects">More Projects > </a>
	</p>

	<h2 class="text-6xl text-center my-4"><a href="/patterns">Patterns</a></h2>
	<p class="text-2xl text-center text-pretty my-4 mx-auto">
		Want to make some these yourself? Check out my patterns!
	</p>
	<HomepageCardContainer count={data.homepage.featuredPatterns.length}>
		{#each data.homepage.featuredPatterns as pattern}
			<HomepageCard>
				<PostLink href={`/patterns/${pattern.slug}`} post={pattern} />
			</HomepageCard>
		{/each}
	</HomepageCardContainer>
	<p class="text-2xl text-center my-4 mx-auto">
		<a href="/patterns">More Patterns > </a>
	</p>

	<h2 class="text-6xl text-center my-4"><a href="/blog">Blog</a></h2>
	<p class="text-2xl text-center text-pretty my-4 mx-auto">What have I been up to?</p>
	<HomepageCardContainer count={data.posts.length}>
		{#each data.posts as post}
			<HomepageCard>
				<PostLink href={`/blog/${post.slug}`} {post} showDescription={true} showCreatedAt={true} />
			</HomepageCard>
		{/each}
	</HomepageCardContainer>
	<p class="text-2xl text-center my-4 mx-auto">
		<a href="/blog">More Posts > </a>
	</p>
</main>

<footer class="max-w-screen-xl mx-auto max-w-screen-xl mx-auto p-4">
	<p class="text-lg text-center">
		Cosmic Flowchart &copy; 2024{lastUpdateYear > 2024 ? `-${lastUpdateYear - 2000}` : ''} by Ulrich
		Feindt. Unless noted otherwise, this work is licensed under
		<a
			href="https://creativecommons.org/licenses/by-sa/4.0"
			target="_blank"
			rel="license noopener noreferrer"
		>
			CC BY-SA 4.0
			<Icon iconName="creative-commons" class="inline-flex w-4 mb-1" />
			<Icon iconName="creative-commons-by" class="inline-flex h-4 mb-1" />
			<Icon iconName="creative-commons-sa" class="inline-flex h-4 mb-1" />
		</a>
		&ndash;
		<a href="/privacy">Privacy</a>
	</p>
</footer>

<style lang="postcss">
	a {
		@apply hover:text-cfc-purple-400 focus:text-cfc-purple-400;
	}
</style>
