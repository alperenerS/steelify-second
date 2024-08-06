import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Pin extends Model<Pin> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mail: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  pin: string;
}
