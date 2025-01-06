<script lang="ts">
	let {
		page,
		pageCount,
		pageSize,
		pageRoute
	}: { page: number; pageCount: number; pageSize: number; pageRoute: string } = $props();

	let minPage = $derived(Math.max(1, page - 2));
	let maxPage = $derived(Math.min(pageCount, page + 2));
	let pages = $derived(Array.from({ length: maxPage - minPage + 1 }, (_, i) => i + minPage));

	const pageBaseLink = `/${pageRoute}?pageSize=${pageSize}&page=`;
</script>

{#if pages.length > 1}
	<div id="pagination" class="text-2xl mx-auto my-4 flex justify-center">
		{#if minPage > 1}
			<div><a href="{pageBaseLink}{1}">&#8810;</a></div>
		{/if}
		{#if page > 1}
			<div><a href="{pageBaseLink}{page - 1}">&lt;</a></div>
		{/if}
		{#each pages as pageNumber}
			{#if pageNumber == page}
				<div class="border-2 border-cfc-purple-700">{pageNumber}</div>
			{:else}
				<div><a href="{pageBaseLink}{pageNumber}">{pageNumber}</a></div>
			{/if}
		{/each}
		{#if page < pageCount}
			<div><a href="{pageBaseLink}{page + 1}">&gt;</a></div>
		{/if}
		{#if maxPage < pageCount}
			<div><a href="{pageBaseLink}{pageCount}">&#8811;</a></div>
		{/if}
	</div>
{/if}

<style lang="postcss">
	#pagination > div {
		@apply min-w-8 mx-2 p-2 bg-cfc-purple-800 rounded-xl flex items-center justify-center;
	}
</style>
