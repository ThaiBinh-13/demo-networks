/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Borrow = ContractEventLog<{
  _reserve: string;
  _user: string;
  _amount: string;
  _borrowRateMode: string;
  _borrowRate: string;
  _originationFee: string;
  _borrowBalanceIncrease: string;
  _referral: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
}>;
export type ClaimReward = ContractEventLog<{
  _reserve: string;
  _user: string;
  _amount: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Deposit = ContractEventLog<{
  _reserve: string;
  _user: string;
  _amount: string;
  _referral: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type FlashLoan = ContractEventLog<{
  _target: string;
  _reserve: string;
  _amount: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type LiquidationCall = ContractEventLog<{
  _collateral: string;
  _reserve: string;
  _user: string;
  _purchaseAmount: string;
  _liquidatedCollateralAmount: string;
  _accruedBorrowInterest: string;
  _liquidator: string;
  _receiveMToken: boolean;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: boolean;
  8: string;
}>;
export type OriginationFeeLiquidated = ContractEventLog<{
  _collateral: string;
  _reserve: string;
  _user: string;
  _feeLiquidated: string;
  _liquidatedCollateralForFee: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type RebalanceStableBorrowRate = ContractEventLog<{
  _reserve: string;
  _user: string;
  _newStableRate: string;
  _borrowBalanceIncrease: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type RedeemUnderlying = ContractEventLog<{
  _reserve: string;
  _user: string;
  _amount: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Repay = ContractEventLog<{
  _reserve: string;
  _user: string;
  _repayer: string;
  _amountMinusFees: string;
  _fees: string;
  _borrowBalanceIncrease: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type ReserveUsedAsCollateralDisabled = ContractEventLog<{
  _reserve: string;
  _user: string;
  0: string;
  1: string;
}>;
export type ReserveUsedAsCollateralEnabled = ContractEventLog<{
  _reserve: string;
  _user: string;
  0: string;
  1: string;
}>;
export type Swap = ContractEventLog<{
  _reserve: string;
  _user: string;
  _newRateMode: string;
  _newRate: string;
  _borrowBalanceIncrease: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;

export interface LendingPool extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): LendingPool;
  clone(): LendingPool;
  methods: {
    borrow(
      _reserve: string,
      _amount: number | string,
      _interestRateMode: number | string,
      _referralCode: number | string
    ): NonPayableTransactionObject<void>;

    claimAllReward(_type: number | string): NonPayableTransactionObject<void>;

    claimReward(
      _reserve: string,
      _type: number | string
    ): NonPayableTransactionObject<void>;

    deposit(
      _reserve: string,
      _amount: number | string,
      _referralCode: number | string
    ): PayableTransactionObject<void>;

    flashLoan(
      _receiver: string,
      _reserve: string,
      _amount: number | string,
      _params: string | number[]
    ): NonPayableTransactionObject<void>;

    initialize(_addressesProvider: string): NonPayableTransactionObject<void>;

    liquidationCall(
      _collateral: string,
      _reserve: string,
      _user: string,
      _purchaseAmount: number | string,
      _receiveMToken: boolean
    ): PayableTransactionObject<void>;

    rebalanceStableBorrowRate(
      _reserve: string,
      _user: string
    ): NonPayableTransactionObject<void>;

    redeemUnderlying(
      _reserve: string,
      _user: string,
      _amount: number | string,
      _mTokenBalanceAfterRedeem: number | string
    ): NonPayableTransactionObject<void>;

    registerAllPoolsForReward(): NonPayableTransactionObject<void>;

    repay(
      _reserve: string,
      _amount: number | string,
      _onBehalfOf: string
    ): PayableTransactionObject<void>;

    setUserUseReserveAsCollateral(
      _reserve: string,
      _useAsCollateral: boolean
    ): NonPayableTransactionObject<void>;

    swapBorrowRateMode(_reserve: string): NonPayableTransactionObject<void>;

    updateGovernanceStakingRewards(
      _user: string
    ): NonPayableTransactionObject<void>;

    updateLpReward(
      _reserve: string,
      _user: string
    ): NonPayableTransactionObject<void>;

    updatePartialReward(
      _reserve: string,
      _user: string,
      _type: number | string,
      num: number | string
    ): NonPayableTransactionObject<void>;

    updateRewards(
      _reserve: string,
      _user: string
    ): NonPayableTransactionObject<void>;

    addressesProvider(): NonPayableTransactionObject<string>;

    core(): NonPayableTransactionObject<string>;

    dataProvider(): NonPayableTransactionObject<string>;

    feeProvider(): NonPayableTransactionObject<string>;

    getReserveConfigurationData(
      _reserve: string
    ): NonPayableTransactionObject<{
      ltv: string;
      liquidationThreshold: string;
      liquidationBonus: string;
      interestRateStrategyAddress: string;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      0: string;
      1: string;
      2: string;
      3: string;
      4: boolean;
      5: boolean;
      6: boolean;
      7: boolean;
    }>;

    getReserveData(
      _reserve: string
    ): NonPayableTransactionObject<{
      totalLiquidity: string;
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
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
    }>;

    getReserves(): NonPayableTransactionObject<string[]>;

    getUserAccountData(
      _user: string
    ): NonPayableTransactionObject<{
      totalLiquidityBNB: string;
      totalCollateralBNB: string;
      totalBorrowsBNB: string;
      totalFeesBNB: string;
      availableBorrowsBNB: string;
      currentLiquidationThreshold: string;
      ltv: string;
      healthFactor: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
    }>;

    getUserReserveData(
      _reserve: string,
      _user: string
    ): NonPayableTransactionObject<{
      currentMTokenBalance: string;
      currentBorrowBalance: string;
      principalBorrowBalance: string;
      borrowRateMode: string;
      borrowRate: string;
      liquidityRate: string;
      originationFee: string;
      variableBorrowIndex: string;
      lastUpdateTimestamp: string;
      usageAsCollateralEnabled: boolean;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: boolean;
    }>;

    LENDINGPOOL_REVISION(): NonPayableTransactionObject<string>;

    parametersProvider(): NonPayableTransactionObject<string>;

    readReward(
      _reserve: string,
      _type: number | string
    ): NonPayableTransactionObject<string>;

    rewardsMgr(): NonPayableTransactionObject<string>;

    UINT_MAX_VALUE(): NonPayableTransactionObject<string>;
  };
  events: {
    Borrow(cb?: Callback<Borrow>): EventEmitter;
    Borrow(options?: EventOptions, cb?: Callback<Borrow>): EventEmitter;

    ClaimReward(cb?: Callback<ClaimReward>): EventEmitter;
    ClaimReward(
      options?: EventOptions,
      cb?: Callback<ClaimReward>
    ): EventEmitter;

    Deposit(cb?: Callback<Deposit>): EventEmitter;
    Deposit(options?: EventOptions, cb?: Callback<Deposit>): EventEmitter;

    FlashLoan(cb?: Callback<FlashLoan>): EventEmitter;
    FlashLoan(options?: EventOptions, cb?: Callback<FlashLoan>): EventEmitter;

    LiquidationCall(cb?: Callback<LiquidationCall>): EventEmitter;
    LiquidationCall(
      options?: EventOptions,
      cb?: Callback<LiquidationCall>
    ): EventEmitter;

    OriginationFeeLiquidated(
      cb?: Callback<OriginationFeeLiquidated>
    ): EventEmitter;
    OriginationFeeLiquidated(
      options?: EventOptions,
      cb?: Callback<OriginationFeeLiquidated>
    ): EventEmitter;

    RebalanceStableBorrowRate(
      cb?: Callback<RebalanceStableBorrowRate>
    ): EventEmitter;
    RebalanceStableBorrowRate(
      options?: EventOptions,
      cb?: Callback<RebalanceStableBorrowRate>
    ): EventEmitter;

    RedeemUnderlying(cb?: Callback<RedeemUnderlying>): EventEmitter;
    RedeemUnderlying(
      options?: EventOptions,
      cb?: Callback<RedeemUnderlying>
    ): EventEmitter;

    Repay(cb?: Callback<Repay>): EventEmitter;
    Repay(options?: EventOptions, cb?: Callback<Repay>): EventEmitter;

    ReserveUsedAsCollateralDisabled(
      cb?: Callback<ReserveUsedAsCollateralDisabled>
    ): EventEmitter;
    ReserveUsedAsCollateralDisabled(
      options?: EventOptions,
      cb?: Callback<ReserveUsedAsCollateralDisabled>
    ): EventEmitter;

    ReserveUsedAsCollateralEnabled(
      cb?: Callback<ReserveUsedAsCollateralEnabled>
    ): EventEmitter;
    ReserveUsedAsCollateralEnabled(
      options?: EventOptions,
      cb?: Callback<ReserveUsedAsCollateralEnabled>
    ): EventEmitter;

    Swap(cb?: Callback<Swap>): EventEmitter;
    Swap(options?: EventOptions, cb?: Callback<Swap>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Borrow", cb: Callback<Borrow>): void;
  once(event: "Borrow", options: EventOptions, cb: Callback<Borrow>): void;

  once(event: "ClaimReward", cb: Callback<ClaimReward>): void;
  once(
    event: "ClaimReward",
    options: EventOptions,
    cb: Callback<ClaimReward>
  ): void;

  once(event: "Deposit", cb: Callback<Deposit>): void;
  once(event: "Deposit", options: EventOptions, cb: Callback<Deposit>): void;

  once(event: "FlashLoan", cb: Callback<FlashLoan>): void;
  once(
    event: "FlashLoan",
    options: EventOptions,
    cb: Callback<FlashLoan>
  ): void;

  once(event: "LiquidationCall", cb: Callback<LiquidationCall>): void;
  once(
    event: "LiquidationCall",
    options: EventOptions,
    cb: Callback<LiquidationCall>
  ): void;

  once(
    event: "OriginationFeeLiquidated",
    cb: Callback<OriginationFeeLiquidated>
  ): void;
  once(
    event: "OriginationFeeLiquidated",
    options: EventOptions,
    cb: Callback<OriginationFeeLiquidated>
  ): void;

  once(
    event: "RebalanceStableBorrowRate",
    cb: Callback<RebalanceStableBorrowRate>
  ): void;
  once(
    event: "RebalanceStableBorrowRate",
    options: EventOptions,
    cb: Callback<RebalanceStableBorrowRate>
  ): void;

  once(event: "RedeemUnderlying", cb: Callback<RedeemUnderlying>): void;
  once(
    event: "RedeemUnderlying",
    options: EventOptions,
    cb: Callback<RedeemUnderlying>
  ): void;

  once(event: "Repay", cb: Callback<Repay>): void;
  once(event: "Repay", options: EventOptions, cb: Callback<Repay>): void;

  once(
    event: "ReserveUsedAsCollateralDisabled",
    cb: Callback<ReserveUsedAsCollateralDisabled>
  ): void;
  once(
    event: "ReserveUsedAsCollateralDisabled",
    options: EventOptions,
    cb: Callback<ReserveUsedAsCollateralDisabled>
  ): void;

  once(
    event: "ReserveUsedAsCollateralEnabled",
    cb: Callback<ReserveUsedAsCollateralEnabled>
  ): void;
  once(
    event: "ReserveUsedAsCollateralEnabled",
    options: EventOptions,
    cb: Callback<ReserveUsedAsCollateralEnabled>
  ): void;

  once(event: "Swap", cb: Callback<Swap>): void;
  once(event: "Swap", options: EventOptions, cb: Callback<Swap>): void;
}
