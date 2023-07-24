<script lang="ts">
	import GText from '@/lib/GText.svelte';
	import GCard from '@/lib/GCard/GCard.svelte';
	import { onMount } from 'svelte';
	import { TextElementType } from '@/models/GText.d';
	import type { GCardData } from '@/types/GPanel';
	import './styles/GPanel.css';

	let cards: GCardData[] = [];
	const url = './src/lib/data/panelists.json';
	onMount(async () => {
		try {
			const response = await fetch(url);
			if (response.ok) {
				cards = await response.json();
			} else {
				throw new Error('Error fetching data: ' + response.status);
			}
		} catch (error) {
			console.error(error);
		}
	});
</script>

{#if cards.length > 0}
	<div class="title">
		<GText variant={TextElementType.H2} class="text-center">Presentador.</GText>
	</div>
		<section class="panel">
		{#each cards.filter((card) => card.rol === 'presentador') as card (card.id)}
			<GCard {card} />
		{/each}
	</section>
	<GText variant={TextElementType.H2} class="text-center">Invitados.</GText>
	<section class="panel">
		{#each cards.filter((card) => card.rol === 'invitado') as card (card.id)}
			<GCard {card} />
		{/each}
	</section>
{:else}
	<GText class="text-center">No se pudo cargar los datos en GPanel.</GText>
{/if}
