import BigNumber from 'bignumber.js';

BigNumber.set({
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  EXPONENTIAL_AT: [-50, 50],
  RANGE: 800,
});

export { BigNumber };
