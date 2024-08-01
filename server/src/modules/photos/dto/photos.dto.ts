import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PHotosDto {
  @IsNotEmpty()
  @IsNumber()
  readonly user_id: number;

  @IsNotEmpty()
  @IsString()
  readonly image_link: string;

  @IsNotEmpty()
  @IsString()
  readonly comments: string;
  @IsNotEmpty()
  @IsString()
  readonly errors: string;
}
