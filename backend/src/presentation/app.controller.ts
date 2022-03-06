import { UserDto } from './dto/user.dto';
import { AppUseCase } from './../application/app-use-case';
import { Body, Controller, Get, Post } from "@nestjs/common";
import * as models from '../infrastracture/models';

@Controller()
export class AppController {
  constructor(private readonly appUseCase: AppUseCase) { }
  @Get()
  async getOne() {
    const res = await this.appUseCase.getOne()
    return res
  }

  @Post()
  async createUser(
    @Body() user: UserDto
  ): Promise<models.AppModel> {
    return await this.appUseCase.createUser(user)
  }
}