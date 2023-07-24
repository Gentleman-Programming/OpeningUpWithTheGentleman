<script lang="ts">
	import GText from '@/lib/GText.svelte';
	import GPanelist from '@/lib/GPanelist/GPanelist.svelte';
	import { TextElementType } from '@/models/GText.d';
	import type { GCardData } from '@/types/GPanel';
	import './styles/GCard.css';

	export let card: GCardData;
	console.log('GCard->',card);
</script>

{#if card}
			<articule class="articule">
				<GPanelist {card}/>
			</articule>
{:else}
	<GText class="text-center">No se pudo cargar los datos en GCard.</GText>
{/if}
