import {
  Controller,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';

@Controller('api/assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Post('send')
  @UseInterceptors(FileInterceptor('reviewed_image_link'))
  async createAssessment(
    @UploadedFile() reviewed_image_link: Express.Multer.File,
    @Res() res:Response,
    @Req() req:Request
  ) {
    try {
        const {} = req.body;
    } catch (error) {
        
    }
  }
}
