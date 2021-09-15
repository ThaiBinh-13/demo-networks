import {
  Connection,
  Commitment,
  PublicKey,
  AccountInfo,
} from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@/configs';

export const createHttpProvider = (rpcUrl: string, commitment: Commitment) =>
  new Connection(rpcUrl, commitment);

export async function findProgramAddress(
  seeds: Array<Buffer | Uint8Array>,
  programId: PublicKey,
) {
  const [publicKey, nonce] = await PublicKey.findProgramAddress(
    seeds,
    programId,
  );
  return { publicKey, nonce };
}

export async function findAssociatedTokenAddress(
  walletAddress: PublicKey,
  tokenMintAddress: PublicKey,
) {
  const { publicKey } = await findProgramAddress(
    [
      walletAddress.toBuffer(),
      TOKEN_PROGRAM_ID.toBuffer(),
      tokenMintAddress.toBuffer(),
    ],
    ASSOCIATED_TOKEN_PROGRAM_ID,
  );
  return publicKey;
}

export const getFilteredProgramAccounts = async (
  connection: Connection,
  programId: PublicKey,
  filters: any,
): Promise<{ publicKey: PublicKey; accountInfo: AccountInfo<Buffer> }[]> => {
  const response = await connection.getProgramAccounts(programId, {
    commitment: connection.commitment,
    filters,
    encoding: 'base64',
  });
  return response.map(
    ({ pubkey, account: { data, executable, owner, lamports } }) => ({
      publicKey: new PublicKey(pubkey),
      accountInfo: {
        data,
        executable,
        owner: new PublicKey(owner),
        lamports,
      },
    }),
  );
};
