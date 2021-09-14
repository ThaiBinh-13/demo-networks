// import invariant from 'tiny-invariant';
// import { ConnectorResponse, ConnectorConfig } from '@/typings';
// import { listenEvents } from '@/utils/wallet/events/listener.event';

// const connect = async ({
//   eventHandlers,
// }: ConnectorConfig): Promise<ConnectorResponse> => {
//   const provider = window.ethereum;
//   // Check if user has injected wallet
//   invariant(!!provider, 'WALLET_NOT_FOUND');
//   // Kick off event listener
//   listenEvents(eventHandlers, provider);

//   const accounts = await provider.enable();
//   const chainId = await provider.request({ method: 'eth_chainId' });

//   return {
//     accounts,
//     address: accounts[0],
//     chainId,
//     provider,
//   };
// };

// export default {
//   name: 'meta_mask',
//   connect,
// };
