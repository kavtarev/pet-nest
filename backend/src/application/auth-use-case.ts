import { AuthUserDto } from './../presentation/dto/auth.user.dto';
import { Injectable } from "@nestjs/common";
import { AuthRepo } from "src/infrastracture/peros/auth.repository";
import { JwtService } from '@nestjs/jwt';

@Injectable()

export class AuthUseCase {
  constructor(
    private readonly authRepo: AuthRepo,
    private readonly jwtService: JwtService,

  ) { }
  async createUser(user: AuthUserDto) {
    const createdUser = await this.authRepo.createUser(user)

    const payload = { sub: createdUser.id };
    const token = await this.jwtService.sign(payload)
    console.log('pay', payload);

    return {
      access_token: token,
    };
  }
}