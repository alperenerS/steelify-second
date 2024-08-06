import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { PinService } from './pin.service';
import { Request, Response } from 'express';

@Controller('api/pin')
export class PinController {
  constructor(private readonly pinService: PinService) {}

  @Post('validate')
  async validatePin(@Req() req: Request, @Res() res: Response) {
    const { mail, pin } = req.body;

    const isValidate = await this.pinService.validatePin(mail, pin);

    return res.status(HttpStatus.OK).json({ data: isValidate });
  }
}
