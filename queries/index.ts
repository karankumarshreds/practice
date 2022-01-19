import axios, { AxiosError } from 'axios';
import { IHero } from 'interfaces';
import { UseQueryResult } from 'react-query';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

export const getHeroes = () => api.get('/superheros') as Promise<IHero[]>;

export default api;
