import { Inject, Injectable } from '@nestjs/common';
import { REVIEWEDPHOTOS_REPOSITORY } from 'src/core/constants';
import { ReviewedPhotos } from './reviewed-photos.entity';
import { reviewedPhotosDto } from './dto/reviewedPhotos.dto';

@Injectable()
export class ReviewedPhotosService {
  constructor(
    @Inject(REVIEWEDPHOTOS_REPOSITORY)
    private readonly reviewedPhotosRepository: typeof ReviewedPhotos,
  ) {}

  async getReviewedPhotos(userId: number): Promise<ReviewedPhotos[]> {
    return await this.reviewedPhotosRepository.findAll({
      where: { user_id: userId },
    });
  }

  async createReviewedPhotos(dto:reviewedPhotosDto):Promise<ReviewedPhotos>{
    return this.reviewedPhotosRepository.create(dto);
  }
}
