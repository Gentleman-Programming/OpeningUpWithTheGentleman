<script lang="ts">
	import GPanelist from '@/lib/GPanelist/GPanelist.svelte';
	import GText from '@/lib/GText.svelte';
	import type { GCardData } from '@/types/GPanel.model';
	import './styles/GCard.css';

	export let card: GCardData;
	console.log('GCard->', card);
</script>

{#if card}
	<articule class="articule">
		<GPanelist {card} />
	</articule>
{:else}
	<GText class="text-center">No se pudo cargar los datos en GCard.</GText>
{/if}
