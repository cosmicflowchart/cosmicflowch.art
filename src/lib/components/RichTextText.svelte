<script lang="ts">
	type TextElement = {
		bold?: boolean;
		italic?: boolean;
		type: 'text';
		text: string;
		underline?: boolean;
	};

	export let text: TextElement;
</script>

{#if text.bold}
	<b>{text.text}</b>
{:else if text.italic}
	<i>{text.text}</i>
{:else if text.underline}
	<u>{text.text}</u>
{:else}
	{text.text}
{/if}
