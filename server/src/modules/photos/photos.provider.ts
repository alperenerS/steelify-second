import { PHOTOS_REPOSITORY } from '../../core/constants';
import { Photos } from './photos.entity';

export const photosProvider = [
  {
    provide: PHOTOS_REPOSITORY,
    useValue: Photos,
  },
];
