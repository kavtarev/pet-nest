import { UserQuestStatus } from './../../common/interface'
import { Column } from 'typeorm';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserQuestModel {
  @PrimaryColumn()
  public id: string

  @Column()
  public questId: string

  @Column()
  public userId: string

  @Column()
  public status: UserQuestStatus
}