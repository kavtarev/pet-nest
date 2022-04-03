import { IsNotEmpty, IsString, IsNumber, IsUUID, IsOptional } from 'class-validator';

export class RandomControllerDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  public randomString?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  public randomNumber?: number;

  @IsUUID()
  @IsOptional()
  @IsNotEmpty()
  public randomUuid?: string;
}
