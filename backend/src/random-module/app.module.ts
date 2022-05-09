import { TypeOrmModule } from '@nestjs/typeorm';
import { RandomUsecase } from './application/randomUsecase/random.use-case';
import { RandomRepository } from './infrastructure/randomRepository';
import { RandomController } from './presentation/randomController';
import { Module } from "@nestjs/common";
import * as model from './infrastructure/model'

@Module({
  imports:[
    TypeOrmModule.forFeature(
     [model.RandomModel],
    )
  ],
  providers:[
    RandomUsecase,
    RandomRepository
  ],
  controllers:[
    RandomController,
  ]
})
export class RandomModule {}
