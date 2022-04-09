import { Module } from "@nestjs/common";
import { CronUsecase } from "./cron-use-case";
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  providers:[CronUsecase],
  imports:[ScheduleModule.forRoot()]
})

export class CronModule {}   

