import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

type senMailProps = {
	html: string;
	email: string;
};

export async function sendMail({ html, email }: senMailProps) {
	/* 
	TODO: 
	from: replace from to form email.
	to: replace email Gentleman
	*/
	const resp = await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'gian_franco_08@hotmail.com',
		subject: 'Opening Up With The Gentleman',
		html
	});

	return resp.id;
}
