import { Quest } from './../../../infrastracture/initial-json/initial-config';
import { Task } from './../task/entity';

export class QuestEntity {
  public id: string
  private name: string
  private graph: Task[]

  constructor(params: Quest) {
    Object.assign(this, params)
  }

  getQuestId() {
    return this.id
  }

  getQuestName() {
    return this.name
  }

  getTasks() {
    return this.graph
  }
}