import { makeAPI } from '../config';

export const apiHealthCheck = async (url: string) => {
  const api = makeAPI(url, 10000);
  const response = await api.get('/');
  return response;
};
