import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import database from './config';

@Module({
  imports:[ConfigModule.forRoot({
    isGlobal: true,
    load:[database]
  })]
})
export class ConfigModuleCustom{}
