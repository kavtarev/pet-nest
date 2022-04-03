import { Body, Controller, Post } from "@nestjs/common";
import { RandomUsecase } from "../application/randomUsecase/random.use-case";
import { RandomControllerDto } from "./dto/randomController.dto";

@Controller('/random')
export class RandomController {
  constructor(
    private randomUsecase: RandomUsecase
  ) {}

  @Post('insert')
  public async insertData(
    @Body() body: RandomControllerDto
  ) {
    return this.randomUsecase.addRandom(body)
  }
}
