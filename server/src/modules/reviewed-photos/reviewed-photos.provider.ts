import { REVIEWEDPHOTOS_REPOSITORY } from '../../core/constants';
import { ReviewedPhotos } from './reviewed-photos.entity';

export const reviewedPhotosProvider = [
  {
    provide: REVIEWEDPHOTOS_REPOSITORY,
    useValue: ReviewedPhotos,
  },
];
