import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';
import { Expose } from "class-transformer";

@Expose()
export class AuthUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}