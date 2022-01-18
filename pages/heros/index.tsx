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
  const [counter, setCounter] = React.useState(0);
  const { data, isLoading } = useQuery(Keys.fetch_heroes, () => {
    return axios.get('http://localhost:4000/superheroes') as Promise<UseQueryResult<Node[]>>;
  });
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Count</button>
      <ul>{data && data.data && data.data.map((each) => <li key={each.id}>{each.name}</li>)}</ul>
    </div>
  );
}
