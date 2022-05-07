import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from '@nestjs/schedule';


@Injectable()
export class CronUsecase {
  private readonly logger = new Logger(CronUsecase.name);

  @Cron(CronExpression.EVERY_10_HOURS)
  handleCron() {
    this.logger.verbose('Called when the current second is 45');
  }
}
