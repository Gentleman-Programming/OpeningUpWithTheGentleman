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
		font-size: max(8vw, 5rem);
	}

	h2 {
		font-size: max(6vw, 4rem);
	}

	h3 {
		font-size: max(4vw, 3rem);
	}

	p {
		font-size: clamp(1.7rem, 1.7rem + 2vw, 1.7rem);
	}
</style>
