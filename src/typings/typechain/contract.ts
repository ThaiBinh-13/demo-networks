import {
  // EthereumTransactionTypeExtended,
  Address,
  tStringDecimalUnits,
} from '@/services/blockchain/types';
import { BaseContract } from '@/typings/typechain/types.d';
// import { PopulatedTransaction } from 'ethers';
import Web3 from 'web3';

export interface ContractsFactory {
  connect(address: string, web3: Web3): BaseContract;
}

export interface IATokenInterface {
  redeem: (
    aToken: Address,
    amount: tStringDecimalUnits,
    user: Address,
    callback?: (...args: any[]) => void
  ) => Promise<void>;
  decimalsOf: (token: Address) => Promise<number>;
}

export interface IERC20ServiceInterface {
  approve: (
    user: Address,
    token: Address,
    spender: Address,
    amount: tStringDecimalUnits,
    callback?: (...args: any[]) => void
  ) => Promise<void>;
}

export interface ILendingPoolInterface {}

export interface ILendingPoolProviderInterface {}

export interface IChainLinkInterface {}
