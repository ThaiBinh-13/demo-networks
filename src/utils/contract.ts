import { DEFAULT_CHAIN, TX_URL_MAP } from '@/configs';

export const buildTxUrl = (txHash: string) =>
  `https://${TX_URL_MAP[DEFAULT_CHAIN]}bscscan.com/tx/${txHash}`;

export const buildAddressUrl = (address: string) =>
  `https://${TX_URL_MAP[DEFAULT_CHAIN]}bscscan.com/address/${address}`;
