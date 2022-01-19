import React from 'react';
import { Keys } from 'keys';
import { getHeroes } from 'queries';
import Link from 'next/link';

import { useQuery } from 'react-query';

export default function () {
  const { data, isLoading, isError, error } = useQuery(Keys.fetch_heroes, getHeroes, {
    cacheTime: 5000, // default is 5 mins, this is calculated after the unmount
    // if revisited before 5secs the background request is sent WITHOUT setting isLoading
    // to true, if the data is different from the current one, it is changd on the fly
    // if revisited after 5 secs the request goes WITH isLoading set to true which would
    // show the loader on the screen in our case
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error! {Object(error).message}</h1>;
  return (
    <div>
      <Link href="/">Home</Link>
      <ul>{data && data.data && data.data.map((each) => <li key={each.id}>{each.name}</li>)}</ul>
    </div>
  );
}
