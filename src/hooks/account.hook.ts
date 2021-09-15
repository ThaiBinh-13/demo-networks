import { ref } from 'vue';
import {
  PublicKey,
  Connection,
  Transaction,
  SystemProgram,
  clusterApiUrl,
} from '@solana/web3.js';
import type { WalletAdapter } from '@solana/wallet-adapter-base';
import { UserWalletDetail } from '@/typings';
import { getFilteredProgramAccounts, createHttpProvider } from '@/utils/web3';
import {
  USER_STAKE_INFO_ACCOUNT_LAYOUT,
  ACCOUNT_LAYOUT,
} from '@/utils/account';
import { BigNumber } from '@/utils';
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

export const stakeInfos = ref<any[]>([]);

export const setUserWallet = (payload: UserWalletDetail) => {
  const { address } = payload;
  account.value = address;
};

export const clearUserWallet = () => {
  account.value = '';
};

export const getStakeAccounts = async () => {
  const connection = createHttpProvider(
    clusterApiUrl('mainnet-beta'),
    'confirmed',
  );
  // Stake program id of Raydium
  const STAKE_PROGRAM_ID = new PublicKey(
    'EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q',
  );
  const stakeFilters: any = [
    {
      memcmp: {
        offset: USER_STAKE_INFO_ACCOUNT_LAYOUT.offsetOf('stakerOwner'),
        // example user, replace it with your wallet address
        bytes: 'HYf79FVs4xqUAgDDX5PgecTyToXk858UDSJTExR9J94o',
      },
    },
  ];
  const stakeAccountInfos = await getFilteredProgramAccounts(
    connection,
    new PublicKey(STAKE_PROGRAM_ID),
    stakeFilters,
  );
  const result: any = [];
  // Parse acount data
  stakeAccountInfos.forEach(stakeAccountInfo => {
    const { data } = stakeAccountInfo.accountInfo;
    const userStakeInfo = USER_STAKE_INFO_ACCOUNT_LAYOUT.decode(data);
    const RAY_DECIMALS = 6;
    const stakeData = {
      depositBalance: new BigNumber(userStakeInfo.depositBalance)
        .shiftedBy(-RAY_DECIMALS)
        .toString(),
      rewardDebt: new BigNumber(userStakeInfo.rewardDebt)
        .shiftedBy(-RAY_DECIMALS)
        .toString(),
      stakeAccountAddress: stakeAccountInfo.publicKey.toBase58(),
    };
    result.push(stakeData);
  });
  stakeInfos.value = [...result];
};

export const getAccountInfo = async (
  connection: Connection,
  address: string,
) => {
  const pubKey = new PublicKey(address);
  const accountInfo = await connection.getAccountInfo(pubKey);
  console.debug({
    accountInfo,
  });
  // if (accountInfo) {
  //   const decodedData = ACCOUNT_LAYOUT.decode(accountInfo.data);
  //   console.debug({
  //     decodedData,
  //   });
  // }
};

// Create a transaction object
export const createTransferTransaction = async (provider: WalletAdapter) => {
  if (!provider.publicKey) {
    return null;
  }
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: provider.publicKey,
      toPubkey: provider.publicKey,
      lamports: 100,
    }),
  );
  transaction.feePayer = provider.publicKey;
  return transaction;
};

export const sendTransaction = async (
  provider: WalletAdapter,
  connection: Connection,
) => {
  const transaction = await createTransferTransaction(provider);
  if (transaction) {
    try {
      const txid = await provider.sendTransaction(transaction, connection, {
        signers: [],
      });
      return txid;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  return null;
};
