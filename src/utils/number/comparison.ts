import BigNumber from 'bignumber.js';
import { ANumber } from '@/typings';

export const compare =
  (method: 'gt' | 'gte' | 'lt' | 'lte') =>
  (inputA: ANumber) =>
  (inputB: ANumber) =>
    new BigNumber(inputA)[method](inputB);
