import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { EntityRepository, Repository } from "typeorm";
import { RepositoryModel } from "../application/domain/repositoryModel";
import { RandomControllerDto } from "../presentation/dto/randomController.dto";
import * as model from './model';

@Injectable()
export class RandomRepository {

  constructor(
    @InjectRepository(model.RandomModel)
    private randomRepo: Repository<model.RandomModel>
  ){}
  
  public async addRandom(body: RandomControllerDto) {
    return this.randomRepo.save(this.mapToModel(body))
  }

  private mapToModel(body: RandomControllerDto) {
    return plainToInstance(model.RandomModel, body)
  }
}
