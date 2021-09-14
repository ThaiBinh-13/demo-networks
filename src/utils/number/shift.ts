import { BigNumber } from './bignumber';

export const shift = (
  number: string | BigNumber | number,
  decimals: number | string | BigNumber,
) => {
  const dec = new BigNumber(decimals).toNumber();
  return new BigNumber(number).shiftedBy(dec).toString();
};

export const mul = (
  x: string | BigNumber | number,
  y: number | string | BigNumber,
) => {
  const x1 = new BigNumber(x);
  return new BigNumber(y).times(x1).toString();
};

export const normalize = (
  value: string | number | BigNumber,
  decimals: number | string,
) =>
  new BigNumber(value)
    .dp(Math.abs(Number(decimals)))
    .shiftedBy(-decimals)
    .toString();
