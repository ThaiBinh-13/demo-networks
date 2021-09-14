import { ref } from 'vue';
import { UserWalletDetail } from '@/typings';

/**
 * List accounts connected, only use for cold wallet like Trezor, Ledger
 */
export const listAccount = ref<string[]>([]);
/**
 * The current wallet address that's being use
 */
export const account = ref('');
/**
 * Provider chain id
 */
export const currentChainId = ref(0);

export const setUserWallet = (payload: UserWalletDetail) => {
  const { address } = payload;
  account.value = address;
};

export const clearUserWallet = () => {
  account.value = '';
};
