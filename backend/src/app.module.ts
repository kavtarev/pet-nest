import { UserFirstTaskUseCase } from './application/User/user-first-task.use-case';
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
import { RandomModule } from './random-module/app.module';
import { RandomModel } from './random-module/infrastructure/model';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleCustom } from './config/config.module';
import database from './config/config'
import { DatabaseModule } from './database-module/database.module';
import { CronModule } from './cron-module/cron-module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [database]
    }),
    DatabaseModule,
    // TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([
      models.AppModel,
      models.RoleModel,
      models.AuthModel,
      models.UserQuestModel,
      models.UserTaskModel,
      RandomModel,
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60000s' },
    }),
    HttpModule,
    RandomModule,
    CronModule,
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
    UserFirstTaskUseCase,
  ],
})
export class App implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthCheck)
      .exclude('auth(.*)', 'random(.*)')
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
