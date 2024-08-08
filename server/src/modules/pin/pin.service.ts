import { Inject, Injectable } from '@nestjs/common';
import { PIN_REPOSITORY } from 'src/core/constants';
import { Pin } from './pin.entity';
import * as otpGenerator from 'otp-generator';
import { Op } from 'sequelize';

@Injectable()
export class PinService {
  constructor(@Inject(PIN_REPOSITORY) private readonly pin: typeof Pin) {}

  async generatePin(mail: any): Promise<Pin> {
    const pin = otpGenerator.generate(4, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const pinData = await this.pin.create({
      mail,
      pin,
    });

    return pinData;
  }

  async validatePin(mail: string, pin: string): Promise<boolean> {
    const pinData = await this.pin.findOne({
      where: { mail, pin },
    });

    if (!pinData) return false;

    const isExpired =
      new Date().getTime() - new Date(pinData.updatedAt).getTime() > 120000;

    if (isExpired) {
      //   await this.pin.destroy({ where: { mail, pin } });
      return false;
    }

    return true;
  }

  async updateNewPin(mail: string) {
    const oldPinData = await this.pin.findOne({ where: { mail: mail } });

    const isExpired =
      new Date().getTime() - new Date(oldPinData.updatedAt).getTime() > 120000;

    const pin = otpGenerator.generate(4, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    if (isExpired) {
      const updatedPin = await this.pin.update(
        { pin: pin },
        { where: { mail: mail } },
      );
      return updatedPin;
    }
    return;
  }

  //   async deleteExpiredPins(): Promise<void> {
  //     const expirationTime = 120000; // 2 minutes
  //     const expirationDate = new Date(Date.now() - expirationTime);

  //     await this.pin.destroy({
  //       where: {
  //         createdAt: {
  //           [Op.lt]: expirationDate,
  //         },
  //       },
  //     });
  //   }
}
