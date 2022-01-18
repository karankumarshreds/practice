import axios from 'axios';
import { IHero } from 'interfaces';
import { UseQueryResult } from 'react-query';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

export const getHeroes = () => api.get('/superheroes') as Promise<UseQueryResult<IHero[]>>;

export default api;
