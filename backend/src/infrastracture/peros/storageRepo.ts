import { QuestEntity } from './../../application/Domain/quest/entity';
import { Injectable, OnModuleInit } from "@nestjs/common";
import { Storage } from "./storage";

const INITIAL_JSON = require('./../initial-json/initial-json')

@Injectable()
export class StorageRepo implements OnModuleInit {
  private storage: Storage
  onModuleInit() {
    this.initialize()
  }

  getQuestById(id: string): QuestEntity {
    return this.storage.getQuestById(id)
  }

  initialize() {
    this.storage = new Storage(INITIAL_JSON)
  }
}
