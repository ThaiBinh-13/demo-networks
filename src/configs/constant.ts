export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000';

export const DEFAULT_CHAIN_ID = 102;

export const NETWORKS_MAP: { [key: number]: string } = {
  101: 'mainnet-beta',
  102: 'testnet',
  103: 'devnet',
};

export const NETWORK_CLUSTER = NETWORKS_MAP[DEFAULT_CHAIN_ID];
