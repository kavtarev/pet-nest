import { RoleModel } from './role.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AppModel {

  @PrimaryGeneratedColumn()
  public id!: string;

  @Column()
  public name!: string;

  @OneToMany(() => RoleModel, roleModel => roleModel.person, { cascade: true })
  public roles!: RoleModel[];

  @Column()
  public task!: string;
}