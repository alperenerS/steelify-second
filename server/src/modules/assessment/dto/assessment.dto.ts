import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AssessmentDto {
  @IsNumber()
  @IsNotEmpty()
  readonly photographer: number;

  @IsNumber()
  @IsNotEmpty()
  readonly image_id: number;

  @IsNumber()
  @IsNotEmpty()
  readonly reviewer: number;

  @IsString()
  readonly comments: string;

  @IsString()
  @IsNotEmpty()
  readonly errors: string;

  @IsString()
  readonly reviewed_image_link: string;
}
