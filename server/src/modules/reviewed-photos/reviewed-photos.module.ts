import { Module } from '@nestjs/common';
import { ReviewedPhotosService } from './reviewed-photos.service';
import { ReviewedPhotosController } from './reviewed-photos.controller';
import { reviewedPhotosProvider } from './reviewed-photos.provider';
import { usersProvider } from '../user/user.provider';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [
    ReviewedPhotosService,
    ...reviewedPhotosProvider,
    ...usersProvider,
  ],
  controllers: [ReviewedPhotosController],
  exports: [ReviewedPhotosService],
})
export class ReviewedPhotosModule {}
