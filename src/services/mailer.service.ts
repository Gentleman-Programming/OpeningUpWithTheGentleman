import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);
export async function sendMail(html: string) {
	const resp = await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'gian_franco_08@hotmail.com',
		subject: 'Opening Up With The Gentleman',
		html
	});

	return resp.id;
}
