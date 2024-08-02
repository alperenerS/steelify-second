import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';
import { Request, Response } from 'express';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: UserDto, @Res() res: Response) {
    const userExist = await this.authService.findUserExist(user.email);
    if (userExist) {
      throw new BadRequestException('User Already Exist !');
    }

    const newUser = await this.authService.register(user);
    

    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'User Successfully Created !', data: newUser });
  }

  @Post('login')
  async login(@Body() authDto: AuthDto, @Res() res: Response) {
    const response = await this.authService.login(authDto);

    return res
      .status(200)
      .json({ message: 'User Successfully Logged In !', data: response });
  }


}
