import { reactive } from 'vue';
import { SUPPORTED_CHAIN_ID } from '@/configs';
import { ChainMap } from '@/typings';
import { createWrapperByChain } from '@/utils/provider';

/**
 * Implicit `any` type is provider for each chain
 */
export const providerMap = reactive<ChainMap<any>>(new Map<number, any>());

/**
 * Implicit `any` type is provider wrapper lib for each chain
 * Example: web3js
 */
export const providerLibMap = reactive<ChainMap<any>>(new Map<number, any>());

/**
 * Set provider functions
 */
export const setProvider = (chain: number, provider: any) => {
  // console.trace(chain, provider);
  providerMap.set(chain, provider);
  providerLibMap.set(chain, createWrapperByChain(chain, provider));
};

/**
 * Reset provider to default
 * @param {number} chain
 */
export const resetSingleProvider = (chain: number) => {
  providerMap.set(chain, null);
  providerLibMap.set(chain, createWrapperByChain(chain));
};

/**
 * Reset all providers to default
 * @param {number} chain
 */
export const resetProviders = () => {
  SUPPORTED_CHAIN_ID.forEach(resetSingleProvider);
};
