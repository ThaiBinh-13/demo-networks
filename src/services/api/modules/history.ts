import {
  IHistoryResponseV1,
  IHistoryResponseV2,
  IHistoryParams,
} from '@/typings';
import { makeAPI } from '../config';

export const mclAPI = makeAPI(process.env.VUE_APP_API_URL || '');

export const v2API = makeAPI(process.env.VUE_APP_API_V2_URL || '');

export const fetchHistory = async (
  params?: IHistoryParams,
): Promise<IHistoryResponseV1[]> => {
  const response = await mclAPI.get<IHistoryParams, IHistoryResponseV1[]>(
    `/history`,
    params,
  );
  return response.data;
};

export const fetchHistoryV2 = async (params?: IHistoryParams) => {
  const response = await v2API.get<IHistoryParams, IHistoryResponseV2[]>(
    `/history`,
    params,
  );
  return response.data;
};
