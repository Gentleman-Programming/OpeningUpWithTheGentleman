<script lang="ts">
	import { TextElementType } from '@/models/GText.model';

	export const id: string = '';
	export let variant: TextElementType = TextElementType.P;
</script>

<svelte:element this={variant} {id} class="text-element {$$restProps.class || ''}">
	<slot />
</svelte:element>

<style>
	.text-element {
		color: #fff;
		text-shadow: 0 4px 4px #89024a;
		font-family: VT323;
	}
	h1 {
		font-size: 4rem;
	}

	h2 {
		font-size: 2.25rem;
	}

	h3 {
		font-size: 2rem;
	}

	p {
		font-weight: 1rem;
	}
</style>
