import { Inject, Injectable } from '@nestjs/common';
import { PHOTOS_REPOSITORY, SEQUELIZE } from 'src/core/constants';
import { Photos } from './photos.entity';
import { PHotosDto } from './dto/photos.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class PhotosService {
  constructor(
    @Inject(PHOTOS_REPOSITORY) private readonly photosRepository: typeof Photos,
    @Inject(SEQUELIZE) private readonly sequelize: typeof Sequelize,
  ) {}

  async createPhoto(photosDto: PHotosDto): Promise<Photos> {
    return await this.photosRepository.create(photosDto);
  }

  async getRandomPhoto(): Promise<Photos[]> {
    return await this.photosRepository.findAll({
      order: [this.sequelize.fn('RANDOM')],
      limit: 10,
    });
  }
}
