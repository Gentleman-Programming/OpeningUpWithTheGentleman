<script lang="ts">
	import GText from '../GText/GText.svelte';
	import './styles/GFooter.css';
  const year = new Date().getFullYear();
</script>
<section class="footer">
  <hr class=divider />
  <GText class="text-center">
    Made with 💜 by the community Gentleman Programming⟨™⟩ {year} - <legend>
      los derechos reservados.
    </legend>
  </GText>
</section>

