import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
// import database from './../config/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      // imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('host'),
        port: +configService.get('port'),
        username: configService.get('user'),
        password: configService.get('password'),
        database: configService.get('db'),
        "entities": ["./dist/**/*.model{.ts,.js}"],
        synchronize: true,
        logging: configService.get('logging')
      }),
    })
  ]
})
export class DatabaseModule {}