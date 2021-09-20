import { reactive } from 'vue';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { WS_PROVIDER } from '@/configs';

/**
 * Implicit `any` type is provider
 */
export const api = reactive<any>({
  provider: null,
  isReady: false,
});

export const initProvider = async () => {
  const pro = new WsProvider(WS_PROVIDER);
  const wsApi = await ApiPromise.create({ provider: pro }); // eslint-disable-line
  api.provider = wsApi;
  api.isReady = true;
};
