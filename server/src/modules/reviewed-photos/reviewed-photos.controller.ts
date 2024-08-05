import {
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ReviewedPhotosService } from './reviewed-photos.service';
import { UserService } from '../user/user.service';
import { Request, Response } from 'express';
import { JwtGuard } from '../auth/guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('api/reviewed-photos')
export class ReviewedPhotosController {
  constructor(
    private readonly reviewedPhotosService: ReviewedPhotosService,
    private readonly userService: UserService,
  ) {}

  @Get('myReviewedPhotos')
  async getReviewedPhotos(@Req() req: Request, @Res() res: Response) {
    const token = req.headers.authorization.split(' ')[1];
    const loggedUserId = await this.userService.findUserWhoLoggedIn(token);

    const myReviewedPhotos =
      await this.reviewedPhotosService.getReviewedPhotos(loggedUserId);


    return res.status(HttpStatus.OK).json({
      message: 'ReviewedPHotos Successfully Fetched !',
      data: myReviewedPhotos,
    });
  }
}
