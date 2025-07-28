<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	export let lastUpdateYear = new Date().getFullYear();
	export let pageLinks: { title: string; path: string }[] = [];
	export let socialLinks: { iconName: string; url: string; label: string }[] = [];
</script>

<div class="sm:flex sm:space-x-4 max-sm:space-y-4 justify-center max-w-screen-2xl mx-auto p-4">
	<div>
		<p class="text-2xl space-x-2">
			{#each pageLinks as link}
				<a href={link.path} class="hover:text-cfc-purple-400">
					{link.title}
				</a>
			{/each}
		</p>
		<p class="text-lg">
			Cosmic Flowchart
			<span class="whitespace-nowrap">
				&copy; 2024{lastUpdateYear > 2024 ? `-${lastUpdateYear - 2000}` : ''}
			</span>
			<span class="whitespace-nowrap">by Ulrich Feindt.</span>
		</p>
		<p class="text-lg">
			Unless noted otherwise, this work is licensed under
			<a
				href="https://creativecommons.org/licenses/by-sa/4.0"
				class="whitespace-nowrap"
				target="_blank"
				rel="license noopener noreferrer"
			>
				CC BY-SA 4.0
				<Icon iconName="creative-commons" class="inline-flex w-4 mb-1" />
				<Icon iconName="creative-commons-by" class="inline-flex h-4 mb-1" />
				<Icon iconName="creative-commons-sa" class="inline-flex h-4 mb-1" />
			</a>
		</p>
	</div>
	<div class="flex items-center space-x-4">
		{#each socialLinks as link}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer nofollow me"
				aria-label={link.label}
				title={link.label}
			>
				<Icon iconName={link.iconName} class="w-10 h-10" />
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	a {
		@apply hover:text-cfc-purple-400 focus:text-cfc-purple-400;
	}
</style>
