<script>
	import { page } from '$app/stores';
	import Logo from '$lib/components/BannerLogo.svelte';

	const links = [
		{ title: 'Projects', href: '/projects' },
		{ title: 'Patterns', href: '/patterns' },
		{ title: 'Blog', href: '/blog' }
	];

	let showMenu = $state(false);
	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class="container px-2 py-2 md:px-4 md:py-8 mx-auto md:flex md:justify-between md:items-center">
	<div class="flex items-center items-end justify-center">
		<div class="flex flex-1 justify-center items-center">
			<a href="/" class="mx-auto md:mx-0">
				<Logo class="h-24 w-32" />
			</a>
			<a
				class="hidden lg:block mx-2 text-4xl xl:text-5xl font-potra text-cfc-purple-200 hover:text-cfc-purple-400"
				href="/"
			>
				Cosmic&nbsp;Flowchart
			</a>
		</div>

		<!-- Mobile menu button -->
		<div class="flex justify-end md:hidden">
			<button
				onclick={toggleNavbar}
				aria-label={showMenu ? 'Close Menu' : 'Open Menu'}
				type="button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-12 h-12"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
	<div
		class="flex-col my-2 space-y-4 items-center md:flex md:space-y-0 md:flex-row md:space-x-10 md:mt-0"
		class:flex={showMenu}
		class:hidden={!showMenu}
	>
		{#each links as { title, href }}
			<a
				class="text-3xl text-cfc-purple-200 hover:text-cfc-purple-400 focus:text-cfc-purple-400"
				class:font-extrabold={$page.url.pathname.startsWith(href)}
				class:font-medium={!$page.url.pathname.startsWith(href)}
				{href}
				{title}
			>
				{title}
			</a>
		{/each}
	</div>
</nav>
