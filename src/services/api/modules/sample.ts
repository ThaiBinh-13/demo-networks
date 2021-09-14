import api from '@/services/api/config';

export const sample = () => {
  return api.get('/');
};
