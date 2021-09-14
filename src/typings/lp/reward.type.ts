export interface IReward {
  address: string;
  symbol: string;
  balance: string;
  rewardBalance: string;
  liquidityPortion: string;
}

export enum ERewardType {
  MY_REWARD,
  GOV_REWARD,
  BMXX = 99,
}
