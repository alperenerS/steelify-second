import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './modules/user/user.module';
import { PhotosModule } from './modules/photos/photos.module';

@Module({
  imports: [AuthModule, DatabaseModule, UserModule, PhotosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
