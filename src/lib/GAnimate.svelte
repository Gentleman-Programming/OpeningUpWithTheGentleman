<script lang="ts">
	import { onMount } from 'svelte';

	import type { CustomElement } from '../models/intersector.model';
	import { customIntersectionObserver } from '../utilities/intersector.utility';
	import { AnimationTypes } from '@/models/animation.model';

	export let animation = AnimationTypes.FADE;

	export let container: boolean = false;
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

{container}
<div class={container ? 'section-container' : ''} bind:this={componentRef}>
	{#if animate}
		<div transition:animation={{ duration: 1500 }}>
			<slot />
		</div>
	{/if}
</div>
