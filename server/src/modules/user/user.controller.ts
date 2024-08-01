import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('api/user')
@UseGuards(JwtGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('info/:id')
  async getUserInfo(@Param('id') id: number, @Res() res: Response) {
    const user = await this.userService.getUserProfile(id);

    if (!user) {
      throw new NotFoundException('User can not be found !');
    }

    return res
      .status(HttpStatus.OK)
      .json({ message: 'User Info Fetched Successfully', data: user });
  }
}
