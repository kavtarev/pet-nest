import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class DatabaseModel {
  @Column('boolean', {default: false})
  public isSoftDeleted: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn({nullable: true})
  public updatedAt: Date;
}