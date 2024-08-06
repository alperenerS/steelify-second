import { PIN_REPOSITORY } from '../../core/constants';
import { Pin } from './pin.entity';

export const pinProvider = [
  {
    provide: PIN_REPOSITORY,
    useValue: Pin,
  },
];
