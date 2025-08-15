<script lang="ts">
	import type { FormattedMaterial } from '$lib/types';

	export let materials: FormattedMaterial[] = [];
</script>

<ul class="list-disc pl-6 text-xl">
	{#each materials as material (material.title)}
		<li>
			{material.title}
			{#if material.variants}
				{#if material.variants.length === 1}
					&ndash;&nbsp;{material.variants[0].name}
					{#if material.variants[0].manufacturerNumber}
						{material.variants[0].manufacturerNumber}
					{/if}
					{#if material.variants[0].amountGrams}
						(c. {material.variants[0].amountGrams}&nbsp;g)
					{:else if material.variants[0].quantity}
						&nbsp;x&nbsp;{material.variants[0].quantity}
					{/if}
				{:else if material.variants.length > 1}
					<ul class="list-disc pl-6">
						{#each material.variants as variant}
							<li>
								{variant.name}
								{#if variant.manufacturerNumber}
									{variant.manufacturerNumber}
								{/if}
								{#if variant.amountGrams}
									(c. {variant.amountGrams}&nbsp;g)
								{:else if variant.quantity}
									&nbsp;x&nbsp;{variant.quantity}
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			{/if}
		</li>
	{/each}
</ul>
