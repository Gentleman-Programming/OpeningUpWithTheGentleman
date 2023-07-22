<script lang="ts">
	import { onMount } from 'svelte';
	import { AnimationTypes } from '../models';
	import type { CustomElement } from '../models/intersector.model';
	import { customIntersectionObserver } from '../utilities/intersector.utility';

	export let animation = AnimationTypes.FADE;

	let customElement = {} as CustomElement;
	let animate = false;
	let componentRef: HTMLDivElement;

	onMount(() => {
		customElement.element = componentRef;
		customElement.callBack = () => {
			animate = true;
		};
		const id = customIntersectionObserver.observeElement(customElement);
		return () => customIntersectionObserver.unobserveElement(id);
	});
</script>

<div bind:this={componentRef} style="opacity: {animate ? 1 : 0}; transition: opacity 1500ms;">
	<slot />
</div>
