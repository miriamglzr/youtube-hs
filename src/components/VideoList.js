import {useState} from 'react';
import {NavLink, Outlet, useParams} from 'react-router-dom';
import useSWR from 'swr';
import ItemCard from './ItemCard';
import styled from 'styled-components';
//import data from '../fakedb.json';

//import { fakedb } from "../fakedb"; // for api saturation problems

const List = styled.ul`
list-style: none;
padding-left: 0
`;

export default function VideoList({isSmall}) {
  const {search} = useParams ();

  const fetcher = (...args) => fetch (...args).then (res => res.json ());

  const url = `https://youtube.thorsteinsson.is/api/search?q=${search}`;

  const {data, error} = useSWR (url, fetcher);

  if (error) return console.log (error);
  if (!data) return console.log ('isLoading');
  // renderizar datos

  //return console.log (data);
  return data.length
    ? <div>
        <List>
          {data.map ((item, i) => {
            return (
              <li key={item.id.videoId} style={{cursor: 'pointer'}}>
                {/* // <NavLink to={item.url}>{item.title}</NavLink> */}
                <ItemCard item={item} isSmall={isSmall} />
              </li>
            );
          })}
        </List>
        <Outlet />

      </div>
    : console.log (data);
}
