import { UserTaskRepo } from './../../infrastracture/peros/user-task.repo';
import { UserQuestEntity } from './../Domain/userQuest/user-quest';
import { QuestEntity } from './../Domain/quest/entity';
import { UserQuestStatus } from '../../common/interface';
import { AuthRepo } from './../../infrastracture/peros/auth.repository';
import { Quest } from './../../infrastracture/initial-json/initial-config';
import { StorageRepo } from './../../infrastracture/peros/storageRepo';
import { ConflictException, Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { nanoid } from 'nanoid'
import { UserQuestRepo } from 'src/infrastracture/peros/user-quest.repo';

@Injectable()
export class CreateQuestUseCase {
  constructor(
    private readonly storageRepo: StorageRepo,
    private readonly authRepo: AuthRepo,
    private readonly userQuestRepo: UserQuestRepo,
    private readonly userTaskRepo: UserTaskRepo,
  ) { }

  async execute(userId: string, questId: string): Promise<any> {
    const user = await this.authRepo.findById(userId)

    if (!user) {
      throw new NotFoundException('no such user')
    }

    const quest = this.getQuestById(questId)

    if (!quest) {
      throw new NotFoundException('no such quest')
    }

    const isExists = await this.userQuestRepo.checkIfExists(questId, userId)

    if (isExists.length !== 0) {
      throw new NotAcceptableException("already have one")
    }

    const userQuest = new UserQuestEntity({
      id: nanoid(),
      questId: quest.id,
      userId,
      quest,
      status: UserQuestStatus.Active
    })

    const userTasks = userQuest.createUserTasks()
    userQuest.start(userTasks)
    await this.userTaskRepo.save(userTasks)

    return this.userQuestRepo.create(userQuest)

  }

  getQuestById(id: string): QuestEntity {
    return this.storageRepo.getQuestById(id)
  }
}