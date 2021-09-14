import { ref } from 'vue';
import type { WalletAdapter } from '@solana/wallet-adapter-base';
import { useStorage } from '@vueuse/core';
import { connectors, SupportedWallet } from '@/utils';
import { clearUserWallet, setUserWallet, account } from './account.hook';
import { resetProviders } from './provider.hook';
import { WALLET_ID_KEY } from '@/configs';

/**
 * Saved RPC Index map and saved wallet id
 */
const walletId = useStorage(WALLET_ID_KEY, '');

/**
 * Handle connect wallet
 */
export const isConnecting = ref(false);

export const walletAdapterConnected = ref<WalletAdapter>();

export const modalConnectOpen = ref(false);

export const connect = async (
  id: SupportedWallet,
  callback?: (arg?: []) => unknown,
) => {
  walletId.value = id;
  isConnecting.value = true;
  try {
    const response = await connectors[id as SupportedWallet]();
    const { provider, ...userWalletDetail } = response;
    setUserWallet(userWalletDetail);
    walletAdapterConnected.value = provider;
  } catch (e) {
    console.error(e);
  }
  isConnecting.value = false;
  if (callback) callback();
  // if (!isDesktop) {
  //   const { closeMobileMenu } = useApp();
  //   closeMobileMenu();
  // }
};

/**
 * Handle disconnect wallet
 */
export const disconnect = () => {
  clearUserWallet();
  resetProviders();
  walletId.value = '';
  walletAdapterConnected.value?.disconnect();
};

/**
 * Handle reconnect wallet when user get back to our website
 */
export const reconnectWallet = () => {
  if (walletId.value && !account.value) {
    connect(walletId.value as SupportedWallet);
  }
};
