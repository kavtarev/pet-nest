import { BeforeInsert, BeforeUpdate, ManyToOne } from 'typeorm';
import { UserTaskStatus } from './../../common/user-task-status';
import { Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Entity, PrimaryColumn } from 'typeorm';
import { AuthModel } from '.';

@Entity()
export class UserTaskModel {
  @PrimaryColumn()
  public id: string

  @Column()
  public userId: string

  @Column()
  public status: UserTaskStatus

  @Column()
  public taskId: string

  @Column({ type: 'jsonb', nullable: true })
  public data!: any; // todo

  @ManyToOne(() => AuthModel, user => user.task)
  public user!: AuthModel

  @CreateDateColumn()
  public createDate: Date;

  @UpdateDateColumn()
  public updateTime: Date;
}