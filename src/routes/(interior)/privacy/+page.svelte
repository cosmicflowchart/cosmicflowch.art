<script>
	import Icon from '$lib/components/Icon.svelte';

	const title = 'Privacy Notice';
	const lastUpdated = '2024-12-22';
	const githubUrl =
		'https://github.com/cosmicflowchart/cosmicflowch.art/commits/main/src/routes/(interior)/privacy/%2Bpage.svelte';
	const description = 'Privacy notice for cosmicflowch.art';
</script>

<svelte:head>
	<title>{title} | Cosmic Flowchart</title>
	<meta name="description" content={description} />
	<meta name="og:description" content={description} />
	<meta name="og:title" content="{title} | Cosmic Flowchart" />
	<meta name="og:locale" content="en_US" />
</svelte:head>

<div class="max-w-screen-xl mx-auto px-4">
	<h1 class="text-6xl text-center my-4">{title}</h1>

	<div class="max-w-screen-md text-xl mx-auto space-y-4 mb-4">
		<p>
			The following anonymized data is collected in order to understand the usage of the website:
		</p>

		<ul class="list-disc pl-6">
			<li>URL of the visited page,</li>
			<li>date and time of visit,</li>
			<li>country of the visitor, derived from the IP address,</li>
			<li>the <code>Referer</code> header,</li>
			<li>
				browser and system information (determined from the <code>User-Agent</code> header or HTTP client
				hints; the original headers are not stored),
			</li>
			<li>screen size.</li>
		</ul>

		<p>
			No personal information (such as the IP address) is collected. Instead, a hash of the IP
			address, User-Agent, and a random number (“salt”) is kept in memory for 8 hours to identify a
			browsing session. This is never stored to disk.
		</p>

		<p>
			No information is stored in the browser using cookies, localStorage, or any other methods.
		</p>

		<hr />
		<p>
			The above notice is marked with
			<a
				href="https://creativecommons.org/publicdomain/zero/1.0/"
				target="_blank"
				rel="license noopener noreferrer"
			>
				CC0 1.0
				<Icon iconName="creative-commons" class="inline-flex w-4 mb-1" />
				<Icon iconName="creative-commons-zero" class="inline-flex h-4 mb-1" />
			</a>
		</p>
		<p>
			Last updated: {lastUpdated} &ndash;
			<a href={githubUrl} rel="noopener noreferrer"> File history</a>
		</p>
	</div>
</div>

<style lang="postcss">
	a {
		@apply text-cfc-purple-200 hover:text-cfc-purple-400 focus:text-cfc-purple-400;
	}
</style>
