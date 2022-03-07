export interface InitilConfig {
  quest: Quest[]
}
export interface Quest {
  name: string,
  id: string,
  graph: Graph[]
}

export interface Graph {
  id: string,
  name: string,
  children: string[]
}