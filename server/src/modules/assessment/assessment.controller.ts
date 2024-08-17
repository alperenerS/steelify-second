import {
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
import { AssessmentService } from './assessment.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { uploadFile } from 'src/utils/uploadFile';
import { UserService } from '../user/user.service';
import { AssessmentDto } from './dto/assessment.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { ReviewedPhotosService } from '../reviewed-photos/reviewed-photos.service';

@UseGuards(JwtGuard)
@Controller('api/assessment')
export class AssessmentController {
  constructor(
    private readonly assessmentService: AssessmentService,
    private readonly userService: UserService,
    private readonly reviewedPhotosService: ReviewedPhotosService,
  ) {}

  @Post('send')
  @UseInterceptors(FileInterceptor('reviewed_image_link'))
  async createAssessment(
    @UploadedFile() reviewed_image_link: Express.Multer.File,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    try {
      const { image_id, comments, errors, status } = req.body;

      if (!reviewed_image_link) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: 'No files uploaded' });
      }
      const token = req.headers.authorization.split(' ')[1];
      const loggedUserId = await this.userService.findUserWhoLoggedIn(token);

      const azureUrl = await uploadFile(
        reviewed_image_link.buffer,
        `reviewedImage/${loggedUserId}/${reviewed_image_link.originalname}`,
      );


      const photographer =
        await this.assessmentService.getPhotographerId(image_id);

      const reviewedImageDto: AssessmentDto = {
        photographer: photographer,
        image_id: image_id,
        comments: comments,
        errors: errors,
        reviewer: loggedUserId,
        reviewed_image_link: azureUrl,
      };

      const reviewedImage =
        await this.assessmentService.createAssessment(reviewedImageDto);

      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Successfully Created !', data: reviewedImage });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Get('myComments')
  async getUserComments(@Req() req: Request, @Res() res: Response) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const loggedUserId = await this.userService.findUserWhoLoggedIn(token);

      const userComments = await this.assessmentService.getUserComments(
        loggedUserId,
      );

      return res.status(HttpStatus.OK).json({
        message: 'User comments successfully fetched!',
        data: userComments,
      });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}
