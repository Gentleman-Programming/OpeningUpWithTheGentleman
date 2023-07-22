<script lang="ts">
	import { onMount } from 'svelte';
	import { AnimationTypes } from '../models';
	import type { CustomElement } from '../models/intersector.model';
	import { customIntersectionObserver } from '../utilities/intersector.utility';

	export let animation = AnimationTypes.FADE;

	let customElement = {} as CustomElement;
	let animate = false;
	let componentRef: HTMLDivElement;
	let id = '';

	onMount(() => {
		customElement.element = componentRef;
		customElement.callBack = () => {
			animate = true;
		};
		id = customIntersectionObserver.observeElement(customElement);
		return () => customIntersectionObserver.unobserveElement(id);
	});
</script>

<div bind:this={componentRef}>
	{JSON.stringify(animate)}
	{#if animate}
		<div transition:animation={{ duration: 1500 }}>
			<slot />
		</div>
	{/if}
</div>
