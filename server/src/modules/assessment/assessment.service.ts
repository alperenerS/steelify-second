import { Inject, Injectable } from '@nestjs/common';
import {
  ASSESSMENT_REPOSITORY,
  PHOTOS_REPOSITORY,
  SEQUELIZE,
} from 'src/core/constants';
import { Assessment } from './assessment.entity';
import { AssessmentDto } from './dto/assessment.dto';
import { Photos } from '../photos/photos.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AssessmentService {
  constructor(
    @Inject(ASSESSMENT_REPOSITORY)
    private readonly assessmentRepository: typeof Assessment,
    @Inject(PHOTOS_REPOSITORY) private readonly photoRepository: typeof Photos,
    @Inject(SEQUELIZE) private readonly sequelize: typeof Sequelize,
  ) {}

  async createAssessment(dto: AssessmentDto): Promise<Assessment> {
    return await this.assessmentRepository.create(dto);
  }

  async getPhotographerId(image_id: number) {
    const image = await this.photoRepository.findByPk(image_id);
    return image.user_id;
  }

  async getRandomPhoto(): Promise<Assessment[]> {
    return await this.assessmentRepository.findAll({
      order: [this.sequelize.fn('RANDOM')],
      limit: 10,
    });
  }
}
