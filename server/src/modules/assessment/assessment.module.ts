import { Module } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentController } from './assessment.controller';
import { assessmentProvider } from './assessment.provider';
import { PhotosModule } from '../photos/photos.module';
import { photosProvider } from '../photos/photos.provider';
import { UserModule } from '../user/user.module';
import { usersProvider } from '../user/user.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/core/database/database.module';
import { ReviewedPhotosModule } from '../reviewed-photos/reviewed-photos.module';
import { reviewedPhotosProvider } from '../reviewed-photos/reviewed-photos.provider';

@Module({
  imports: [PhotosModule, UserModule, DatabaseModule, ReviewedPhotosModule],
  providers: [
    AssessmentService,
    ...assessmentProvider,
    ...photosProvider,
    ...usersProvider,
    ...reviewedPhotosProvider,
  ],
  controllers: [AssessmentController],
})
export class AssessmentModule {}
