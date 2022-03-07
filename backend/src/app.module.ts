import { UserTaskRepo } from './infrastracture/peros/user-task.repo';
import { CreateQuestUseCase } from './application/User/create-quest.use-case';
import { UserController } from './presentation/user.controller';
import { StorageRepo } from './infrastracture/peros/storageRepo';
import { AuthUseCase } from './application/auth-use-case';
import { JwtStrategy } from './application/jtw-service';
import { AppRepository } from './infrastracture/peros/app.repository';
import { AppUseCase } from './application/app-use-case';
import { AppController } from './presentation/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as models from './infrastracture/models';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './presentation/auth.controller';
import { AuthRepo } from './infrastracture/peros/auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './application/autg.guard';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthCheck } from './presentation/auth.middleware';
import { UserQuestRepo } from './infrastracture/peros/user-quest.repo';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      username: 'ivan',
      password: '123qwe',
      database: 'ivan',
      // entities: [models.AppModel, models.RoleModel, models.AuthModel],
      entities: ['./dist/infrastracture/**/*.js'],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      models.AppModel,
      models.RoleModel,
      models.AuthModel,
      models.UserQuestModel,
      models.UserTaskModel,
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60000s' },
    }),
    HttpModule,
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [
    AppUseCase,
    AppRepository,
    AuthRepo,
    JwtStrategy,
    AuthUseCase,
    JwtAuthGuard,
    StorageRepo,
    UserQuestRepo,
    CreateQuestUseCase,
    UserTaskRepo,
  ],
})
export class App implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthCheck)
      // .exclude('auth(.*)')
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
