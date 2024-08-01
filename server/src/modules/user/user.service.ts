import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../core/constants';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async createUser(user: UserDto): Promise<User> {
    if (!user.password) {
      throw new Error('Password is required'); // veya başka bir işlem yapabilirsiniz
    }
    const hashedPassword = await bcrypt.hash(user.password, 12);

    const hashedUserDto: UserDto = {
      email: user.email,
      password: hashedPassword,
      name: user.name,
      surname: user.surname,
      phoneNumber: user.phoneNumber,
    };

    return await this.userRepository.create(hashedUserDto);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email: email } });
  }
}
