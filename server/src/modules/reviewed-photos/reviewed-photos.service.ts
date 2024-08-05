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

  async createReviewedPhotos(dto: reviewedPhotosDto): Promise<ReviewedPhotos> {
    return this.reviewedPhotosRepository.create(dto);
  }

  async compareOkReviewedphotos(image_id: number): Promise<ReviewedPhotos[]> {
    const comparedOKPhotos = await this.reviewedPhotosRepository.findAll({
      where: { image_id: image_id, status: 'OK' },
    });
    return comparedOKPhotos;
  }

  async compareNOKReviewedPhotos(image_id: number) {
    const comparedNOKPhotos = await this.reviewedPhotosRepository.findAll({
      where: { image_id: image_id, status: 'NOK' },
    });
    return comparedNOKPhotos;
  }
}
