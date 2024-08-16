import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class reviewedPhotosDto {
  @IsNumber()
  @IsNotEmpty()
  readonly user_id: number;

  @IsNumber()
  @IsNotEmpty()
  readonly reviewed_image_id: number;

  @IsNumber()
  @IsNotEmpty()
  readonly image_id: number;

  @IsNotEmpty()
  readonly status: any;

  @IsString()
  @IsNotEmpty()
  readonly reviewed_image_link: string;
}
