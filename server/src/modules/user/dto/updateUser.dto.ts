import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ValidateEmail } from 'src/utils/emailLowercase';

export class UpdateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ValidateEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly surname: string;
  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;
}
