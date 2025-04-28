<script>
	import HomepageLogo from '$lib/components/HomepageLogo.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import RichText from '$lib/components/RichText.svelte';
	const { data } = $props();
	let lastUpdateYear = 2025;

	const pageDescription =
		'A collection of crochet patterns and projects + a blog of my craft adventures';
</script>

<svelte:head>
	<title>Cosmic Flowchart</title>
	<meta name="description" content={pageDescription} />
	<meta name="og:description" content={pageDescription} />
	<meta name="og:title" content="Cosmic Flowchart" />
	<meta name="og:locale" content="en_US" />
</svelte:head>

<main class="max-w-screen-xl mx-auto min-h-[calc(100vh-120px)] px-4">
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
		paragraphClass="max-w-screen-md text-2xl my-4 mx-auto"
		unorderedListClass="max-w-screen-md text-2xl my-4 mx-auto list-disc pl-6"
		richText={data.homepage.aboutMeText}
	/>

	<h2 class="text-6xl text-center my-4">Upcoming Events</h2>
	<div
		class="grid grid-cols-1 md:space-x-4 space-y-2 md:space-y-0 px-8
	py-4 mx-auto max-w-screen-md"
		class:md:grid-cols-2={data.homepage.events.length == 2}
		class:md:max-w-screen-lg={data.homepage.events.length >= 3}
		class:md:grid-cols-3={data.homepage.events.length >= 3}
	>
		{#each data.homepage.events.slice(0, 3) as event}
			<div class="rounded-2xl bg-cfc-purple-900/25 backdrop-blur-[4px] p-2">
				<a href={event.url} target="_blank" rel="noopener noreferrer"
					><h3 class="text-2xl text-center">{event.name}</h3></a
				>
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
			</div>
		{/each}
	</div>

	<div
		class="flex flex-col space-y-4 justify-center items-center md:space-y-0 md:flex-row md:space-x-10 text-6xl my-8 mx-auto"
	>
		<a href="/projects">Projects</a>
		<a href="/patterns">Patterns</a>
		<a href="/blog">Blog</a>
	</div>
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

<style>
	a {
		@apply hover:text-cfc-purple-400 focus:text-cfc-purple-400;
	}
</style>
