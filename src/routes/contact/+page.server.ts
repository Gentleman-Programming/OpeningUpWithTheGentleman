import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { sendMail } from '@/services/mailer.service';

export const actions = {
  contact: async ({ request }) => {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    const social_networks = data.getAll('social');
    const concatData = Object.values(formData).concat(social_networks);
    if (concatData.some((input) => String(input).trim().length < 2)) {
      return fail(422, {
        success: false,
        error: 'Llena correctamente todos los campos'
      });
    }

    const html = `
		<table>
			<tr>
				<td style="padding:10px">
				Nombre: 
				</td>
				<td style="padding:10px">
				${formData.name}
				</td>
			</tr>
			<tr>
				<td style="padding:10px">
				Email: 
				</td>
				<td style="padding:10px">
				${formData.email}
				</td>
			</tr>
			<tr>
				<td style="padding:10px">
				Redes Sociales: 
				</td>
				<td style="padding:10px">
				${social_networks.join(', ')}
				</td>
			</tr>
			<tr>
				<td style="padding:10px">
				Mensaje: 
				</td>
				<td style="padding:10px">
				${formData.message}
				</td>
			</tr>
		</table>
		`;

    try {
      const formEmail = `${formData.email}`;
      const id = await sendMail({ html, email: formEmail });
      if (!id) {
        return fail(422, {
          success: false,
          message: 'Ha ocurrido un error, intente nuevamente'
        });
      }
      return {
        success: true,
        message: 'Tus datos se han enviado correctamente'
      };
    } catch (error: any) {
      console.log(error);
      return fail(422, {
        success: false,
        error: error.message
      });
    }
  }
} satisfies Actions;
