import {useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
//import useSWR from 'swr';
import ItemCard from './ItemCard';
import data from '../fakedb.json';

//import { fakedb } from "../fakedb"; // for api saturation problems

export default function VideoList () {
  const {search} = useParams ();
  const [page, setPage] = useState (1);
  //   const fetcher = (...args) => fetch (...args).then (res => res.json ());

  //   const url = `https://youtube.thorsteinsson.is/api/search?q=${search}`;

  //   const {data, error} = useSWR (url, fetcher);

  //   if (error) return console.log (error);
  //   if (!data) return console.log ('isLoading');
  // renderizar datos

  //return console.log (data);
  return (
    data.length &&
    <div>
      <ul>
        {data.map ((item, i) => {
          return (
            <li key={item.id.videoId}>
              {/* // <NavLink to={item.url}>{item.title}</NavLink> */}
              <ItemCard item={item} />
            </li>
          );
        })}
      </ul>
      <button onClick={() => page !== 1 && setPage (page - 1)}>previous</button>
      <div>{page}</div>
      <button onClick={() => setPage (page + 1)}>next</button>
    </div>
  );
}
