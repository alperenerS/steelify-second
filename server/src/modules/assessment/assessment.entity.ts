import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { Photos } from '../photos/photos.entity';

@Table
export class Assessment extends Model<Assessment> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  photographer: number;
  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Photos)
  @Column({ type: DataType.INTEGER, allowNull: false })
  image_id: number;
  @BelongsTo(() => Photos)
  photos: Photos;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  reviewer: number;
  @BelongsTo(() => User)
  reviewUser: User;

  @Column({
    type: DataType.STRING,
  })
  comments: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  errors: string;

  @Column({
    type: DataType.STRING,
  })
  reviewed_image_link: string;
}
