<script>
	import GPanel from '@/lib/GPanel/GPanel.svelte';
	import GFooter from '@/lib/GFooter/GFooter.svelte';
	import GText from '@/lib/GText.svelte';
	import GTop from '@/lib/GTop/GTop.svelte';
	import GParallax from '@/lib/GParallax.svelte';
	import { TextElementType } from '@/models/GText.model';
</script>

<GParallax>“Opening Up With The Gentleman”</GParallax>
<div>
	<GText variant={TextElementType.H2} class="text-center">
		Bienvenido a este espacio donde TÚ eres el contenido
	</GText>
	<GText variant={TextElementType.H3} class="text-center">
		¿ Qué es "Opening Up With The Gentleman"?
	</GText>
	<GText class="text-center">
		En este espacio, ¡TÚ eres el contenido! 😃 Normalmente, la gente ve lo que haces y te busca por
		cómo lo haces, pero... ¿pueden decir que conocen la cara detrás de la máscara? 🎭 "Opening Up
		With The Gentleman" es un espacio destinado no solo para que tu comunidad te conozca mejor, sino
		también para que otras personas descubran una visión más personal e íntima de ti. 🌟😊
	</GText>
	<GText variant={TextElementType.H3} class="text-center">
		¿ Quienes ya confirmaron su participación ?
	</GText>
</div>
<div>
	<GPanel />
</div>
<div>
	<GFooter />
</div>
<GTop />

<style>
	div {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		padding: 0rem 2rem;
	}
</style>
