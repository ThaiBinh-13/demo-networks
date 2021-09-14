import invariant from 'tiny-invariant';

// Minimal fork of https://github.com/NoahZinsmeister/web3-react/blob/v6/packages/core/src/normalizers.ts
export function normalizeChainId(inputChainId: string | number): number {
  if (typeof inputChainId === 'string') {
    // Temporary fix until the next version of Metamask Mobile gets released.
    // In the current version (0.2.13), the chainId starts with “Ox” rather
    // than “0x”. Fix: https://github.com/MetaMask/metamask-mobile/pull/1275
    const chainId = inputChainId.replace(/^Ox/, '0x');

    const parsedChainId = Number.parseInt(
      chainId,
      chainId.trim().substring(0, 2) === '0x' ? 16 : 10,
    );
    invariant(
      !Number.isNaN(parsedChainId),
      `chainId ${chainId} is not an integer`,
    );
    return parsedChainId;
  }
  invariant(
    Number.isInteger(inputChainId),
    `chainId ${inputChainId} is not an integer`,
  );
  return inputChainId;
}
