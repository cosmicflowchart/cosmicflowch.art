<script>
	import HomepageLogo from '$lib/components/HomepageLogo.svelte';
	import Icon from '$lib/components/Icon.svelte';
	const { data } = $props();
	let lastUpdateYear = 2024;

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

<div class="max-w-screen-xl mx-auto">
	<div class="min-h-[calc(100vh-120px)]">
		<div class="flex justify-center my-16 mx-4">
			<HomepageLogo class="max-w-md" />
		</div>

		<div
			class="flex flex-col space-y-4 justify-center items-center md:space-y-0 md:flex-row md:space-x-10 text-6xl my-8 mx-auto"
		>
			<a href="/projects">Projects</a>
			<a href="/patterns">Patterns</a>
			<a href="/blog">Blog</a>
		</div>

		<div class="flex justify-center my-8">
			{#each data.homepage.socialLinks as link}
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
	</div>
	<div class="max-w-screen-xl mx-auto p-4">
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
	</div>
</div>

<style>
	a {
		@apply hover:text-cfc-purple-400 focus:text-cfc-purple-400;
	}
</style>
