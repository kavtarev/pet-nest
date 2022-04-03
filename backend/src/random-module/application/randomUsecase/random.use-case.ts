import { Injectable } from '@nestjs/common';
import { RandomControllerDto } from 'src/random-module/presentation/dto/randomController.dto';
import { RandomRepository } from './../../infrastructure/randomRepository';

@Injectable()
export class RandomUsecase {
  constructor(
    private randomRepo: RandomRepository
  ) {}

  public async addRandom(body: RandomControllerDto) {
    return this.randomRepo.addRandom(body)
  }
}
