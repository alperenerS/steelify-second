import { ASSESSMENT_REPOSITORY, PHOTOS_REPOSITORY } from '../../core/constants';
import { Assessment } from './assessment.entity';

export const assessmentProvider = [
  {
    provide: ASSESSMENT_REPOSITORY,
    useValue: Assessment,
  },
];
