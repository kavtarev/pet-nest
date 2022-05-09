import { RandomControllerDto } from './../random-module/presentation/dto/randomController.dto';
import { INestApplication } from '@nestjs/common';
import { RandomModule } from "./../random-module/app.module"
import { TestClient } from './test-client/test-client';
import { setup } from "./test-module/test.service"

describe('random test', () => {
  let client: TestClient<RandomControllerDto, any>;

  let app: INestApplication;

  let close: () => Promise<void>;

  beforeAll(async () => {
    ({clients: [client], app, close } =  await setup(
      [RandomModule],['random/insert']));
  })

  it('tryout', async () => {
    const res = await client.request({randomNumber: 546})
    expect(res).toBeDefined()
  })

  afterAll(async () => {
    await close();
  })
})