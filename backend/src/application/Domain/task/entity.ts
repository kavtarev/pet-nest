import { Graph } from 'src/infrastracture/initial-json/initial-config';
import { Card } from './../card/entity';

export class Task implements Card {
  name: string
  id: string
  children: string[]

  constructor(params: Graph) {
    Object.assign(this, params)
  }

  isNoChildren() {
    return this.children.length === 0
  }
}