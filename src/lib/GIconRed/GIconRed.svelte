<script lang="ts">
	import GText from '@/lib/GText.svelte';
	import type { GIconData, GLinkData } from '@/types/GPanel.model';
	import { onMount } from 'svelte';

	export let links: GLinkData[];
	console.log('GIconRed->', links);
	let icons: GIconData[] = [];
	const url = '/data/icons.json';
	let mappedIcons = new Map();
	onMount(async () => {
		try {
			const response = await fetch(url);
			if (response.ok) {
				icons = await response.json();
				mappedIcons = new Map(icons.map((icon) => [icon.name, icon.path]));
				console.log('GIconRed->', icons);
			} else {
				throw new Error('Error fetching data: ' + response.status);
			}
		} catch (error) {
			console.error('GIconRed->', error);
		}
	});
</script>

{#if links}
	{#each links as link}
		<a href={link.url} target="_blank">
			{#if link.red && !mappedIcons.has(link.red)}
				<img class="img" src={'/icon/NoHayIcon/NoHayIcon.svg'} alt={link.red} />
			{:else}
				<img class="img" src={mappedIcons.get(link.red)} alt={link.red} />
			{/if}
		</a>
	{/each}
{:else}
	<GText class="text-center">No se cargaron los icons en GIconRed.</GText>
{/if}
