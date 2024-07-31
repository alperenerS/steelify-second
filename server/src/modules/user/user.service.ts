import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../core/constants';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async createUser(dto: UserDto): Promise<User> {
    return await this.userRepository.create(dto);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email: email } });
  }
}
