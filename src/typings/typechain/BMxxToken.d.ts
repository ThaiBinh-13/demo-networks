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
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type DelegateChanged = ContractEventLog<{
  delegator: string;
  fromDelegate: string;
  toDelegate: string;
  0: string;
  1: string;
  2: string;
}>;
export type DelegateVotesChanged = ContractEventLog<{
  delegate: string;
  previousBalance: string;
  newBalance: string;
  0: string;
  1: string;
  2: string;
}>;
export type MinterChanged = ContractEventLog<{
  minter: string;
  newMinter: string;
  0: string;
  1: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;

export interface BMxxToken extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): BMxxToken;
  clone(): BMxxToken;
  methods: {
    DELEGATION_TYPEHASH(): NonPayableTransactionObject<string>;

    DOMAIN_TYPEHASH(): NonPayableTransactionObject<string>;

    PERMIT_TYPEHASH(): NonPayableTransactionObject<string>;

    allowance(
      account: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      rawAmount: number | string
    ): NonPayableTransactionObject<boolean>;

    balanceOf(account: string): NonPayableTransactionObject<string>;

    checkpoints(
      arg0: string,
      arg1: number | string
    ): NonPayableTransactionObject<{
      fromBlock: string;
      votes: string;
      0: string;
      1: string;
    }>;

    decimals(): NonPayableTransactionObject<string>;

    delegate(delegatee: string): NonPayableTransactionObject<void>;

    delegateBySig(
      delegatee: string,
      nonce: number | string,
      expiry: number | string,
      v: number | string,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    delegates(arg0: string): NonPayableTransactionObject<string>;

    getCurrentVotes(account: string): NonPayableTransactionObject<string>;

    getPriorVotes(
      account: string,
      blockNumber: number | string
    ): NonPayableTransactionObject<string>;

    minimumTimeBetweenMints(): NonPayableTransactionObject<string>;

    mint(
      dst: string,
      rawAmount: number | string
    ): NonPayableTransactionObject<void>;

    mintCap(): NonPayableTransactionObject<string>;

    minter(): NonPayableTransactionObject<string>;

    mintingAllowedAfter(): NonPayableTransactionObject<string>;

    name(): NonPayableTransactionObject<string>;

    nonces(arg0: string): NonPayableTransactionObject<string>;

    numCheckpoints(arg0: string): NonPayableTransactionObject<string>;

    permit(
      owner: string,
      spender: string,
      rawAmount: number | string,
      deadline: number | string,
      v: number | string,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    setMinter(minter_: string): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      dst: string,
      rawAmount: number | string
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      src: string,
      dst: string,
      rawAmount: number | string
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    DelegateChanged(cb?: Callback<DelegateChanged>): EventEmitter;
    DelegateChanged(
      options?: EventOptions,
      cb?: Callback<DelegateChanged>
    ): EventEmitter;

    DelegateVotesChanged(cb?: Callback<DelegateVotesChanged>): EventEmitter;
    DelegateVotesChanged(
      options?: EventOptions,
      cb?: Callback<DelegateVotesChanged>
    ): EventEmitter;

    MinterChanged(cb?: Callback<MinterChanged>): EventEmitter;
    MinterChanged(
      options?: EventOptions,
      cb?: Callback<MinterChanged>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "DelegateChanged", cb: Callback<DelegateChanged>): void;
  once(
    event: "DelegateChanged",
    options: EventOptions,
    cb: Callback<DelegateChanged>
  ): void;

  once(event: "DelegateVotesChanged", cb: Callback<DelegateVotesChanged>): void;
  once(
    event: "DelegateVotesChanged",
    options: EventOptions,
    cb: Callback<DelegateVotesChanged>
  ): void;

  once(event: "MinterChanged", cb: Callback<MinterChanged>): void;
  once(
    event: "MinterChanged",
    options: EventOptions,
    cb: Callback<MinterChanged>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
