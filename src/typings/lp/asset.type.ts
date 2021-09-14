import BigNumber from 'bignumber.js';

export interface IReserveDetail {
  totalLiquidity: string;
  principalTotalSupply: string;
  availableLiquidity: string;
  totalBorrowsStable: string;
  totalBorrowsVariable: string;
  liquidityRate: string;
  variableBorrowRate: string;
  stableBorrowRate: string;
  averageStableBorrowRate: string;
  utilizationRate: string;
  liquidityIndex: string;
  variableBorrowIndex: string;
  mTokenAddress: string;
  lastUpdateTimestamp: string;
  liquidationThreshold?: string;
}

export interface ITokenData {
  name: string;
  symbol: string;
  address: string;
  decimals: string;
}

export type ReserveData = IReserveDetail & ITokenData;

export interface IReserveConfig {
  ltv: string;
  liquidationThreshold: string;
  liquidationBonus: string;
  interestRateStrategyAddress: string;
  usageAsCollateralEnabled: boolean;
  borrowingEnabled: boolean;
  stableBorrowRateEnabled: boolean;
  isActive: boolean;
  isFreeze: boolean;
}

export type ReserveInfo = ReserveData & IReserveConfig;

export interface IUserReserve {
  currentMTokenBalance: string;
  currentBorrowBalance: string;
  principalBorrowBalance: string;
  principalMTokenBalance: string;
  borrowRateMode: string;
  borrowRate: string;
  liquidityRate: string;
  originationFee: string;
  variableBorrowIndex: string;
  lastUpdateTimestamp: string;
  usageAsCollateralEnabled: boolean;
  address: string;
}

export interface IUserAccount {
  totalLiquidityBNB: string;
  totalCollateralBNB: string;
  totalBorrowsBNB: string;
  totalFeesBNB: string;
  availableBorrowsBNB: string;
  currentLiquidationThreshold: string;
  ltv: string;
  healthFactor: string;
}

export type UserData = IUserReserve; // deprecated type, will replace later

export enum EBorrowRateMode {
  VARIABLE = '2',
  STABLE = '1',
}

export const BorrowRateModeKey: { [key in EBorrowRateMode]: string } = {
  [EBorrowRateMode.VARIABLE]: 'VARIABLE',
  [EBorrowRateMode.STABLE]: 'STABLE',
};

export const BorrowRateModeSwitch: { [key in EBorrowRateMode]: boolean } = {
  [EBorrowRateMode.VARIABLE]: true,
  [EBorrowRateMode.STABLE]: false,
};

export enum EGovernance {
  STAKE = 1,
  UNSTAKE = 2,
}

export interface IUserReserveData {
  isActive: boolean;
  isFreeze: boolean;
  mTokenAddress: string;
  decimals: string;
  symbol: string;
  address: string;
  apy: BigNumber;
  apr: BigNumber;
  balance: BigNumber;
  usdBalance: BigNumber;
  ethBalance: BigNumber;
  borrowed: BigNumber;
  borrowNoFee: BigNumber;
  usdBorrowed: BigNumber;
  ethBorrowed: BigNumber;
  wallet: BigNumber;
  usdWallet: BigNumber;
  ethWallet: BigNumber;
  borrowRateMode: string;
  enableCollateral: boolean;
  liqThreshold: string;
  originationFee: string;
  reserveLTV: BigNumber;
  stableApr: string;
  variableApr: string;
  utilizationRate: string;
  availableLiquidity: string;
  toUsd: string;
  toEth: string;
  liquidationBonus: string;
  canUseAsCollateral: boolean;
  stableBorrowRateEnabled: boolean;
  borrowingEnabled: boolean;
}
