import { UserDto } from './../presentation/dto/user.dto';
import { AppRepository } from './../infrastracture/peros/app.repository';
import { Injectable } from "@nestjs/common";
import * as models from '../infrastracture/models'
import { HttpService } from '@nestjs/axios';
@Injectable()
export class AppUseCase {

  constructor(private readonly appRepo: AppRepository,
    private readonly httpService: HttpService) {

  }
  async getOne() {
    const request = 'https://jsonplaceholder.typicode.com/todos/1'
    const result = (await this.httpService.get(request).toPromise()).data;

    return result
  }

  async createUser(user: UserDto): Promise<models.AppModel> {
    const res = await this.appRepo.createUser(user)
    return res
  }
}