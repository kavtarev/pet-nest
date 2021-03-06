import { Entity } from 'typeorm';
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { DatabaseModel } from "./../../application/domain/databaseModel";

@Entity({ name: 'random' })
export class RandomModel extends DatabaseModel {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('integer', { nullable: true })
  public randomNumber: number;

  @Column('varchar', { nullable: true })
  public randomString: string

  @Column('uuid', { nullable: true })
  public randomUuid: string
}
