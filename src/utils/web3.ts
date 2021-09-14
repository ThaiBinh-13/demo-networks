import { Connection, Commitment, PublicKey } from '@solana/web3.js';
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
