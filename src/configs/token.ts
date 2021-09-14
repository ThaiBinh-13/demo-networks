export interface TokenInfo {
  symbol: string;
  name: string;
  mintAddress: string;
  decimals: number;
  totalSupply?: string;
  tokenAccountAddress?: string;
  balance?: string;
}

export const NATIVE_SOL: TokenInfo = {
  symbol: 'SOL',
  name: 'Native Solana',
  mintAddress: '11111111111111111111111111111111',
  decimals: 9,
};
