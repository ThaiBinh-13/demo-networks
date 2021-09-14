export const SUPPORTED_CHAIN_ID = (
  process.env.VUE_APP_SUPPORTED_CHAIN as string
)
  .split(',')
  .map(strChain => Number(strChain));

export const DEFAULT_CHAIN = Number(process.env.VUE_APP_DEFAULT_CHAIN);

export const RPC_LIST_MAINNET_BSC = [
  'https://bsc-dataseed.binance.org/',
  'https://bsc-dataseed1.defibit.io/',
  'https://bsc-dataseed1.ninicoin.io/',
  'https://bsc-dataseed2.defibit.io/',
  'https://bsc-dataseed3.defibit.io/',
  'https://bsc-dataseed4.defibit.io/',
  'https://bsc-dataseed2.ninicoin.io/',
  'https://bsc-dataseed3.ninicoin.io/',
  'https://bsc-dataseed4.ninicoin.io/',
  'https://bsc-dataseed1.binance.org/',
  'https://bsc-dataseed2.binance.org/',
  'https://bsc-dataseed3.binance.org/',
  'https://bsc-dataseed4.binance.org/',
];

export const RPC_LIST_TESTNET_BSC = [
  'https://data-seed-prebsc-1-s1.binance.org:8545/',
  'https://data-seed-prebsc-2-s1.binance.org:8545/',
  'https://data-seed-prebsc-1-s2.binance.org:8545/',
  'https://data-seed-prebsc-2-s2.binance.org:8545/',
  'https://data-seed-prebsc-1-s3.binance.org:8545/',
  'https://data-seed-prebsc-2-s3.binance.org:8545/',
];

export const RPC_LIST_MULTI_MAP = {
  56: RPC_LIST_MAINNET_BSC,
  97: RPC_LIST_TESTNET_BSC,
};

export const RPC_LIST_SINGLE_MAP = {
  1: 'https://mainnet.multiplier.finance',
  42: '',
};

export const RPC_LIST_MAP = { ...RPC_LIST_MULTI_MAP, ...RPC_LIST_SINGLE_MAP };

export type AvailableRpcChain = keyof typeof RPC_LIST_MAP;

export type SingleRpcChain = keyof typeof RPC_LIST_SINGLE_MAP;

export type MultiRpcChain = keyof typeof RPC_LIST_MULTI_MAP;

export const SUBGRAPH_ENDPOINT = process.env
  .VUE_APP_SUBGRAPH_ENDPOINT as string;

export const ETH_CHAIN_ID = 1;
export const BSC_CHAIN_ID = [56, 97].includes(DEFAULT_CHAIN)
  ? DEFAULT_CHAIN
  : 56;

export const DAY_BACK_CHECKER = 7; // days

export const CONVERT_ETH_START_BLOCK = Number(
  process.env.VUE_APP_ETH_START_BLOCK as string,
);
export const CONVERT_BSC_START_BLOCK = Number(
  process.env.VUE_APP_BSC_START_BLOCK as string,
);

export const EXPLORER_MAP = {
  1: 'etherscan.io',
  42: 'kovan.etherscan.io',
  56: 'bscscan.com',
  97: 'testnet.bscscan.com',
};

export const CHECKER_INTERVAL = 20;
