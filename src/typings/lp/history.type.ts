import { TokenMetadataType } from '@/typings';
import { BigNumber } from '@/utils';
import dayjs from 'dayjs';

export type ReserveMap = Map<string, TokenMetadataType>;

export interface IHistory {
  id: number;
  name: string;
  createdAt: number;
  asset: string;
  value: number | BigNumber | string;
  dp: number;
  decimals: number;
  user: string;
  txHash?: string;
}

export interface IHistoryGroupByTxHashV1 {
  id: string;
  name: string;
  createdAt: number;
  asset: string;
  value: string;
  txHash: string;
}

export interface IHistoryGroupByTxHashV2 {
  id: string;
  name: string[];
  createdAt: number;
  asset: string[];
  value: string[];
  txHash: string;
}

export interface IHistoryV2 {
  id: number;
  name: string;
  createdAt: number;
  asset: string;
  value: string | number | BigNumber;
  dp: number;
  decimals: number;
  user: string;
  txHash?: string;
}

export interface IHistoryResponseV1Data {
  _amount: number;
  _reserve: string;
  _timestamp: number;
  _user: string;
  _referral?: number | string | null;
  _borrowBalanceIncrease?: number;
  _borrowRate?: number;
  _borrowRateMode?: number;
  _originationFee?: number;
  _amountMinusFees?: number;
  _fees?: number;
  _repayer?: string;
}

export interface IHistoryResponseV2Data {
  amount: number;
  user: string;
  reserve?: string;
  referral?: number | string | null;
  onBehalfOf?: string;
  to?: string;
  borrowRate?: number;
  borrowRateMode?: number;
  repayer?: string;
  asset?: string;
  initiator?: string;
  premium?: string;
  referralCode?: number | string | null;
  target?: string;
  collateralAsset?: string;
  debtAsset?: string;
  debtToCover?: number;
  liquidatedCollateralAmount?: number;
  liquidator?: string;
  receiveAToken?: boolean;
}
export interface IHistoryResponseV1 {
  CreatedAt: string;
  ID: number;
  blockHeight: number;
  eventName: string;
  txHash: string;
  data: IHistoryResponseV1Data;
  type: number;
  user: string;
}

export interface IHistoryResponseV2 {
  CreatedAt: string;
  ID: number;
  blockHeight: number;
  block_timestamp: number;
  eventName: string;
  txHash: string;
  data: IHistoryResponseV2Data;
  type: number;
  user: string;
}

export interface IHistoryFilter {
  eventName: string[];
  asset: string[];
  fromDate: dayjs.Dayjs;
  toDate: dayjs.Dayjs;
}

export interface IHistoryParams {
  eventName: string;
  asset: string;
  fromDate: number;
  toDate: number;
}

export enum EOption {
  All = 'All',
}
