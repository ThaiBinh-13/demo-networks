import { ref, reactive } from 'vue';
import { useStorage } from '@vueuse/core';
import { web3FromAddress } from '@polkadot/extension-dapp';
import { api } from './provider.hook';
import { BigNumber } from '@/utils';
import { TOKEN_DECIMALS } from '@/configs';

export interface IAccount {
  address: string;
  name: string;
}

export interface ITxState {
  tx: string;
  error: any;
}

export const listAccounts = useStorage<IAccount[]>('accounts', []);

export const account = useStorage<IAccount>('account', {
  address: '',
  name: '',
});

export const accountBalance = ref<number>(0);

export const txState = reactive<ITxState>({
  tx: '',
  error: null,
});

export const setUserWallet = (payload: IAccount) => {
  account.value = {
    ...payload,
  };
};

export const setListAccount = (payload: IAccount[]) => {
  listAccounts.value = [...payload];
};

export const getAccountBalance = async (address: string) => {
  const unsub = await api.provider.query.system.account(
    address,
    ({ data: balance }) => {
      accountBalance.value = new BigNumber(balance.free)
        .shiftedBy(-TOKEN_DECIMALS)
        .toNumber();
    },
  );
};

export const sendTransaction = async () => {
  try {
    txState.error = null;
    txState.tx = '';
    const injector = await web3FromAddress(account.value.address);
    const tx = await api.provider.tx.balances
      .transfer(account.value.address, 1000)
      .signAndSend(account.value.address, { signer: injector.signer });
    const txHash = String(tx);
    txState.tx = txHash;
  } catch (error) {
    txState.error = error;
  }
};
