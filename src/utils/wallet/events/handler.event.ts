import { ConnectorEventHandlers } from '@/typings';

const eventHandlers: ConnectorEventHandlers = {
  disconnect: () => {
    console.debug('Disconnected');
  },
  error: (error: Error) => {
    console.debug({ error });
  },
};

export default eventHandlers;
