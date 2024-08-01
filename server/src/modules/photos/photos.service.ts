import { Inject, Injectable } from '@nestjs/common';
import { PHOTOS_REPOSITORY } from 'src/core/constants';
import { Photos } from './photos.entity';
import { PHotosDto } from './dto/photos.dto';

@Injectable()
export class PhotosService {
  constructor(
    @Inject(PHOTOS_REPOSITORY) private readonly photosRepository: typeof Photos,
  ) {}

  async createPhoto(photosDto: PHotosDto): Promise<Photos> {
    return await this.photosRepository.create(photosDto);
  }
}
