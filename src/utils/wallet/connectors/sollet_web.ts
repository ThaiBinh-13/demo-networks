import { SolletWalletAdapter } from '@solana/wallet-adapter-sollet';
import { ConnectorConfig } from '@/typings';

const config: ConnectorConfig = {
  getAdapter() {
    return new SolletWalletAdapter({ provider: 'https://www.sollet.io' });
  },
};

export default {
  name: 'sollet_web',
  config,
};
