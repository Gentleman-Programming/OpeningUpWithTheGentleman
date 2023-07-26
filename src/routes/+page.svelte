<script>
	import GAnimate from '@/lib/GAnimate.svelte';
	import GButton from '@/lib/GButton.svelte';
	import GFooter from '@/lib/GFooter/GFooter.svelte';
	import GPanel from '@/lib/GPanel/GPanel.svelte';
	import GParallax from '@/lib/GParallax.svelte';
	import GText from '@/lib/GText.svelte';
	import GTop from '@/lib/GTop/GTop.svelte';
	import { AnimationTypes, ButtonFontSize } from '@/models';
	import { TextElementType } from '@/models/GText.model';
</script>

<GParallax>“Opening Up With The Gentleman”</GParallax>

<div class="main-container">
	<GAnimate container animation={AnimationTypes.FADE}>
		<GText variant={TextElementType.H2} class="text-center">
			Bienvenido a este espacio donde TÚ eres el contenido
		</GText>
	</GAnimate>

	<GAnimate container animation={AnimationTypes.FADE}>
		<div class="main-section">
			<img class="image" src="/img/alan.jpg" alt="alan-with-glow" />

			<GText variant={TextElementType.H3} class="text-center">
				¿ Qué es "Opening Up With The Gentleman"?
			</GText>

			<GText class="text-center">
				En este espacio, ¡TÚ eres el contenido! 😃 Normalmente, la gente ve lo que haces y te busca
				por cómo lo haces, pero... ¿pueden decir que conocen la cara detrás de la máscara? 🎭
				"Opening Up With The Gentleman" es un espacio destinado no solo para que tu comunidad te
				conozca mejor, sino también para que otras personas descubran una visión más personal e
				íntima de ti. 🌟😊
			</GText>
		</div>
	</GAnimate>

	<GAnimate container animation={AnimationTypes.FADE}>
		<GText variant={TextElementType.H3} class="text-center">
			¿ Quienes ya confirmaron su participación ?
		</GText>

		<GPanel />

		<GFooter />
	</GAnimate>

	<GAnimate animation={AnimationTypes.FADE}>
		<div class="button-container">
			<GText variant={TextElementType.H3}>¿ Quieres participar ?</GText>

			<GButton fontSize={ButtonFontSize.LARGE} href="/contact">Click Aquí !</GButton>
		</div>
	</GAnimate>
</div>
<GTop />

<style>
	.image {
		-moz-box-shadow: 0 0 10px #fff;
		-webkit-box-shadow: 0 0 10px #fff;
		box-shadow: 0px 0px 10px #fff;
		border-radius: 1rem;
	}
	.main-container {
		padding: 5rem 0;
	}
	.button-container {
		display: flex;
		flex-flow: row;
		gap: 1rem;
	}
	@media (max-width: 768px) {
		.button-container {
			flex-flow: column;
			gap: 2rem;
			justify-content: center;
			text-align: center;
		}
	}

	.main-section {
		display: flex;
		flex-flow: column;
		gap: 5rem;
	}
	div {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		padding: 0rem 2rem;
	}
</style>
