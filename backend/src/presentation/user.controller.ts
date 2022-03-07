import { CreateQuestUseCase } from './../application/User/create-quest.use-case';
import { Controller, Get, Req } from "@nestjs/common";
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(
    private readonly createQuestUseCase: CreateQuestUseCase
  ) { }
  @Get('create')
  async create(
    @Req() req: Request
  ) {
    const id = req.body.id;
    const data = await this.createQuestUseCase.execute(id, 'initial')
    console.log('dddddddd', data);

  }
}