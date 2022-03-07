import { UserFirstTaskUseCase } from './../application/User/user-first-task.use-case';
import { CreateQuestUseCase } from './../application/User/create-quest.use-case';
import { Controller, Get, Req } from "@nestjs/common";
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(
    private readonly createQuestUseCase: CreateQuestUseCase,
    private readonly userFirstTaskUseCase: UserFirstTaskUseCase,
  ) { }
  @Get('/create')
  async create(
    @Req() req: Request
  ) {
    const id = req.body.id;
    const data = await this.createQuestUseCase.execute(id, 'initial')
    console.log('dddddddd', data);
  }
  @Get('/first')
  async first(
    @Req() req: Request
  ) {
    const id = req.body.id;
    const data = await this.userFirstTaskUseCase.execute(id, '0')
    console.log('dddddddd', data);
  }
  @Get('/second')
  async second(
    @Req() req: Request
  ) {
    const id = req.body.id;
    const data = await this.createQuestUseCase.execute(id, 'initial')
    console.log('dddddddd', data);
  }
  @Get('/third')
  async third(
    @Req() req: Request
  ) {
    const id = req.body.id;
    const data = await this.createQuestUseCase.execute(id, 'initial')
    console.log('dddddddd', data);
  }
  @Get('/forth')
  async forth(
    @Req() req: Request
  ) {
    const id = req.body.id;
    const data = await this.createQuestUseCase.execute(id, 'initial')
    console.log('dddddddd', data);
  }
  @Get('/fifth')
  async fifth(
    @Req() req: Request
  ) {
    const id = req.body.id;
    const data = await this.createQuestUseCase.execute(id, 'initial')
    console.log('dddddddd', data);
  }
}