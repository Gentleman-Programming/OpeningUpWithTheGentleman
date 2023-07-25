<script lang="ts">
	import { enhance } from '$app/forms';
	import GButton from '@/lib/GButton.svelte';
	import GText from '@/lib/GText.svelte';
	import { ButtonTypes } from '@/models';
	import { TextElementType } from '@/models/GText.model.js';

	enum ACTION_SOCIAL_NETWORKS {
		'ADD' = 'add',
		'DECREMENT' = 'DECREMENT'
	}

	let counterSocialNetworks: string[] = [crypto.randomUUID()];

	let sending = false;
	export let form;

	$: {
		if (form?.error) {
			alert(form.error);
		}
		if (form?.message) {
			alert(form?.message);
		}
	}
	const handleSocialNetwork = (action: ACTION_SOCIAL_NETWORKS, item: string) => {
		switch (action) {
			case ACTION_SOCIAL_NETWORKS.ADD:
				counterSocialNetworks = [...counterSocialNetworks, item];
				break;
			case ACTION_SOCIAL_NETWORKS.DECREMENT:
				if (counterSocialNetworks.length === 1) break;
				counterSocialNetworks = counterSocialNetworks.filter((social) => social !== item);
				break;

			default:
				break;
		}
	};
</script>

<main>
	<div class="go-back">
		<GButton on:click={() => (window.location.href = '/')}>👈</GButton>
		<GText>Volver Atrás</GText>
	</div>

	<GText variant={TextElementType.H1} class="text-center">“Mandame un mensajito🫦”</GText>

	<div class="container">
		<form
			method="POST"
			action="?/contact"
			use:enhance={() => {
				sending = true;
				return async ({ update }) => {
					await update();
					sending = false;
				};
			}}
		>
			<GText variant={TextElementType.H2} class="text-center">Tus datos</GText>

			<div>
				<label for="name">Nombre</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					placeholder="Nombre/Alias"
					minlength="2"
					maxlength="30"
				/>
			</div>

			<div>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required placeholder="example@example.com" />
			</div>

			<fieldset>
				<legend> Redes Sociales </legend>
				{#each counterSocialNetworks as id (id)}
					<div class="social_network">
						<input
							type="text"
							name="social"
							placeholder="twitch, youtube, etc."
							required
							minlength="2"
						/>
						<GButton on:click={() => handleSocialNetwork(ACTION_SOCIAL_NETWORKS.DECREMENT, id)}
							>Borrar</GButton
						>
					</div>
				{/each}

				<GButton
					on:click={() => handleSocialNetwork(ACTION_SOCIAL_NETWORKS.ADD, crypto.randomUUID())}
				>
					<div class="add_input">
						<img src="/img/plus-icon.svg" width="100%" alt="" />
						Agregar
					</div>
				</GButton>
			</fieldset>

			<div>
				<label for="message">¿Cuáles son tus expectativas al comunicarte con el Gentleman?</label>
				<textarea name="message" id="message" />
			</div>

			<GButton disabled={sending} type={ButtonTypes.SUBMIT}>
				{sending ? 'Enviando' : 'Enviar'}
			</GButton>
		</form>
	</div>
</main>

<style>
	main {
		padding-top: 2rem;
		padding-block: 2rem;
	}

	.container {
		width: 90%;
		max-width: 42rem;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		.container {
			margin-top: 3rem;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 2rem 0;
	}

	@media (min-width: 768px) {
		form {
			padding: 0;
		}
	}

	form > div {
		display: flex;
		width: 100%;
		margin-bottom: 1rem;
		flex-direction: column;
		gap: 0.25rem;
	}

	form label,
	legend {
		color: #fff;
		font-size: 1.75rem;
	}

	legend {
		font-size: 2rem;
		padding: 0 1rem;
	}

	fieldset {
		width: 100%;
		padding: 1rem;
		border: 2px solid white;
		margin-bottom: 1rem;
	}

	form input,
	textarea {
		width: 100%;
		display: block;
		border: none;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.social_network {
		display: flex;
		gap: 0.5rem;
		/* grid-template-columns: repeat(2, 1fr); */
		margin-bottom: 1rem;
	}

	.add_input {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.go-back {
		padding: 1rem 5rem;
		display: flex;
		flex-flow: row;
		gap: 2rem;
		align-items: center;
	}
</style>
