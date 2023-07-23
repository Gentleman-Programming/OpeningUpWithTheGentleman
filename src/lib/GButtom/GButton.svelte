<script lang="ts">
	import { ButtonTypes, ButtonFontSize } from '../../models';

	export let type: ButtonTypes = ButtonTypes.BUTTON;
	export let fontSize: ButtonFontSize = ButtonFontSize.MEDIUM;
</script>

<button class="button" {type} style="font-size: {fontSize};">
	<slot />
</button>

<style>
	.button {
		padding: 0.8rem 1.5rem;
		background-color: var(--secondary);
		outline: none;
		border: none;
		border-radius: 16px;
		color: var(--text-dark);
		cursor: pointer;
		flex-shrink: 0;
		transition: background-color 0.5s ease;
		text-shadow: 0px 4px 4px 4px #89024a;
	}
	.button:hover {
		background-color: var(--secondary-dark);
	}
</style>
