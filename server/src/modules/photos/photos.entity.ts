import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';

@Table
export class Photos extends Model<Photos> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;
  @BelongsTo(() => User)
  user: User;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image_link: string;

  @Column({
    type: DataType.STRING,
  })
  comments: string;

  @Column({
    type: DataType.STRING,
  })
  errors: string;
}
