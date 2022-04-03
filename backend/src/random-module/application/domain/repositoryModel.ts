import { AbstractRepository } from "typeorm";
import { DatabaseModel } from "./databaseModel";

export abstract class RepositoryModel<model extends DatabaseModel> extends AbstractRepository<{id: string}>{
  createOwnQuerybuilder(alias: string) {
    return this.createQueryBuilder(alias)
  }
  
}