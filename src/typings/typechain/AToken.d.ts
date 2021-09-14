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

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type BalanceTransfer = ContractEventLog<{
  _from: string;
  _to: string;
  _value: string;
  _fromBalanceIncrease: string;
  _toBalanceIncrease: string;
  _fromIndex: string;
  _toIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type BurnOnLiquidation = ContractEventLog<{
  _from: string;
  _value: string;
  _fromBalanceIncrease: string;
  _fromIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type InterestRedirectionAllowanceChanged = ContractEventLog<{
  _from: string;
  _to: string;
  0: string;
  1: string;
}>;
export type InterestStreamRedirected = ContractEventLog<{
  _from: string;
  _to: string;
  _redirectedBalance: string;
  _fromBalanceIncrease: string;
  _fromIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type MintOnDeposit = ContractEventLog<{
  _from: string;
  _value: string;
  _fromBalanceIncrease: string;
  _fromIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Redeem = ContractEventLog<{
  _from: string;
  _value: string;
  _fromBalanceIncrease: string;
  _fromIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type RedirectedBalanceUpdated = ContractEventLog<{
  _targetAddress: string;
  _targetBalanceIncrease: string;
  _targetIndex: string;
  _redirectedBalanceAdded: string;
  _redirectedBalanceRemoved: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface AToken extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): AToken;
  clone(): AToken;
  methods: {
    UINT_MAX_VALUE(): NonPayableTransactionObject<string>;

    allowInterestRedirectionTo(_to: string): NonPayableTransactionObject<void>;

    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      amount: number | string
    ): NonPayableTransactionObject<boolean>;

    balanceOf(_user: string): NonPayableTransactionObject<string>;

    burnOnLiquidation(
      _account: string,
      _value: number | string
    ): NonPayableTransactionObject<void>;

    decimals(): NonPayableTransactionObject<string>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string
    ): NonPayableTransactionObject<boolean>;

    getInterestRedirectionAddress(
      _user: string
    ): NonPayableTransactionObject<string>;

    getRedirectedBalance(_user: string): NonPayableTransactionObject<string>;

    getUserIndex(_user: string): NonPayableTransactionObject<string>;

    increaseAllowance(
      spender: string,
      addedValue: number | string
    ): NonPayableTransactionObject<boolean>;

    isTransferAllowed(
      _user: string,
      _amount: number | string
    ): NonPayableTransactionObject<boolean>;

    mintOnDeposit(
      _account: string,
      _amount: number | string
    ): NonPayableTransactionObject<void>;

    name(): NonPayableTransactionObject<string>;

    principalBalanceOf(_user: string): NonPayableTransactionObject<string>;

    principalTotalSupply(): NonPayableTransactionObject<string>;

    redeem(_amount: number | string): NonPayableTransactionObject<void>;

    redirectInterestStream(_to: string): NonPayableTransactionObject<void>;

    redirectInterestStreamOf(
      _from: string,
      _to: string
    ): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      recipient: string,
      amount: number | string
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string
    ): NonPayableTransactionObject<boolean>;

    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: number | string
    ): NonPayableTransactionObject<void>;

    underlyingAssetAddress(): NonPayableTransactionObject<string>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    BalanceTransfer(cb?: Callback<BalanceTransfer>): EventEmitter;
    BalanceTransfer(
      options?: EventOptions,
      cb?: Callback<BalanceTransfer>
    ): EventEmitter;

    BurnOnLiquidation(cb?: Callback<BurnOnLiquidation>): EventEmitter;
    BurnOnLiquidation(
      options?: EventOptions,
      cb?: Callback<BurnOnLiquidation>
    ): EventEmitter;

    InterestRedirectionAllowanceChanged(
      cb?: Callback<InterestRedirectionAllowanceChanged>
    ): EventEmitter;
    InterestRedirectionAllowanceChanged(
      options?: EventOptions,
      cb?: Callback<InterestRedirectionAllowanceChanged>
    ): EventEmitter;

    InterestStreamRedirected(
      cb?: Callback<InterestStreamRedirected>
    ): EventEmitter;
    InterestStreamRedirected(
      options?: EventOptions,
      cb?: Callback<InterestStreamRedirected>
    ): EventEmitter;

    MintOnDeposit(cb?: Callback<MintOnDeposit>): EventEmitter;
    MintOnDeposit(
      options?: EventOptions,
      cb?: Callback<MintOnDeposit>
    ): EventEmitter;

    Redeem(cb?: Callback<Redeem>): EventEmitter;
    Redeem(options?: EventOptions, cb?: Callback<Redeem>): EventEmitter;

    RedirectedBalanceUpdated(
      cb?: Callback<RedirectedBalanceUpdated>
    ): EventEmitter;
    RedirectedBalanceUpdated(
      options?: EventOptions,
      cb?: Callback<RedirectedBalanceUpdated>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "BalanceTransfer", cb: Callback<BalanceTransfer>): void;
  once(
    event: "BalanceTransfer",
    options: EventOptions,
    cb: Callback<BalanceTransfer>
  ): void;

  once(event: "BurnOnLiquidation", cb: Callback<BurnOnLiquidation>): void;
  once(
    event: "BurnOnLiquidation",
    options: EventOptions,
    cb: Callback<BurnOnLiquidation>
  ): void;

  once(
    event: "InterestRedirectionAllowanceChanged",
    cb: Callback<InterestRedirectionAllowanceChanged>
  ): void;
  once(
    event: "InterestRedirectionAllowanceChanged",
    options: EventOptions,
    cb: Callback<InterestRedirectionAllowanceChanged>
  ): void;

  once(
    event: "InterestStreamRedirected",
    cb: Callback<InterestStreamRedirected>
  ): void;
  once(
    event: "InterestStreamRedirected",
    options: EventOptions,
    cb: Callback<InterestStreamRedirected>
  ): void;

  once(event: "MintOnDeposit", cb: Callback<MintOnDeposit>): void;
  once(
    event: "MintOnDeposit",
    options: EventOptions,
    cb: Callback<MintOnDeposit>
  ): void;

  once(event: "Redeem", cb: Callback<Redeem>): void;
  once(event: "Redeem", options: EventOptions, cb: Callback<Redeem>): void;

  once(
    event: "RedirectedBalanceUpdated",
    cb: Callback<RedirectedBalanceUpdated>
  ): void;
  once(
    event: "RedirectedBalanceUpdated",
    options: EventOptions,
    cb: Callback<RedirectedBalanceUpdated>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}