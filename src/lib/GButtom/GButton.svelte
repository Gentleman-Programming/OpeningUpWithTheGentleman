<script lang="ts">
	import { ButtonTypes, ButtonFontSize } from '../../models';
	import './styles/GButton.css';

	export let type: ButtonTypes = ButtonTypes.BUTTON;
	export let fontSize: ButtonFontSize = ButtonFontSize.MEDIUM;
</script>

<button class="button" {type} style="font-size: {fontSize};">
	<slot />
</button>
