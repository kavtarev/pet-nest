import axios, { AxiosInstance } from "axios";
import { Server } from "http";

export class TestClient<TDto, Tresponse> {
  private route: string;

  private client: AxiosInstance;
  private baseURL: string;


  constructor({ server, route }: { server: Server; route: string }) {
    const serverAddress: any = server.address();
    const port = String(serverAddress.port);
    this.baseURL = `http://localhost:${port}`;
    this.client = axios.create({ baseURL: this.baseURL });
    this.route = route;
  }

  async request(dto: TDto): Promise<Tresponse> {
    const req = await this.client.post(this.route, dto,)
    return req.data;
  }

  async failRequest(dto: TDto): Promise<Tresponse> {
    const req = await this.client.post(this.route, dto).catch()
    return req.data;
  }
}