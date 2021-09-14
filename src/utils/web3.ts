import Web3 from 'web3';

export const createHttpProvider = (rpcUrl: string) =>
  new Web3.providers.HttpProvider(rpcUrl);
