import axios from 'axios';
import JSONBigInt from 'json-bigint';
import { millisecond } from '@/typings';

const JSONBig = JSONBigInt({ storeAsString: true });

/**
 * Create main axios instance
 */
const mainHTTP = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  transformResponse: res => {
    const cookedRes = JSONBig.parse(res);
    return cookedRes;
  },
});

export default mainHTTP;

/**
 * Create custom axios instance
 * @param baseURL Base URL to use in axios
 */
export const createHTTP = (baseURL: string, timeOut?: millisecond) => {
  if (timeOut) {
    return axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: timeOut,
    });
  }
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
