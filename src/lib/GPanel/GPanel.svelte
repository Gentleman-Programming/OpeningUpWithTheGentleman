<script lang="ts">
	import GCard from '@/lib/GCard/GCard.svelte';
	import GText from '@/lib/GText.svelte';
	import { TextElementType } from '@/models/GText.model';
	import type { GCardData } from '@/types/GPanel.model';
	import { onMount } from 'svelte';
	import './styles/GPanel.css';

	let cards: GCardData[] = [];
	const url = '/data/panelists.json';
	onMount(async () => {
		try {
			const response = await fetch(url);
			if (response.ok) {
				cards = await response.json();
				console.log('GPanel->', cards);
			} else {
				throw new Error('Error fetching data: ' + response.status);
			}
		} catch (error) {
			console.error('GPanel->', error);
		}
	});
</script>

{#if cards.length > 0}
	<div class="title">
		<GText variant={TextElementType.H2} class="text-center">Presentador</GText>
	</div>
	<section class="panel">
		{#each cards.filter((card) => card.rol === 'presentador') as card (card.id)}
			<GCard {card} />
		{/each}
	</section>
	<GText variant={TextElementType.H2} class="text-center">Próximos Invitados</GText>
	<section class="panel">
		{#each cards.filter((card) => card.rol === 'invitado') as card (card.id)}
			<GCard {card} />
		{/each}
	</section>
{:else}
	<GText class="text-center">No se pudo cargar los datos en GPanel.</GText>
{/if}
