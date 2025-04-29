<script lang="ts">
	import RichtTextText from '$lib/components/RichTextText.svelte';

	type RichTextElement = {
		type: 'list' | 'list-item' | 'heading' | 'paragraph';
		format?: 'ordered' | 'unordered';
		children: (LinkElement | TextElement | RichTextElement)[];
		level?: number;
	};

	type TextElement = {
		bold?: boolean;
		italic?: boolean;
		type: 'text';
		text: string;
		underline?: boolean;
	};

	type LinkElement = {
		type: 'link';
		url: string;
		children: TextElement[];
	};

	export let richText: RichTextElement[];
	export let linkClass = 'text-cfc-purple-200 hover:text-cfc-purple-400';
	export let heading1Class = 'text-6xl my-4';
	export let heading2Class = 'text-4xl my-4';
	export let heading3Class = 'text-2xl my-4';
	export let orderedListClass = 'text-xl my-4 mx-auto list-decimal pl-6';
	export let paragraphClass = 'text-xl my-4 mx-auto';
	export let unorderedListClass = 'text-xl my-4 mx-auto list-disc pl-6';
</script>

{#each richText as element}
	{#if element.type === 'heading'}
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
				{#each element.children as child}
					{#if child.type === 'list-item'}
						{#each child.children as grandchild}
							{#if grandchild.type === 'text'}
								<RichtTextText text={grandchild} />
							{/if}
						{/each}
					{/if}
				{/each}
			</ol>
		{:else if element.format === 'unordered'}
			<ul class={unorderedListClass}>
				{#each element.children as child}
					{#if child.type === 'list-item'}
						<li>
							{#each child.children as grandchild}
								{#if grandchild.type === 'text'}
									<RichtTextText text={grandchild} />
								{/if}
							{/each}
						</li>
					{/if}
				{/each}
			</ul>
		{/if}
	{:else if element.type === 'paragraph'}
		<p class={paragraphClass}>
			{#each element.children as child}
				{#if child.type === 'text'}
					<RichtTextText text={child} />
				{:else if child.type === 'link'}
					<a class={linkClass} href={child.url}>
						{#each child.children as grandchild}
							<RichtTextText text={grandchild} />
						{/each}
					</a>
				{/if}
			{/each}
		</p>
	{/if}
{/each}
