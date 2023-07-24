<script lang="ts">
  import { onMount } from 'svelte';
	import GText from '@/lib/GText.svelte';
	import type { GIconData, GLinkData } from '@/types/GPanel';

	export let links: GLinkData[];
	console.log('GLink->', links);
	let icons: GIconData[] = [];
  const url = './src/lib/data/icons.json';
	onMount(async () => {
		try {
			const response = await fetch(url);
			if (response.ok) {
				icons = await response.json();
				console.log('GLink->', icons);
			} else {
				throw new Error('Error fetching data: ' + response.status);
			}
		} catch (error) {
			console.error(error);
		}
	});
</script>

{#if links}
  {#each links as link (link.red)}
    {#each icons as icon (icon.name)}
      {#if icon.name === link.red}
        <a href={link.url}>
          <img class="img" src={icon.path} alt={link.red} />
        </a>
      {/if}
    {/each}
  {/each}
{:else}
  <GText class="text-center">No se cargaron los icons en GIconRed.</GText>
{/if}

