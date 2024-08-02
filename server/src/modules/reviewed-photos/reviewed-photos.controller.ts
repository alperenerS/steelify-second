import { Controller } from '@nestjs/common';
import { ReviewedPhotosService } from './reviewed-photos.service';

@Controller('api/reviewed-photos')
export class ReviewedPhotosController {
  constructor(private readonly reviewedPhotosService: ReviewedPhotosService) {}
}
