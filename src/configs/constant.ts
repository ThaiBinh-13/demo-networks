export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000';

export const BNB_V1_MOCK_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';

export const UINT_MAX_VALUE =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935';
export const DEFAULT_APPROVE_AMOUNT = UINT_MAX_VALUE;

export const TX_URL_MAP = {
  97: 'testnet.',
  56: '',
};

export const CONTRACT_UPDATE_INTERVAL = 10000; // milliseconds
export const BALANCE_UPDATE_INTERVAL = 10000; // milliseconds

export const MAX_DISPLAY_DP = 6;

export const LIST_TO_HEALTH_CHECK = [
  {
    name: 'Multiplier V2 API',
    endpoint: 'https://api-v2.multiplier.finance',
  },
  {
    name: 'Multiplier V1 API',
    endpoint: 'https://api-mcl.multiplier.finance',
  },
  {
    name: 'Stats API',
    endpoint: 'https://apis.multiplier.finance',
  },
  {
    name: 'Multiplier V1',
    endpoint: 'https://app-v1.multiplier.finance',
  },
  {
    name: 'Multiplier V2',
    endpoint: 'https://app.multiplier.finance',
  },
  {
    name: 'Converter',
    endpoint: 'https://mcl-converter.multiplier.finance/',
  },
  {
    name: 'Landing page',
    endpoint: 'https://multiplier.finance/',
  },
  {
    name: 'SSB',
    endpoint: 'https://ssb.multiplier.finance/',
  },
  {
    name: 'Liq Bot UI V2',
    endpoint: 'https://liquidation.multiplier.finance/',
  },
  {
    name: 'Liq Bot API V2',
    endpoint: 'https://bot-api.multiplier.finance/',
  },
];

export const TOKEN_DATA_KEY = 'erc20meta';

export const HISTORY_EVENT_NAMES = [
  'Deposit',
  'RedeemUnderlying',
  'Borrow',
  'Repay',
  'ClaimReward',
];

export const HISTORY_EVENT_NAMES_V2 = [
  'Deposit',
  'Withdraw',
  'Borrow',
  'Repay',
  'FlashLoan',
  'LiquidationCall',
];
export const ETH_BLOCK_PER_DAY = 6469;
export const BSC_BLOCK_PER_DAY = 26800;
