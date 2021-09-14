import { ANumber } from '@/typings';
import { BigNumber } from './bignumber';

export const toDP = (input: ANumber, dp: ANumber = 8, trim = true) => {
  const decimalPlace = new BigNumber(dp).toNumber();
  const output = new BigNumber(input).toFormat(decimalPlace).toString();
  if (trim) return output.replace(/\.?0*$/, '');
  return output;
};

export const toSymbol = (
  input: ANumber,
  symbol: string,
  opt: Partial<{ trim: boolean; dp: ANumber; position: 0 | 1 }> = {
    trim: true,
    dp: 8,
    position: 1,
  },
) => {
  const { trim, dp, position } = opt;

  const dpInput = toDP(input, dp, trim);
  const arrOutput = new Array(2).fill(dpInput);
  arrOutput[position || 1] = symbol;

  const output = arrOutput.join(' ');

  return output;
};

export const toPercent = (
  input: ANumber,
  opt: Partial<{ trim: boolean; dp: ANumber; position: 0 | 1 }> = {
    trim: true,
    dp: 2,
  },
) => {
  const { trim, dp, position } = opt;

  const dpInput = toDP(new BigNumber(input).shiftedBy(2), dp, trim);
  const arrOutput = new Array(2).fill(dpInput);
  arrOutput[position || 1] = '%';

  const output = arrOutput.join('');

  return output;
};
