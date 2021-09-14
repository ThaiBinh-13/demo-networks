import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { ConnectorConfig } from '@/typings';

const config: ConnectorConfig = {
  getAdapter() {
    return new SolflareWalletAdapter();
  },
};

export default {
  name: 'solflare_wallet',
  config,
};
