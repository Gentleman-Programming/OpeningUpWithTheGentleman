<script>
	import GButton from '$lib/GButton.svelte';
	import { ButtonTypes } from '../models';
	import '../global.css';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<GButton type={ButtonTypes.SUBMIT}>Click Aquí</GButton>
