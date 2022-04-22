//import React, {useEffect} from 'react';
//import ReactPlayer from 'react-player';
import {useVideo} from '../context/selectedVideo';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const CloseButton = styled.button`
background-color: transparent;
border-style: solid;
border-color: transparent;
font-size: 20px;
padding-top: 0;

`;

const Video = styled.iframe`
  aspect-ratio: 16 / 9;
  width: 70%;
  max-height: 50vh;
`;

export default function VideoPlayer({isSmall, setSmall}) {
  //let [searchParams, setSearchParams] = useSearchParams ();
  const video = useVideo ();
  const navigate = useNavigate ();
  //const [isSmall, setSmall] = useState (false);
  //console.log (video);
  const {id, selectedVideo, resetState} = video;

  //selectedVideo && setSearchParams ({v: id});

  //selectedVideo && id
  // ?
  return (
    <div className={`${isSmall && 'small'}`}>
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
        className={`d-flex justify-content-center ${!isSmall && 'p-2'}`}
        onClick={() => navigate ('/watch/' + id)}
      >
        {selectedVideo &&
          id &&
          <Video
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            className={`${isSmall && 'w-100'}`}
          />}
        {/*
        {selectedVideo &&
          id &&
          <ReactPlayer
            url={selectedVideo.url}
            width={isSmall ? '100%' : '700px'}
            height={isSmall ? '100%' : '400px'}
          />} */}
      </div>
      {selectedVideo &&
        id &&
        isSmall &&
        <p>
          {selectedVideo.title.length < 50
            ? selectedVideo.title
            : selectedVideo.title.split ('').splice (0, 50, '...')}
        </p>}
    </div>
  );
  //     : <div>loading...</div>;
}
