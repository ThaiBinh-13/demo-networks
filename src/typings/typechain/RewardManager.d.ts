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

export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface RewardManager extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): RewardManager;
  clone(): RewardManager;
  methods: {
    addRewardItem(
      _reserve: string,
      _lpRewardAmt: number | string,
      lpBase: number | string,
      govRewardAmt: number | string
    ): NonPayableTransactionObject<void>;

    addressesProvider(): NonPayableTransactionObject<string>;

    coreAddress(): NonPayableTransactionObject<string>;

    isOwner(): NonPayableTransactionObject<boolean>;

    lendingPoolAddress(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    readRewards(
      _reserve: string,
      _user: string,
      _type: number | string,
      _share: number | string
    ): NonPayableTransactionObject<string>;

    registerPools(_reserves: string[]): NonPayableTransactionObject<void>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    resetReward(
      _reserve: string,
      _user: string,
      _type: number | string
    ): NonPayableTransactionObject<void>;

    rewardPools(
      arg0: string
    ): NonPayableTransactionObject<{
      nextRewardPtr: string;
      valid: boolean;
      0: string;
      1: boolean;
    }>;

    stakingToken(): NonPayableTransactionObject<string>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    updateReward(
      _reserve: string,
      _user: string,
      _type: number | string,
      _shares: number | string,
      _num: number | string
    ): NonPayableTransactionObject<void>;

    updateRewards(
      _reserve: string,
      _user: string,
      _sharesLp: number | string,
      _sharesGov: number | string,
      _num: number | string
    ): NonPayableTransactionObject<void>;

    withdrawFromVault(
      _type: number | string,
      _token: string,
      _to: string,
      _amount: number | string
    ): NonPayableTransactionObject<void>;
  };
  events: {
    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
