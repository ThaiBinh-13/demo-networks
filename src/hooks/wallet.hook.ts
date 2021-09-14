import { reactive, ref } from 'vue';
import { PublicKey, Connection } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, NATIVE_SOL } from '@/configs';
import { findAssociatedTokenAddress } from '@/utils/web3';
import { BigNumber } from '@/utils';

export const tokenAccountsDataMap = reactive<Map<string, any>>(
  new Map<string, any>(),
);
export const isLoadingBalance = ref(false);

export const getParsedTokenAccounts = async (
  publicKey: PublicKey,
  connection: Connection,
) => {
  try {
    const parsedTokenAccounts = await connection.getParsedTokenAccountsByOwner(
      publicKey,
      {
        programId: TOKEN_PROGRAM_ID,
      },
      'confirmed',
    );
    const promises = parsedTokenAccounts.value.map(async tokenAccountInfo => {
      const tokenAccountPubkey = tokenAccountInfo.pubkey;
      const tokenAccountAddress = tokenAccountPubkey.toBase58();
      const parsedInfo = tokenAccountInfo.account.data.parsed.info;
      const mintAddress = parsedInfo.mint;
      console.debug({
        parsedInfo,
      });
      const decimals = Number(parsedInfo.tokenAmount.decimals);
      const balance = new BigNumber(parsedInfo.tokenAmount.amount)
        .shiftedBy(-decimals)
        .toString();
      const ata = await findAssociatedTokenAddress(
        publicKey,
        new PublicKey(mintAddress),
      );
      if (ata.equals(tokenAccountPubkey)) {
        console.debug({
          mintAddress,
          tokenAccountAddress,
          balance,
        });
        return {
          mintAddress,
          tokenAccountAddress,
          balance,
        };
      }
      return {
        mintAddress,
        tokenAccountAddress,
        balance: '0',
      };
    });
    const result = await Promise.allSettled(promises);
    result.forEach((el: any) => {
      if (el && el.value) {
        const { value } = el;
        console.debug({
          value,
        });
        tokenAccountsDataMap.set(value.mintAddress, value);
      }
    });
  } catch (error) {
    isLoadingBalance.value = false;
  }
};

export const getBalanceSol = async (
  publicKey: PublicKey,
  connection: Connection,
) => {
  const balance = await connection.getBalance(publicKey);
  const balanceSol = new BigNumber(balance)
    .shiftedBy(-NATIVE_SOL.decimals)
    .toString();
  tokenAccountsDataMap.set(NATIVE_SOL.mintAddress, {
    mintAddress: NATIVE_SOL.mintAddress,
    tokenAccountAddress: publicKey.toBase58(),
    balance: balanceSol,
  });
};

export const getTokenAccountsByOwner = async (
  publicKey: PublicKey,
  connection: Connection,
) => {
  await Promise.allSettled([
    getParsedTokenAccounts(publicKey, connection),
    getBalanceSol(publicKey, connection),
  ]);
};
