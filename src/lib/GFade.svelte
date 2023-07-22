<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { CustomElement } from '../models';
	import { customIntersectionObserver } from '../utilities/intersector.utility';

	let customElement = {} as CustomElement;
	let animate = false;
	let componentRef: HTMLDivElement;

	onMount(() => {
		customElement.element = componentRef;
		customElement.callBack = () => {
			animate = true;
		};
		customIntersectionObserver.observeElement(customElement);
		return () => customIntersectionObserver.unobserveElement(customElement);
	});
</script>

<div bind:this={componentRef}>
	{#if animate}
		<div transition:fade={{ duration: 1500 }}>
			<slot />
		</div>
	{/if}
</div>
