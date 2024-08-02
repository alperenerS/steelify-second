import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from 'src/modules/user/user.entity';
import { Photos } from 'src/modules/photos/photos.entity';
import { Assessment } from 'src/modules/assessment/assessment.entity';
import { ReviewedPhotos } from 'src/modules/reviewed-photos/reviewed-photos.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV as any) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);

      sequelize.addModels([User, Photos, Assessment, ReviewedPhotos]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
