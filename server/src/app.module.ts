import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './modules/user/user.module';
import { PhotosModule } from './modules/photos/photos.module';
import { AssessmentModule } from './modules/assessment/assessment.module';
import { ReviewedPhotosModule } from './modules/reviewed-photos/reviewed-photos.module';
import { MailModule } from './modules/mail/mail.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    UserModule,
    PhotosModule,
    AssessmentModule,
    ReviewedPhotosModule,
    MailModule,
    MailerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
