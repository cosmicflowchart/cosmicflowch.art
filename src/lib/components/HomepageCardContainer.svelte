<script>
	export let count = 3;
</script>

<div
	class="grid grid-cols-1 md:space-x-4 space-y-2 md:space-y-0 px-8
	py-4 mx-auto max-w-2xl"
	class:md:max-w-sm={count == 1}
	class:md:grid-cols-2={count == 2}
	class:md:max-w-5xl={count >= 3}
	class:md:grid-cols-3={count >= 3}
>
	<slot />
</div>
