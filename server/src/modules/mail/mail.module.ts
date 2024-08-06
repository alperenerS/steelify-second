import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { PinModule } from '../pin/pin.module';
import { pinProvider } from '../pin/pin.provider';
import { UserModule } from '../user/user.module';
import { usersProvider } from '../user/user.provider';

@Module({
  imports: [MailerModule, PinModule, UserModule],
  providers: [MailService, ...pinProvider, ...usersProvider],
  controllers: [MailController],
})
export class MailModule {}
