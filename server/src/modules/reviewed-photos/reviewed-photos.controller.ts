import {
  BadRequestException,
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
      message: 'ReviewedPhotos Successfully Fetched!',
      data: myReviewedPhotos,
    });
  }

  @Get('comparedOkPhotos')
  async getComparedOkPhotos(@Req() req: Request, @Res() res: Response) {
    const image_id = req.body.image_id;

    if (!image_id) {
      throw new BadRequestException('ImageId Required!');
    }

    const comparedPhotos =
      await this.reviewedPhotosService.compareOkReviewedphotos(image_id);

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully Fetched!', data: comparedPhotos });
  }

  @Get('comparedNokPhotos')
  async comparedNokPhotos(@Req() req: Request, @Res() res: Response) {
    const image_id = req.body.image_id;

    if (!image_id) {
      throw new BadRequestException('ImageId Required!');
    }

    const comparedPhotos =
      await this.reviewedPhotosService.compareNOKReviewedPhotos(image_id);

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully Fetched!', data: comparedPhotos });
  }
}
