import {LikeOutlined} from '@ant-design/icons';
import React from 'react';

import {useVideo} from '../context/selectedVideo';

export default function WatchPage () {
  // let [searchParams, setSearchParams] = useSearchParams ();
  const video = useVideo ();
  const {id, selectedVideo} = video;
  //console.log (selectedVideo);

  return (
    selectedVideo &&
    id &&
    <div className="container mt-3">
      <h2>{selectedVideo.title}</h2>
      <p>
        {selectedVideo.views}
        {'    '}
        views |
        {'    '}
        <LikeOutlined
          style={{fontSize: '20px', cursor: 'pointer', marginRight: '5px'}}
        />
        {(Number (selectedVideo.views) * 0.009).toFixed (0)}
      </p>
      <p>{selectedVideo.description}</p>

    </div>
  );
}
