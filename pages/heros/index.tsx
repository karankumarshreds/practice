import React from 'react';
import { Keys } from '../../keys';
import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface Node {
  id: number;
  name: string;
  alterEgo: string;
}

export default function () {
  const { data, isLoading } = useQuery(Keys.fetch_heroes, () => {
    return axios.get('http://localhost:4000/superheroes') as Promise<UseQueryResult<Node[]>>;
  });
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  return <ul>{data && data.data && data.data.map((each) => <li>{each.name}</li>)}</ul>;
}
