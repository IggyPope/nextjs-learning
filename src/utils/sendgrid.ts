import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } from '@/constants/variables';

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  birthday: string;
};

export const sendMail = async ({
  firstName,
  lastName,
  email,
  address,
  birthday,
}: Props) => {
  if (!SENDGRID_API_KEY || !SENDGRID_SENDER_EMAIL) {
    throw new Error('Sendgrid variables are not defined');
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg: sgMail.MailDataRequired = {
    to: [email, SENDGRID_SENDER_EMAIL],
    from: SENDGRID_SENDER_EMAIL,
    subject: 'Contact details received',
    html: `<ul>
            <li>First name: ${firstName}</li>
            <li>Last name: ${lastName}</li>
            <li>Email: ${email}</li>
            <li>Address: ${address}</li>
            <li>Birthday: ${birthday}</li>
          </ul>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch {
    throw new Error('An error occurred while sending the email');
  }
};
