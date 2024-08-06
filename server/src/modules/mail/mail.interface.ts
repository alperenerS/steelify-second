import { Address } from 'nodemailer/lib/mailer';

export type SendEmailDto = {
  from?: Address | string;
  to: Address[] | string;
  subject: string;
  html: string;
  text?: string;
};
