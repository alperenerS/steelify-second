import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { USER_REPOSITORY } from '../../core/constants';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async findOneByPhoneNumber(phoneNumber: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { phoneNumber: phoneNumber },
    });
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

  async getUserProfile(user_id: number): Promise<User> {
    return await this.userRepository.findByPk(user_id, {
      attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'id'] },
    });
  }

  async updateOwnData(user: UpdateUserDto, token: string) {
    const decodedToken = this.jwtService.verify(token, {
      publicKey: process.env.JWTKEY,
    });
    const userId = decodedToken.id;
    const existingUser = this.userRepository.findByPk(userId);

    if (!existingUser) {
      throw new NotFoundException('User can not be found !');
    }

    const newUserDto: UpdateUserDto = {
      email: user.email,
      name: user.name,
      surname: user.surname,
      phoneNumber: user.phoneNumber,
    };

    return await this.userRepository.update(
      {
        email: newUserDto.email,
        name: newUserDto.name,
        surname: newUserDto.surname,
        phoneNumber: newUserDto.phoneNumber,
      },
      { where: { id: userId } },
    );
  }

  async deleteUser(id: number) {
    return await this.userRepository.destroy({ where: { id: id } });
  }

  async resPassword(newPassword: string, confirmPassword: string, id: number) {
    if (newPassword !== confirmPassword) {
      throw new BadRequestException('Passwords does not match !');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    return await this.userRepository.update(
      { password: hashedPassword.toString() },
      { where: { id: id } },
    );
  }

  async findUserWhoLoggedIn(token: string) {
    const decodedToken = this.jwtService.verify(token, {
      publicKey: process.env.JWTKEY,
    });
    const userId = decodedToken.id;
    const existingUser = this.userRepository.findByPk(userId);

    if (!existingUser) {
      throw new NotFoundException('User can not be found !');
    }
    return userId;
  }
}
