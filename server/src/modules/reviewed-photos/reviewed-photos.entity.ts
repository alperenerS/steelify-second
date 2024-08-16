import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { Assessment } from '../assessment/assessment.entity';
import { Photos } from '../photos/photos.entity';

export enum StatusEnum {
  OK = 'OK',
  NOK = 'NOK',
}

@Table
export class ReviewedPhotos extends Model<ReviewedPhotos> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Assessment)
  @Column({ type: DataType.INTEGER, allowNull: false })
  reviewed_image_id: number;

  @BelongsTo(() => Assessment)
  reviewedImage: Assessment;

  @ForeignKey(() => Photos)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  image_id: number;

  @BelongsTo(() => Photos)
  image: Photos;

  @Column({
    type: DataType.ENUM(...Object.values(StatusEnum)),
    allowNull: false,
  })
  status: StatusEnum;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  reviewed_image_link: string;
}
