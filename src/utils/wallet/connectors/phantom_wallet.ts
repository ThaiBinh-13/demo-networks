import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { ConnectorConfig } from '@/typings';

const config: ConnectorConfig = {
  getAdapter() {
    return new PhantomWalletAdapter();
  },
};

export default {
  name: 'phantom_wallet',
  config,
};
