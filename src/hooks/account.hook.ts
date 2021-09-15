import { ref } from 'vue';
import { PublicKey, Connection } from '@solana/web3.js';
import { UserWalletDetail } from '@/typings';
import { getFilteredProgramAccounts } from '@/utils/web3';
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

export const getStakeAccounts = async (connection: Connection) => {
  const STAKE_PROGRAM_ID = new PublicKey(
    'EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q',
  );
  const stakeFilters: any = [
    {
      memcmp: {
        offset: USER_STAKE_INFO_ACCOUNT_LAYOUT.offsetOf('stakerOwner'),
        bytes: 'HYf79FVs4xqUAgDDX5PgecTyToXk858UDSJTExR9J94o',
      },
    },
    // {
    //   dataSize: 165
    // }
  ];
  console.debug({
    offset: USER_STAKE_INFO_ACCOUNT_LAYOUT.offsetOf('stakerOwner'),
  });
  const stakeAccountInfos = await getFilteredProgramAccounts(
    connection,
    new PublicKey(STAKE_PROGRAM_ID),
    stakeFilters,
  );
  const result: any = [];
  stakeAccountInfos.forEach(stakeAccountInfo => {
    const { data } = stakeAccountInfo.accountInfo;
    const userStakeInfo = USER_STAKE_INFO_ACCOUNT_LAYOUT.decode(data);
    console.log(userStakeInfo.stakerOwner.toBase58());
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
