import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(5, 50)
  pseudo: string;

  @IsEmail()
  @Length(4, 75)
  mail: string;
}