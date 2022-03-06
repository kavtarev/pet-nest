import { Expose, Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { RoleDto } from "./role.dto";

@Expose()
export class UserDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RoleDto)
  roles: RoleDto[];

  @IsString()
  @IsNotEmpty()
  task: string;
}