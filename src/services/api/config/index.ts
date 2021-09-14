import qs from 'qs';
import { millisecond } from '@/typings';
import mainHTTP, { createHTTP } from './axios';

export const makeAPI = (baseURL: string, timeOut?: millisecond) => {
  const http = createHTTP(baseURL, timeOut);
  return {
    get: <P, R>(url: string, params?: P) =>
      http.get<R>(`${url}?${qs.stringify(params)}`),
    post: <D, R>(url: string, data: D) => http.post<R>(url, data),
    delete: (url: string) => http.delete(url),
    put: <D, R>(url: string, data: D) => http.put<R>(url, data),
  };
};

const api = {
  get: <P, R>(url: string, params?: P) =>
    mainHTTP.get<R>(`${url}?${qs.stringify(params)}`),
  post: <D, R>(url: string, data: D) => mainHTTP.post<R>(url, data),
  delete: (url: string) => mainHTTP.delete(url),
  put: <D, R>(url: string, data: D) => mainHTTP.put<R>(url, data),
};

export default api;
