import { UserQuestStatus } from '../../../common/interface';
import { QuestEntity } from './../quest/entity';
import { nanoid } from 'nanoid'
import { UserTask } from '../userTask/entity';
import { UserTaskStatus } from 'src/common/user-task-status';

interface IuserQuest {
  id: string,
  userId: string,
  quest: QuestEntity,
  status: UserQuestStatus,
  questId: string,
}

export class UserQuestEntity {
  public readonly userId: string
  public readonly id: string
  public readonly questId: string
  public readonly quest: QuestEntity
  public readonly status: UserQuestStatus

  constructor(params: IuserQuest) {
    Object.assign(this, params)
  }

  getTasks() {
    return this.quest.getTasks()
  }

  createUserTasks() {
    const tasks = this.getTasks()
    return tasks.map((task) => {
      return new UserTask({
        id: nanoid(),
        userId: this.userId,
        task,
        status: UserTaskStatus.LOCKED,
        data: {}
      })
    })
  }
}