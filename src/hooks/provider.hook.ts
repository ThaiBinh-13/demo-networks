import { ref } from 'vue';
import { Connection, clusterApiUrl, Cluster } from '@solana/web3.js';
import { createHttpProvider } from '@/utils/web3';
import { NETWORK_CLUSTER } from '@/configs';
/**
 * Implicit `any` type is provider for each chain
 */
export const connection = ref<Connection>();

export const initConnection = () => {
  const conn = createHttpProvider(
    clusterApiUrl(NETWORK_CLUSTER as Cluster),
    'confirmed',
  );
  connection.value = conn;
};
