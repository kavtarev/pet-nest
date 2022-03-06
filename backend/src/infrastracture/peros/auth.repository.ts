import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import * as models from '../models'
import { AuthUserDto } from 'src/presentation/dto/auth.user.dto';

@Injectable()
export class AuthRepo {

  constructor(
    @InjectRepository(models.AuthModel)
    private readonly authDataRepo: Repository<models.AuthModel>) {
  }

  async createUser(user: AuthUserDto) {
    return await this.authDataRepo.save(user)
  }
  async findById(id) {
    return await this.authDataRepo.findOne(id)
  }
}