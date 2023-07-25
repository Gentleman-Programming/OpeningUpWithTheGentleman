<script>
	import { TextElementType } from '@/models/GText.model';
	import GText from './GText.svelte';

	export let img = '/img/header-bg.jpg';

	let scroll = 0;
</script>

<svelte:window bind:scrollY={scroll} />

<section
	style="--position: center {scroll * 0.2}px;--scale: {1 + scroll * 0.0002};--bg-image: url({img});"
>
	<GText variant={TextElementType.H1} class="text-center"><slot /></GText>
</section>

<style>
	section {
		min-height: 100vh;
		min-height: 100dvh;
		position: relative;
		display: grid;
		place-items: center;
		overflow: hidden;
		isolation: isolate;
	}

	section::before {
		content: '';
		width: 100%;
		height: 100%;
		z-index: -1;
		position: absolute;
		background-image: var(--bg-image);
		background-size: cover;
		background-position: var(--position);
		background-repeat: no-repeat;
		transform: scale(var(--scale));
		filter: blur(2px) brightness(0.8);
	}
</style>
