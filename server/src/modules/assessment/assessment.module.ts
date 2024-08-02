import { Module } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentController } from './assessment.controller';
import { assessmentProvider } from './assessment.provider';
import { PhotosModule } from '../photos/photos.module';
import { photosProvider } from '../photos/photos.provider';
import { UserModule } from '../user/user.module';
import { usersProvider } from '../user/user.provider';

@Module({
  imports: [PhotosModule, UserModule],
  providers: [
    AssessmentService,
    ...assessmentProvider,
    ...photosProvider,
    ...usersProvider,
  ],
  controllers: [AssessmentController],
})
export class AssessmentModule {}
