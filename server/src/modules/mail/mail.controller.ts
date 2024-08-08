import {
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { MailService } from './mail.service';
import { Request, Response } from 'express';
import { SendEmailDto } from './mail.interface';
import { PinService } from '../pin/pin.service';
import { PinEmailDto } from './pinMail.interface';

@Controller('api/mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private readonly pinService: PinService,
  ) {}

  @Post('resPasswdPin')
  async resPasswdPin(
    @Body() emailDto: SendEmailDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userExist = await this.mailService.findUserByEmail(emailDto.to);

    if (!userExist) {
      throw new NotFoundException('Wrong Email !');
    }

    const pin = await this.pinService.generatePin(emailDto.to);

    const dto: PinEmailDto = {
      from: { name: 'Steelify', address: 'info@steelify.com' },
      to: emailDto.to,
      subject: emailDto.subject,
      html: `<p>Sayın kullanıcı,</p><p>PIN kodunuz: <strong>${pin.pin}</strong></p><p>Lütfen bu kodu kullanarak şifrenizi sıfırlayın. Kod 2 dakika geçerlidir.</p>`,
      text: `Sayın kullanıcı, PIN kodunuz: ${pin.pin}. Lütfen bu kodu kullanarak şifrenizi sıfırlayın. Kod 2 dakika geçerlidir.`,
    };

    const result = await this.mailService.sendEmail(dto);

    return res.status(HttpStatus.CREATED).json({
      message: 'Mail Successfully Sent!',
      data: result,
    });
  }

  @Put('resPin')
  async sendNewPin(@Req() req: Request, @Res() res: Response) {
    const mail = req.body.mail;
    const oldPin = await this.pinService.updateNewPin(mail);

    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Pin Updated !', data: oldPin });
  }
}
