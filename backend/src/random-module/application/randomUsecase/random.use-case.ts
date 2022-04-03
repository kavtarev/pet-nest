import { Injectable, Logger } from '@nestjs/common';
import { RandomControllerDto } from 'src/random-module/presentation/dto/randomController.dto';
import { RandomRepository } from './../../infrastructure/randomRepository';

@Injectable()
export class RandomUsecase {

  private readonly logger = new Logger(RandomUsecase.name)

  constructor(
    private randomRepo: RandomRepository,

  ) {}

  public async addRandom(body: RandomControllerDto) {
    this.logger.log('fuck you fucking fuck')
    return this.randomRepo.addRandom(body)
  }
}
