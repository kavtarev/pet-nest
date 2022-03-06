import { AuthUseCase } from './../application/auth-use-case';
import { AuthUserDto } from './dto/auth.user.dto';
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from 'src/application/autg.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authUseCase: AuthUseCase
  ) { }
  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser() {
    return 'users'
  }

  @Post()
  async createUser(@Body() user: AuthUserDto) {
    return this.authUseCase.createUser(user)
  }
}