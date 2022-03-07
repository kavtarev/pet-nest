import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserTaskModel } from "./user-task.model";

@Entity()
export class AuthModel {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => UserTaskModel, task => task.user)
  public task: UserTaskModel[]

  @UpdateDateColumn()
  updateDate: Date;
}