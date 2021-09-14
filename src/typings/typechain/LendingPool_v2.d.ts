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
  reserve: string;
  user: string;
  onBehalfOf: string;
  amount: string;
  borrowRateMode: string;
  borrowRate: string;
  referral: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type Deposit = ContractEventLog<{
  reserve: string;
  user: string;
  onBehalfOf: string;
  amount: string;
  referral: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type FlashLoan = ContractEventLog<{
  target: string;
  initiator: string;
  asset: string;
  amount: string;
  premium: string;
  referralCode: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type LiquidationCall = ContractEventLog<{
  collateralAsset: string;
  debtAsset: string;
  user: string;
  debtToCover: string;
  liquidatedCollateralAmount: string;
  liquidator: string;
  receiveAToken: boolean;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: boolean;
}>;
export type Paused = ContractEventLog<{}>;
export type RebalanceStableBorrowRate = ContractEventLog<{
  reserve: string;
  user: string;
  0: string;
  1: string;
}>;
export type Repay = ContractEventLog<{
  reserve: string;
  user: string;
  repayer: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type ReserveDataUpdated = ContractEventLog<{
  reserve: string;
  liquidityRate: string;
  stableBorrowRate: string;
  variableBorrowRate: string;
  liquidityIndex: string;
  variableBorrowIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type ReserveUsedAsCollateralDisabled = ContractEventLog<{
  reserve: string;
  user: string;
  0: string;
  1: string;
}>;
export type ReserveUsedAsCollateralEnabled = ContractEventLog<{
  reserve: string;
  user: string;
  0: string;
  1: string;
}>;
export type Swap = ContractEventLog<{
  reserve: string;
  user: string;
  rateMode: string;
  0: string;
  1: string;
  2: string;
}>;
export type Unpaused = ContractEventLog<{}>;
export type Withdraw = ContractEventLog<{
  reserve: string;
  user: string;
  to: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;

export interface LendingPoolV2 extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): LendingPoolV2;
  clone(): LendingPoolV2;
  methods: {
    FLASHLOAN_PREMIUM_TOTAL(): NonPayableTransactionObject<string>;

    LENDINGPOOL_REVISION(): NonPayableTransactionObject<string>;

    MAX_NUMBER_RESERVES(): NonPayableTransactionObject<string>;

    MAX_STABLE_RATE_BORROW_SIZE_PERCENT(): NonPayableTransactionObject<string>;

    borrow(
      asset: string,
      amount: number | string,
      interestRateMode: number | string,
      referralCode: number | string,
      onBehalfOf: string
    ): NonPayableTransactionObject<void>;

    deposit(
      asset: string,
      amount: number | string,
      onBehalfOf: string,
      referralCode: number | string
    ): NonPayableTransactionObject<void>;

    finalizeTransfer(
      asset: string,
      from: string,
      to: string,
      amount: number | string,
      balanceFromBefore: number | string,
      balanceToBefore: number | string
    ): NonPayableTransactionObject<void>;

    flashLoan(
      receiverAddress: string,
      assets: string[],
      amounts: (number | string)[],
      modes: (number | string)[],
      onBehalfOf: string,
      params: string | number[],
      referralCode: number | string
    ): NonPayableTransactionObject<void>;

    getAddressesProvider(): NonPayableTransactionObject<string>;

    getConfiguration(asset: string): NonPayableTransactionObject<[string]>;

    getReserveData(
      asset: string
    ): NonPayableTransactionObject<
      [
        [string],
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    >;

    getReserveNormalizedIncome(
      asset: string
    ): NonPayableTransactionObject<string>;

    getReserveNormalizedVariableDebt(
      asset: string
    ): NonPayableTransactionObject<string>;

    getReservesList(): NonPayableTransactionObject<string[]>;

    getUserAccountData(
      user: string
    ): NonPayableTransactionObject<{
      totalCollateralETH: string;
      totalDebtETH: string;
      availableBorrowsETH: string;
      currentLiquidationThreshold: string;
      ltv: string;
      healthFactor: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;

    getUserConfiguration(user: string): NonPayableTransactionObject<[string]>;

    initReserve(
      asset: string,
      aTokenAddress: string,
      stableDebtAddress: string,
      variableDebtAddress: string,
      interestRateStrategyAddress: string
    ): NonPayableTransactionObject<void>;

    initialize(provider: string): NonPayableTransactionObject<void>;

    liquidationCall(
      collateralAsset: string,
      debtAsset: string,
      user: string,
      debtToCover: number | string,
      receiveAToken: boolean
    ): NonPayableTransactionObject<void>;

    paused(): NonPayableTransactionObject<boolean>;

    rebalanceStableBorrowRate(
      asset: string,
      user: string
    ): NonPayableTransactionObject<void>;

    repay(
      asset: string,
      amount: number | string,
      rateMode: number | string,
      onBehalfOf: string
    ): NonPayableTransactionObject<string>;

    setConfiguration(
      asset: string,
      configuration: number | string
    ): NonPayableTransactionObject<void>;

    setPause(val: boolean): NonPayableTransactionObject<void>;

    setReserveInterestRateStrategyAddress(
      asset: string,
      rateStrategyAddress: string
    ): NonPayableTransactionObject<void>;

    setUserUseReserveAsCollateral(
      asset: string,
      useAsCollateral: boolean
    ): NonPayableTransactionObject<void>;

    swapBorrowRateMode(
      asset: string,
      rateMode: number | string
    ): NonPayableTransactionObject<void>;

    withdraw(
      asset: string,
      amount: number | string,
      to: string
    ): NonPayableTransactionObject<string>;
  };
  events: {
    Borrow(cb?: Callback<Borrow>): EventEmitter;
    Borrow(options?: EventOptions, cb?: Callback<Borrow>): EventEmitter;

    Deposit(cb?: Callback<Deposit>): EventEmitter;
    Deposit(options?: EventOptions, cb?: Callback<Deposit>): EventEmitter;

    FlashLoan(cb?: Callback<FlashLoan>): EventEmitter;
    FlashLoan(options?: EventOptions, cb?: Callback<FlashLoan>): EventEmitter;

    LiquidationCall(cb?: Callback<LiquidationCall>): EventEmitter;
    LiquidationCall(
      options?: EventOptions,
      cb?: Callback<LiquidationCall>
    ): EventEmitter;

    Paused(cb?: Callback<Paused>): EventEmitter;
    Paused(options?: EventOptions, cb?: Callback<Paused>): EventEmitter;

    RebalanceStableBorrowRate(
      cb?: Callback<RebalanceStableBorrowRate>
    ): EventEmitter;
    RebalanceStableBorrowRate(
      options?: EventOptions,
      cb?: Callback<RebalanceStableBorrowRate>
    ): EventEmitter;

    Repay(cb?: Callback<Repay>): EventEmitter;
    Repay(options?: EventOptions, cb?: Callback<Repay>): EventEmitter;

    ReserveDataUpdated(cb?: Callback<ReserveDataUpdated>): EventEmitter;
    ReserveDataUpdated(
      options?: EventOptions,
      cb?: Callback<ReserveDataUpdated>
    ): EventEmitter;

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

    Unpaused(cb?: Callback<Unpaused>): EventEmitter;
    Unpaused(options?: EventOptions, cb?: Callback<Unpaused>): EventEmitter;

    Withdraw(cb?: Callback<Withdraw>): EventEmitter;
    Withdraw(options?: EventOptions, cb?: Callback<Withdraw>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Borrow", cb: Callback<Borrow>): void;
  once(event: "Borrow", options: EventOptions, cb: Callback<Borrow>): void;

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

  once(event: "Paused", cb: Callback<Paused>): void;
  once(event: "Paused", options: EventOptions, cb: Callback<Paused>): void;

  once(
    event: "RebalanceStableBorrowRate",
    cb: Callback<RebalanceStableBorrowRate>
  ): void;
  once(
    event: "RebalanceStableBorrowRate",
    options: EventOptions,
    cb: Callback<RebalanceStableBorrowRate>
  ): void;

  once(event: "Repay", cb: Callback<Repay>): void;
  once(event: "Repay", options: EventOptions, cb: Callback<Repay>): void;

  once(event: "ReserveDataUpdated", cb: Callback<ReserveDataUpdated>): void;
  once(
    event: "ReserveDataUpdated",
    options: EventOptions,
    cb: Callback<ReserveDataUpdated>
  ): void;

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

  once(event: "Unpaused", cb: Callback<Unpaused>): void;
  once(event: "Unpaused", options: EventOptions, cb: Callback<Unpaused>): void;

  once(event: "Withdraw", cb: Callback<Withdraw>): void;
  once(event: "Withdraw", options: EventOptions, cb: Callback<Withdraw>): void;
}
