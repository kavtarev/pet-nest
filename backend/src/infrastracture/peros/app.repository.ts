import { UserDto } from './../../presentation/dto/user.dto';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as models from '../models'

@Injectable()
export class AppRepository {

  constructor(
    @InjectRepository(models.AppModel)
    private readonly appModelRepository: Repository<models.AppModel>
  ) { }

  async getAll() {
    return this.appModelRepository.find()
  }

  async createUser(user: UserDto): Promise<models.AppModel> {
    const res = await this.appModelRepository.save(user);
    return res;
  }
}