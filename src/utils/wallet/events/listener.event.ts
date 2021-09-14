import { ConnectorEventHandlers } from '@/typings';

export const listenEvents = (
  { disconnect, error: onError }: ConnectorEventHandlers,
  provider: any,
  callback?: () => void,
) => {
  provider.on('disconnect', () => {
    disconnect();

    if (callback) callback();
  });
  provider.on('error', (error: Error) => {
    onError(error);
  });
};
