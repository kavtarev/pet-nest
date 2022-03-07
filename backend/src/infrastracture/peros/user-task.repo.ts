import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import * as model from './../models'
import { getManager, Repository } from 'typeorm';
import { UserTask } from 'src/application/Domain/userTask/entity';
import { classToPlain, instanceToPlain, plainToClass } from 'class-transformer';

@Injectable()
export class UserTaskRepo {
  constructor(
    @InjectRepository(model.UserTaskModel)
    private readonly userTaskDataRepo: Repository<model.UserTaskModel>,

    @InjectRepository(model.AuthModel)
    private readonly userAuthDataRepo: Repository<model.AuthModel>
  ) { }

  async save(user, userTasks: UserTask[]) {
    await getManager().transaction(async (transactionalEntityManager) => {
      await transactionalEntityManager.save(user);
      await transactionalEntityManager.save(this.mapToModel(userTasks));
    });
    // await this.userTaskDataRepo.save(tasks)
  }

  mapToModel(tasks: UserTask[]): model.UserTaskModel[] {
    return tasks.map(task => {
      return plainToClass(model.UserTaskModel, instanceToPlain(task));
    })
    // return tasks.map(task => {
    //   return {
    //     id: task.id,
    //     status: task.status,
    //     userId: task.userId,
    //     taskId: task.task.id,
    //     data: task.data
    //   }
    // })
  }
}