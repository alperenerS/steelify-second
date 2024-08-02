import { Inject, Injectable } from '@nestjs/common';
import { ASSESSMENT_REPOSITORY } from 'src/core/constants';
import { Assessment } from './assessment.entity';
import { AssessmentDto } from './dto/assessment.dto';

@Injectable()
export class AssessmentService {
  constructor(
    @Inject(ASSESSMENT_REPOSITORY)
    private readonly assessmentRepository: typeof Assessment,
  ) {}

  async createAssessment(dto: AssessmentDto): Promise<Assessment> {
    return await this.assessmentRepository.create(dto);
  }
}
