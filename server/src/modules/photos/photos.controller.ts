import {
  Body,
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { uploadFile } from 'src/utils/uploadFile';
import { PHotosDto } from './dto/photos.dto';
import { UserService } from '../user/user.service';
import { JwtGuard } from '../auth/guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('api/photos')
export class PhotosController {
  constructor(
    private readonly photoService: PhotosService,
    private readonly userService: UserService,
  ) {}

  @Post('send')
  @UseInterceptors(FileInterceptor('image_link'))
  async createPhoto(
    @UploadedFile() image_link: Express.Multer.File,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { comments, errors } = req.body;

      if (!image_link) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: 'No files uploaded' });
      }

      const azureUrl = await uploadFile(
        image_link.buffer,
        `Photos/${image_link.originalname}`,
      );

      const token = req.headers.authorization.split(' ')[1];
      const loggedUserId = await this.userService.findUserWhoLoggedIn(token);

      const photosDto: PHotosDto = {
        comments: comments,
        errors: errors,
        image_link: azureUrl,
        user_id: loggedUserId,
      };

      const photo = await this.photoService.createPhoto(photosDto);

      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Successfully Created !', data: photo });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Get('random')
  async getRandomPhoto(@Res() res: Response) {
    const randomPhotos = await this.photoService.getRandomPhoto();

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully Fetched !', data: randomPhotos });
  }
}
