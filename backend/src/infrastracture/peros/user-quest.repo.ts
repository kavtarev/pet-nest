import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import * as model from './../models'
import { Repository } from 'typeorm';

@Injectable()
export class UserQuestRepo {
  constructor(
    @InjectRepository(model.UserQuestModel)
    private readonly userQuestRepoData: Repository<model.UserQuestModel>
  ) { }

  async create(userQuest: model.UserQuestModel) {
    return this.userQuestRepoData.save(userQuest)
  }
}