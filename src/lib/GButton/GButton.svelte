<script lang="ts">
	import { ButtonFontSize, ButtonTypes } from '@/models';
	import './styles/GButton.css'
	export let type: ButtonTypes = ButtonTypes.BUTTON;
	export let fontSize: ButtonFontSize = ButtonFontSize.MEDIUM;
	export let href: string = '';
	export let disabled = false;
</script>

{#if !!href}
	<a {href} class="button" {type} style="font-size: {fontSize};">
		<slot />
	</a>
{:else}
	<button on:click {disabled} class="button" {type} style="font-size: {fontSize};">
		<slot />
	</button>
{/if}

