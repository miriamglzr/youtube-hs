import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import {useVideo} from '../context/selectedVideo';
import {useNavigate, useSearchParams} from 'react-router-dom';
import styled from 'styled-components';
//import {useEffect} from 'react';

const CloseButton = styled.button`
background-color: transparent;
border-style: solid;
border-color: transparent;
font-size: 25px;
padding-top: 0
`;

export default function VideoPlayer({isSmall, setSmall}) {
  let [searchParams, setSearchParams] = useSearchParams ();
  const video = useVideo ();
  const navigate = useNavigate ();
  //const [isSmall, setSmall] = useState (false);
  //console.log (video);
  const {id, selectedVideo, resetState} = video;

  useEffect (
    () => {
      async function fetchData () {
        if (id !== '') setSearchParams ({v: id});
      }
    },
    [id]
  );
  //selectedVideo && setSearchParams ({v: id});

  return selectedVideo && id
    ? <div className={`${isSmall && 'small'}`}>
        <div className="d-flex justify-content-between">
          <CloseButton onClick={() => setSmall (!isSmall)}>
            {isSmall ? '<' : '>'}
          </CloseButton>

          {isSmall &&
            <CloseButton
              onClick={() => {
                resetState ();
                setSmall (false);
              }}
            >
              x
            </CloseButton>}
        </div>
        <div
          className={`d-flex justify-content-center`}
          onClick={() => navigate ('/watch')}
        >

          <ReactPlayer
            url={selectedVideo.url}
            width={isSmall ? '100%' : '700px'}
            height={isSmall ? '100%' : '400px'}
          />
        </div>
        {isSmall &&
          <p>
            {selectedVideo.title.length < 50
              ? selectedVideo.title
              : selectedVideo.title.split ('').splice (0, 50, '...')}
          </p>}
      </div>
    : <div>loading...</div>;
}
