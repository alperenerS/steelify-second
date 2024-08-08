import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDto } from '../user/dto/user.dto';
import { AuthDto } from './dto/auth.dto';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(user: UserDto) {
    const phoneNumberCheck = await this.userService.findOneByPhoneNumber(
      user.phoneNumber,
    );
    if (phoneNumberCheck) {
      throw new BadRequestException(
        'There is an account with this phone number !',
      );
    }

    const newUser = await this.userService.createUser({
      ...user,
    });

    const { ...result } = newUser['dataValues'];

    return { data: result };
  }

  async login(authDto: AuthDto) {
    const existingUser = await this.userService.findByEmail(authDto.email);

    if (!existingUser) {
      throw new NotFoundException('User can not be found, Wrong Email!');
    }

    const comparePassword = await bcrypt.compare(
      authDto.password.trim(),
      existingUser.password.trim(),
    );

    if (!comparePassword) {
      throw new BadRequestException('Wrong Password !');
    }

    const access_token = await this.signToken(
      existingUser.id,
      existingUser.email,
      existingUser.name,
      existingUser.surname,
      existingUser.phoneNumber,
    );

    return { data: existingUser, access_token: access_token };
  }

  signToken(
    id: number,
    email: string,
    name: string,
    surname: string,
    phoneNumber: string,
  ): Promise<string> {
    const payload = {
      id,
      email,
      name,
      surname,
      phoneNumber,
    };

    return this.jwtService.signAsync(payload);
  }

  async findUserExist(email: string): Promise<User> {
    return await this.userService.findByEmail(email);
  }

  async forgotPassword(
    newPassword: string,
    confirmPassword: string,
    mail: string,
  ) {
    if (newPassword !== confirmPassword) {
      throw new BadRequestException('Passwords does not match !');
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 12);

    return await this.userService.forgotPassword(newHashedPassword, mail);
  }
}
