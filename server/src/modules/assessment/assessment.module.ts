import { Module } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentController } from './assessment.controller';

@Module({
  providers: [AssessmentService],
  controllers: [AssessmentController]
})
export class AssessmentModule {}
