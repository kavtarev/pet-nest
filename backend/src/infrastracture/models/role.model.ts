import { AppModel } from './app.model';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RoleModel {

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public role!: string;

  @Column()
  public personId!: string;

  @ManyToOne(() => AppModel, model => model.roles, { orphanedRowAction: 'delete', onDelete: 'CASCADE' })
  public person!: AppModel;
}