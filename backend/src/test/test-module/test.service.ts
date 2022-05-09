import { RandomModule } from './../../random-module/app.module';
import { RandomUsecase } from './../../random-module/application/randomUsecase/random.use-case';
import { RandomModel } from './../../random-module/infrastructure/model/random.model';
import { RandomController } from './../../random-module/presentation/randomController';
import { RandomRepository } from './../../random-module/infrastructure/randomRepository';
import { moduleTO, imports } from './../../app.module';
import { ConfigModuleCustom } from './../../config/config.module';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { DynamicModule, ForwardReference, INestApplication, Type } from '@nestjs/common';
import { DatabaseModule } from './../../database-module/database.module';
import { TestClient } from '../test-client/test-client';
import { ConfigModule } from '@nestjs/config';
import  database  from './../../config/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const setup = async (
  modules: (Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference<any>)[] = [],
  routes: string[]
) => {
    const moduleRef = await Test.createTestingModule({
     imports: [...imports,
      ...modules ],
    }).compile();

    const app = moduleRef.createNestApplication();
    await app.init();
    await app.listen(0);

   const clients = routes.map(route => {
    const client = new TestClient({server: app.getHttpServer(), route})
    return client
   });

   return {
     clients,
     close: async () => app.close(),
     app
   }
};
