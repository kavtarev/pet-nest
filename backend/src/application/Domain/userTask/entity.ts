import { Expose, Transform, Type } from 'class-transformer';
import { UserTaskStatus } from './../../../common/user-task-status';
import { Task } from './../task/entity';

export interface UserTaskParams {
  id: string;
  task: Task;
  userId: string;
  status: UserTaskStatus;
  data: any
}

export class UserTask {
  public readonly id: string
  public readonly userId: string
  @Expose({ name: 'taskId' })
  @Transform(({ value }) => value.id)
  @Type(() => Task)
  public readonly task!: Task;
  public readonly status: UserTaskStatus
  public data: any

  constructor(params: UserTaskParams) {
    Object.assign(this, params)
  }

  getData() {
    return this.data
  }
}