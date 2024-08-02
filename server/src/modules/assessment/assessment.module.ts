import { Module } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentController } from './assessment.controller';
import { assessmentProvider } from './assessment.provider';

@Module({
  providers: [AssessmentService, ...assessmentProvider],
  controllers: [AssessmentController],
})
export class AssessmentModule {}
