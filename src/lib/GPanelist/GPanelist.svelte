<script lang="ts">
	import GText from '@/lib/GText.svelte';
	import GIconRed from '@/lib/GIconRed/GIconRed.svelte';
	import { TextElementType } from '@/models/GText.model';
	import type { GCardData, GLinkData } from '@/types/GPanel.model';
	import './styles/GPanelist.css';

	export let card: GCardData;
	let links: GLinkData[] = [...card.links];
	console.log('GPanelList->', links);
</script>

{#if card}
	<GText variant={TextElementType.H3} class="text-center">
		<GText class="text-center">{card.date}</GText>
		<GText class="text-center">{card.time}</GText>
	</GText>
	<figure class="figure">
		<img class="img" src={card.img} alt={card.name} />
		<figcaption class="figcaption">
			<p>{card.name}</p>
			<div class="icons">
				<GIconRed {links} />
			</div>
		</figcaption>
	</figure>
{:else}
	<GText class="text-center">No se pudo cargaron los panelists en GCard.</GText>
{/if}
