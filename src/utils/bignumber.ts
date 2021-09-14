import { BigNumber as BN } from 'bignumber.js';

BN.config({
  DECIMAL_PLACES: 8,
  ROUNDING_MODE: BN.ROUND_DOWN,
  EXPONENTIAL_AT: [-50, 50],
});

export { BN };
