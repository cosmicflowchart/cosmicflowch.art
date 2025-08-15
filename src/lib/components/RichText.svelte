<script lang="ts">
	import RichText from '$lib/components/RichText.svelte';
	import type { RichTextElement } from '$lib/types';

	export let richText: RichTextElement[];
	export let linkClass = 'text-cfc-purple-200 hover:text-cfc-purple-400';
	export let heading1Class = 'text-6xl my-4';
	export let heading2Class = 'text-4xl my-4';
	export let heading3Class = 'text-2xl my-4';
	export let orderedListClass = 'text-xl my-4 mx-auto list-decimal pl-6';
	export let paragraphClass = 'text-xl my-4 mx-auto';
	export let unorderedListClass = 'text-xl my-4 mx-auto list-disc pl-6';

	const props = {
		linkClass,
		heading1Class,
		heading2Class,
		heading3Class,
		orderedListClass,
		paragraphClass,
		unorderedListClass
	};
</script>

{#each richText as element}
	{#if element.type === 'text'}
		{#if element.bold}
			<b>{element.text}</b>
		{:else if element.italic}
			<i>{element.text}</i>
		{:else if element.underline}
			<u>{element.text}</u>
		{:else if element.strikethrough}
			<span class="line-through">{element.text}</span>
		{:else}
			{element.text}
		{/if}
	{:else if element.type === 'link'}
		<a class={linkClass} href={element.url}>
			<RichText richText={element.children} {...props} />
		</a>
	{:else if element.type === 'heading'}
		{#if element.level === 1}
			<h1 class={heading1Class}>
				{element.children[0].type === 'text' ? element.children[0].text : ''}
			</h1>
		{:else if element.level === 2}
			<h2 class={heading2Class}>
				{element.children[0].type === 'text' ? element.children[0].text : ''}
			</h2>
		{:else if element.level === 3}
			<h3 class={heading3Class}>
				{element.children[0].type === 'text' ? element.children[0].text : ''}
			</h3>
		{/if}
	{:else if element.type === 'list'}
		{#if element.format === 'ordered'}
			<ol class={orderedListClass}>
				<RichText richText={element.children} {...props} />
			</ol>
		{:else if element.format === 'unordered'}
			<ul class={unorderedListClass}>
				<RichText richText={element.children} {...props} />
			</ul>
		{/if}
	{:else if element.type === 'list-item'}
		<li><RichText richText={element.children} {...props} /></li>
	{:else if element.type === 'paragraph'}
		<p class={paragraphClass}>
			<RichText richText={element.children} {...props} />
		</p>
	{/if}
{/each}
