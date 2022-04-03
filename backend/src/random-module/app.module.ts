import { TypeOrmModule } from '@nestjs/typeorm';
import { RandomUsecase } from './application/randomUsecase/random.use-case';
import { RandomRepository } from './infrastructure/randomRepository';
import { RandomController } from './presentation/randomController';
import { Module } from "@nestjs/common";

@Module({
  imports:[
    TypeOrmModule.forFeature(
     [RandomRepository],
    )
  ],
  providers:[
    RandomUsecase,
  ],
  controllers:[
    RandomController,
  ]
})
export class RandomModule {}
