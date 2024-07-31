import { IsEmail, IsNotEmpty, IsString, IsPhoneNumber } from 'class-validator';
import { ValidateEmail } from 'src/utils/emailLowercase';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ValidateEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}