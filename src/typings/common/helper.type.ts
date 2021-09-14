import BigNumber from 'bignumber.js';

export interface Dict<T> {
  [Key: string]: T;
}

export type ANumber = number | string | BigNumber;

export type ArgsType<T> = T extends (...args: infer A) => any ? A : never;
