import { Module } from '@nestjs/common';
import { ReviewedPhotosService } from './reviewed-photos.service';
import { ReviewedPhotosController } from './reviewed-photos.controller';
import { reviewedPhotosProvider } from './reviewed-photos.provider';

@Module({
  providers: [ReviewedPhotosService, ...reviewedPhotosProvider],
  controllers: [ReviewedPhotosController],
})
export class ReviewedPhotosModule {}
