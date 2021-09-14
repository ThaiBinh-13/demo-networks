import { ANumber } from '@/typings';
import { BigNumber } from './bignumber';

export const roundIntUp = (input: ANumber, roundTo = 10) => {
  const num = new BigNumber(input).div(roundTo).toNumber();
  return Math.ceil(num) * roundTo;
};
