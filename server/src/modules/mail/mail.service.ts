import { Inject, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from '../user/user.entity';
import Mail from 'nodemailer/lib/mailer';
import { SendEmailDto } from './mail.interface';

@Injectable()
export class MailService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async mailTransport() {
    const transporter = nodemailer.createTransport({
      host: 'live.smtp.mailtrap.io',
      port: 587,
      secure: false, // true for port, false for other ports
      auth: {
        user: 'api',
        pass: 'f4328e91ec43736217ecf1a08e15518c',
      },
    });
    return transporter;
  }

  async sendEmail(dto: SendEmailDto) {
    const { from, to, subject, html } = dto;

    const transport = await this.mailTransport();

    const options: Mail.Options = {
      from: from ?? {
        name: 'Steelify',
        address: 'info@steelify.com',
      },
      to: Array.isArray(to) ? to.map(addr => typeof addr === 'string' ? addr : addr.address).join(', ') : to,
      subject: subject,
      html: html,
    };

    const result = await transport.sendMail(options);
    return result;
  }

  async findUserByEmail(email: any) {
    const user = await this.userRepository.findOne({ where: { email: email } });
    return user;
  }
}
