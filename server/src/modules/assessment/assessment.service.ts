import { Inject, Injectable } from '@nestjs/common';
import { ASSESSMENT_REPOSITORY, PHOTOS_REPOSITORY } from 'src/core/constants';
import { Assessment } from './assessment.entity';
import { AssessmentDto } from './dto/assessment.dto';
import { Photos } from '../photos/photos.entity';

@Injectable()
export class AssessmentService {
  constructor(
    @Inject(ASSESSMENT_REPOSITORY)
    private readonly assessmentRepository: typeof Assessment,
    @Inject(PHOTOS_REPOSITORY) private readonly photoRepository: typeof Photos,
  ) {}

  async createAssessment(dto: AssessmentDto): Promise<Assessment> {
    return await this.assessmentRepository.create(dto);
  }

  async getPhotographerId(image_id:number){
    const image = await this.photoRepository.findByPk(image_id);
        return image.user_id;
  }

  
}
