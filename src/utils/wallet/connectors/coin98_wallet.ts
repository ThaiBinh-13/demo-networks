import { Coin98WalletAdapter } from '@solana/wallet-adapter-coin98';
import { ConnectorConfig } from '@/typings';

const config: ConnectorConfig = {
  getAdapter() {
    return new Coin98WalletAdapter();
  },
};

export default {
  name: 'coin98_wallet',
  config,
};
