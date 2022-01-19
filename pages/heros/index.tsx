import React from 'react';
import { Keys } from 'keys';
import { getHeroes } from 'queries';

import { useQuery } from 'react-query';

export default function () {
  const [counter, setCounter] = React.useState(0);
  const { data, isLoading, isError, error } = useQuery(Keys.fetch_heroes, getHeroes);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error! {Object(error).message}</h1>;
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Count</button>
      <ul>{data && data.map((each) => <li key={each.id}>{each.name}</li>)}</ul>
    </div>
  );
}
