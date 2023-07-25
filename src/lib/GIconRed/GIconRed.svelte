<script lang="ts">
	import GText from '@/lib/GText.svelte';
	import { onMount } from 'svelte';
	import type { GIconData, GLinkData } from '@/types/GPanel.model';
	import NoHayIcon from '$lib/assets/icon/NoHayIcon/NoHayIcon.svg';

	export let links: GLinkData[];
	console.log('GIconRed->', links);
	let icons: GIconData[] = [];
	const url = '/data/icons.json';
	onMount(async () => {
		try {
			const response = await fetch(url);
			if (response.ok) {
				icons = await response.json();
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
			{#if link.red && !icons.some((icon) => icon.name === link.red)}
				<img class="img" src={NoHayIcon} alt={link.red} />
			{:else}
				{#each icons.filter((icon) => icon.name === link.red) as icon}
					<img class="img" src={icon.path} alt={link.red} />
				{/each}
			{/if}
		</a>
	{/each}
{:else}
	<GText class="text-center">No se cargaron los icons en GIconRed.</GText>
{/if}
