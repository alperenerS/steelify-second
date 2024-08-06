import { Address } from 'nodemailer/lib/mailer';

export type PinEmailDto = {
  from?: Address | string;
  to: Address[] | string;
  subject: string;
  html: string;
  text?: string;
};
