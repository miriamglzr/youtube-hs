import React from 'react';
import {useVideo} from '../context/selectedVideo';

export default function WatchPage () {
  const video = useVideo ();
  const {id, selectedVideo, resetState} = video;
  return (
    selectedVideo &&
    <div>
      <h2>{selectedVideo.title}</h2>
      <p>{selectedVideo.views} views</p>
    </div>
  );
}
