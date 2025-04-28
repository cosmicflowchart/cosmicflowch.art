<script>
	import FooterContent from '$lib/components/FooterContent.svelte';
	import Navbar from '$lib/components/NavBar.svelte';
	let { children, data } = $props();
</script>

<header class="w-full min-h-28 md:min-h-40">
	<Navbar />
</header>

<main
	class="w-full min-h-[calc(100vh-260px)] md:min-h-[calc(100vh-280px)] mt-0 py-4
text-white bg-cfc-purple-900/75 backdrop-blur-[2px]"
>
	<div class="max-w-screen-xl mx-auto">
		{@render children()}
	</div>
</main>

<footer class="w-full h-37 md:h-30">
	<FooterContent pageLinks={data.footer.pageLinks} socialLinks={data.footer.socialLinks} />
</footer>
