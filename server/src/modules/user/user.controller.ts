import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('api/user')
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

  @Put('updateData')
  async updateOwnData(
    @Body() user: UpdateUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const token = req.headers.authorization.split(' ')[1];
    const response = await this.userService.updateOwnData(user, token);

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully created !', data: response });
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: number, @Res() res: Response) {
    const data = await this.userService.deleteUser(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'User Successfully Deleted !', data: data });
  }

  @Put('updatePasswd/:id')
  async resPassword(
    @Param('id') id: number,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const { newPassword, confirmPassword } = req.body;
    const newPasswd = await this.userService.resPassword(
      newPassword,
      confirmPassword,
      id,
    );

    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Password Successfully Changed !', data: newPasswd });
  }
}
