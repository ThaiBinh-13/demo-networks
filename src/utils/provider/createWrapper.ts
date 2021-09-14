import Web3 from 'web3';
import invariant from 'tiny-invariant';
import { useStorage } from '@vueuse/core';
import { ChainKeyValue } from '@/typings';
import {
  MultiRpcChain,
  RPC_LIST_MAP,
  SingleRpcChain,
  RPC_INDEX_KEY,
} from '@/configs';
import { createHttpProvider } from '@/utils/web3';

const rpcIndexMap = useStorage<ChainKeyValue<number>>(RPC_INDEX_KEY, {});

/**
 *
 * @param {number} chain Target blockchain
 * @param {providerInstance} provider Provider to query to blockchain
 * @returns Provider library wrapper to query
 */
export const createWrapperByChain = (chain: number, provider?: any) => {
  switch (chain) {
    case 56:
    case 97: {
      const currentRpcIndex = rpcIndexMap.value[chain] || 0;
      return provider
        ? new Web3(provider)
        : new Web3(
            createHttpProvider(
              RPC_LIST_MAP[chain as MultiRpcChain][currentRpcIndex],
            ),
          );
    }
    case 1:
    case 42: {
      return provider
        ? new Web3(provider)
        : new Web3(createHttpProvider(RPC_LIST_MAP[chain as SingleRpcChain]));
    }
    default:
      return invariant(
        chain === undefined || chain === null,
        `Chain ${chain} is not support`,
      );
  }
};
