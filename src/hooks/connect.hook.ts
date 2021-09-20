import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from '@polkadot/extension-dapp';
import {
  setUserWallet,
  setListAccount,
  IAccount,
  getAccountBalance,
} from './account.hook';
import { WALLET_ID_KEY } from '@/configs';

/**
 * Saved RPC Index map and saved wallet id
 */
export const signer = ref<any>();

const walletId = useStorage(WALLET_ID_KEY, '');

/**
 * Handle connect wallet
 */
export const isConnecting = ref(false);

export const modalConnectOpen = ref(false);

export const connect = async (callback?: (arg?: []) => unknown) => {
  isConnecting.value = true;
  try {
    console.debug('connectclick');
    // returns an array of all the injected sources
    // (this needs to be called first, before other requests)
    const allInjected = await web3Enable('Demo Dot');
    if (!allInjected || !allInjected.length) {
      alert('Please install Polkadot{.js} wallet extension');
      throw new Error('please install extension');
    }
    walletId.value = 'polkadot_js';
    // Get all accounts from wallet
    const allAccounts = await web3Accounts();
    if (allAccounts && allAccounts) {
      const injector = await web3FromAddress(allAccounts[0].address);
      signer.value = injector.signer;
      const accounts: IAccount[] = allAccounts.map(el => {
        return {
          address: el.address,
          name: el.meta.name || '',
        };
      });
      setListAccount(accounts);
      setUserWallet(accounts[0]);
    }
  } catch (e) {
    console.error(e);
    setListAccount([]);
    setUserWallet({} as IAccount);
  }
  isConnecting.value = false;
  if (callback) callback();
  // if (!isDesktop) {
  //   const { closeMobileMenu } = useApp();
  //   closeMobileMenu();
  // }
};

export const onChangeAccountConnected = async (acc: IAccount) => {
  const injector = await web3FromAddress(acc.address);
  signer.value = injector.signer;
  setUserWallet(acc);
  getAccountBalance(acc.address);
};
