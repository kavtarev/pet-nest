import { QuestEntity } from './../../application/Domain/quest/entity';
import { Task } from './../../application/Domain/task/entity';
import { Graph, InitilConfig, Quest } from './../initial-json/initial-config';

export class Storage {
  private quest: QuestEntity[]
  constructor(
    private readonly config: InitilConfig
  ) {
    this.quest = this.mapQuest()
  }

  getQuest() {
    return this.quest
  }
  getQuestNodes() {
    return this.quest.flatMap(quest => quest.getTasks())
  }

  getQuestById(id: string): QuestEntity {
    return this.quest.find((quest) => quest.id === id)
  }

  mapQuest(): QuestEntity[] {

    return this.config.quest.map(({ graph, ...params }) => {
      const questTasks = this.mapTasks(graph)
      return new QuestEntity({
        graph: questTasks,
        ...params
      })
    })
  }

  mapTasks(graph: Graph[]) {
    return graph.map((task) => {
      return new Task(task)
    })
  }
}