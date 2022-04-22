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
    <div className="container mt-2">
      <h4>{selectedVideo.title}</h4>
      <p>
        {selectedVideo.views}
        {'    '}
        views |
        {'    '}
        <LikeOutlined
          style={{fontSize: '16px', cursor: 'pointer', marginRight: '5px'}}
        />
        {(Number (selectedVideo.views) * 0.009).toFixed (0)}
      </p>
      <p>{selectedVideo.description}</p>

    </div>
  );
}
