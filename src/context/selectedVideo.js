import {useEffect} from 'react';
import {createContext, useContext, useState} from 'react';
//import useFetch from 'react-fetch-hook';
import useSWR from 'swr';

const SelectedVideoContext = createContext ();

export function SelectedVideoProvider({children}) {
  const [selectedVideo, setSelectedVideo] = useState ('');
  const [id, setId] = useState ('');

  const fetcher = (...args) => fetch (...args).then (res => res.json ());

  const url = `https://youtube.thorsteinsson.is/api/videos/${id}`;

  const {data, error} = useSWR (url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false,
  });

  return (
    <SelectedVideoContext.Provider
      value={{selectedVideo: data, setSelectedVideo, setId, id}}
    >
      {children}
    </SelectedVideoContext.Provider>
  );
}

export function useVideo () {
  const context = useContext (SelectedVideoContext);
  if (!context) {
    throw new Error ('useVideo must be used within a SelectedVideoProvider');
  }
  return context;
}
