<script>
	import GFade from '@/lib/GFade.svelte';
	import GLayoutContainer from '@/lib/GLayoutContainer.svelte';
	import GText from '@/lib/GText.svelte';
	import { AnimationTypes } from '@/models';
	import { TextElementType } from '@/models/GText.d';
</script>

<div>
	<GLayoutContainer>
		<GText variant={TextElementType.H1} class="text-center">“Opening Up With The Gentleman”</GText>
	</GLayoutContainer>

	<GFade container animation={AnimationTypes.FADE}>
		<GText class="text-center">
			Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
			Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
			impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
			y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió
			500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando
			esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas
			"Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de
			autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
		</GText>
	</GFade>

	<GFade container animation={AnimationTypes.FADE}>
		<GText class="text-center">
			Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
			Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
			impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
			y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió
			500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando
			esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas
			"Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de
			autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
		</GText>
	</GFade>
</div>

<style>
	div {
		max-width: 35rem;
		margin-inline: auto;
	}
</style>
