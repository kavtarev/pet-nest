import { UserTaskRepo } from './../../infrastracture/peros/user-task.repo';
import { BadRequestException, Injectable } from "@nestjs/common";
import { UserTaskStatus } from 'src/common/user-task-status';

@Injectable()
export class UserFirstTaskUseCase {
  constructor(
    private readonly userTaskRepo: UserTaskRepo
  ) { }

  async execute(userId: string, taskId: string) {
    const userTask = await this.userTaskRepo.findOneByUserId(userId, taskId)

    if (!userTask || userTask.status === UserTaskStatus.LOCKED) {
      throw new BadRequestException('no such task for this user')
    }
    userTask.finish()
    await this.userTaskRepo.saveOne(userTask)

    // todo start next task save data to user
  }
}