export interface ChainKeyValue<T> {
  [chain: number]: T;
}

export type ChainMap<T> = Map<number, T>;