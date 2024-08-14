import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Put,
  Req,
  Res,
  UnauthorizedException,
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

  @Put('forgotPassword')
  async forgotPassword(@Req() req: Request, @Res() res: Response) {
    const { newPassword, confirmPassword, mail } = req.body;

    const newPasswd = await this.authService.forgotPassword(
      newPassword,
      confirmPassword,
      mail,
    );

    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Password Successfully Updated !', data: newPasswd });
  }

  @Get('verify-token')
  async verifyToken(@Req() req: Request, @Res() res: Response) {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token'ı al

    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }

    try {
      const isValid = await this.authService.verifyToken(token);

      if (isValid) {
        return res
          .status(HttpStatus.OK)
          .json({ message: 'Token is valid' });
      } else {
        throw new UnauthorizedException('Invalid token');
      }
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
