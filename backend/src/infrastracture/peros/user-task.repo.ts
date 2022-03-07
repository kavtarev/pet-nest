import { StorageRepo } from './storageRepo';
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
    private readonly userAuthDataRepo: Repository<model.AuthModel>,

    private readonly storageRepo: StorageRepo
  ) { }

  async saveOne(userTask: UserTask) {
    await this.userTaskDataRepo.save(this.mapToModel(userTask))
  }

  async save(userTasks: UserTask[]) {
    await this.userTaskDataRepo.save(userTasks.map(task => this.mapToModel(task)))
  }

  async findOneByUserId(userId: string, taskId: string) {
    const task = await this.userTaskDataRepo.findOne({ where: { userId, taskId } })
    return this.mapToDomain(task)
  }

  mapToDomain(userTask: model.UserTaskModel) {
    const taskNode = this.storageRepo.findNodeById(userTask.taskId)
    return new UserTask({ ...userTask, task: taskNode })
  }

  mapToModel(task: UserTask): model.UserTaskModel {
    return plainToClass(model.UserTaskModel, instanceToPlain(task));
  }

  createUserTask() {

  }
}