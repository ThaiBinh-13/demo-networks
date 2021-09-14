import Web3 from 'web3';
import BigNumber from 'bignumber.js';
import { BaseContract } from '@/typings/typechain/types.d';

export type Address = string;

export interface ContractsFactory {
  connect(address: string, web3: Web3): BaseContract;
}

export type ServiceConfiguration = {
  apiLib: Web3;
  chainId: number;
};

export type TokenMetadataType = {
  name: string;
  symbol: string;
  decimals: string;
  address: string;
};

export type DefaultProviderKeys = {
  etherscan?: string;
  infura?: string;
  alchemy?: string;
};

export interface ApproveConfig {
  erc20Token: string;
  user: string;
  amount: string | BigNumber;
  callback?: (...args: any[]) => void;
}

export type TXCallBack = (...args: any[]) => void;
