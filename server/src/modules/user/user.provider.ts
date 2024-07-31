import { USER_REPOSITORY } from '../core/constants';
import { User } from '../user/user.entity';

export const usersProvider = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
