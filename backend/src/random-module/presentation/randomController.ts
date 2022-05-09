import { Body, Controller, Get, Post } from "@nestjs/common";
import axios from "axios";
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
    const result = await this.randomUsecase.addRandom(body)
    return result
  }

  @Get('/axios')
  async getne() {

    const client = axios.create({baseURL: 'http://localhost:3100'});
    // client.interceptors.response.use((data) => { console.log(data.data);
    // })
    const res = await client.post('/random/insert', {randomString: 'rnd'});
    return res.data;
  }
}
