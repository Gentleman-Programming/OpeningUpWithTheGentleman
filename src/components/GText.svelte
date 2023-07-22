<script lang="ts">
	type Element = 'p' | 'h1' | 'h2';

	export let variant: Element = 'p';
</script>

<svelte:element this={variant} class="shared {$$restProps.class || ''}">
	<slot />
</svelte:element>

<style>
	.shared {
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
