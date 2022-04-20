import React, {useEffect} from 'react';
import {videoS} from '../fakeVidInfo';
import ReactPlayer from 'react-player';
import {useVideo} from '../context/selectedVideo';
import {useSearchParams} from 'react-router-dom';

//import {useEffect} from 'react';

export default function VideoPlayer () {
  let [searchParams, setSearchParams] = useSearchParams ();
  const video = useVideo ();
  console.log (video);
  const {id, selectedVideo} = video;

  useEffect (
    async () => {
      if (id !== undefined) setSearchParams ({v: id});
    },
    [id]
  );
  //selectedVideo && setSearchParams ({v: id});

  return (
    selectedVideo &&
    id &&
    <div>
      <ReactPlayer url={selectedVideo.url} />
    </div>
  );
}
