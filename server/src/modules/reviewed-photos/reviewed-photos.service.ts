import { Inject, Injectable } from '@nestjs/common';
import { REVIEWEDPHOTOS_REPOSITORY } from 'src/core/constants';
import { ReviewedPhotos } from './reviewed-photos.entity';
import { reviewedPhotosDto } from './dto/reviewedPhotos.dto';
import { Photos } from '../photos/photos.entity';

@Injectable()
export class ReviewedPhotosService {
  constructor(
    @Inject(REVIEWEDPHOTOS_REPOSITORY)
    private readonly reviewedPhotosRepository: typeof ReviewedPhotos,
  ) {}

  async getReviewedPhotos(userId: number): Promise<reviewedPhotosDto[]> {
    const reviewedPhotos = await this.reviewedPhotosRepository.findAll({
      where: { user_id: userId },
      include: [
        {
          model: Photos,
          attributes: ['image_link'],
        },
      ],
    });

    return reviewedPhotos.map(photo => ({
      id: photo.id,
      user_id: photo.user_id,
      reviewed_image_id: photo.reviewed_image_id,
      image_id: photo.image_id,
      status: photo.status,
      reviewed_image_link: photo.image.image_link,
    }));
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
