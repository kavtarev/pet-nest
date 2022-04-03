import { plainToInstance } from 'class-transformer';
import { EntityRepository } from "typeorm";
import { RepositoryModel } from "../application/domain/repositoryModel";
import { RandomControllerDto } from "../presentation/dto/randomController.dto";
import * as model from './model';

@EntityRepository(model.RandomModel)
export class RandomRepository extends RepositoryModel<model.RandomModel> {
  public async addRandom(body: RandomControllerDto) {
    return super.repository.save(this.mapToModel(body))
  }

  private mapToModel(body: RandomControllerDto) {
    return plainToInstance(model.RandomModel, body)
  }
}
