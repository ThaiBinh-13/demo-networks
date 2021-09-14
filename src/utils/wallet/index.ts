import { ConnectorFunc } from '@/typings';
import { getKeys } from '@/utils/object/getKeys';
import eventHandlers from './events/handler.event';
import { listenEvents } from './events/listener.event';
import coin98_wallet from './connectors/coin98_wallet';
import phantom_wallet from './connectors/phantom_wallet';
import solflare_wallet from './connectors/solflare_wallet';
import sollet_web from './connectors/sollet_web';

const listConnectors = {
  coin98_wallet,
  phantom_wallet,
  solflare_wallet,
  sollet_web,
};

export const SUPPORTED_WALLETS = getKeys(listConnectors);

export type SupportedWallet = typeof SUPPORTED_WALLETS[number];

export const connectors = Object.values(listConnectors).reduce(
  (acc, connector) => {
    const { name, config } = connector;

    acc[name as SupportedWallet] = async () => {
      const adapter = config.getAdapter();
      listenEvents(eventHandlers, adapter);
      await adapter.connect();
      const { publicKey } = adapter;
      return {
        address: publicKey ? publicKey.toBase58() : '',
        provider: adapter,
      };
    };
    return acc;
  },
  {} as {
    [key in SupportedWallet]: ConnectorFunc;
  },
);
