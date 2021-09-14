import type { WalletAdapter } from '@solana/wallet-adapter-base';

export interface ConnectorResponse {
  provider: WalletAdapter;
  address: string;
}

export type UserWalletDetail = Omit<ConnectorResponse, 'provider'>;

export interface ConnectorEventHandlers {
  disconnect: () => void;
  error: (error: Error) => void;
}

export interface ConnectorConfig {
  getAdapter: () => WalletAdapter;
}

export interface ConnectorBuildMap {
  [connector_id: string]: (
    config: ConnectorConfig,
  ) => Promise<ConnectorResponse>;
}

export type ConnectorFunc = () => Promise<ConnectorResponse>;
