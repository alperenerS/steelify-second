import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { photosProvider } from './photos.provider';
import { usersProvider } from '../user/user.provider';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [PhotosService, ...photosProvider, ...usersProvider],
  controllers: [PhotosController],
  exports: [PhotosService],
})
export class PhotosModule {}
