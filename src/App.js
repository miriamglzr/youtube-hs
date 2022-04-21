import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

import React, {useState, Suspense} from 'react';
// import {ReactComponent as YoutubeIcon} from './media/YouTubeLogo.svg';
// import VideoList from './components/VideoList';
// import VideoPlayer from './components/VideoPlayer';
import {useVideo} from './context/selectedVideo';

import NavBar from './components/NavBar';
import WatchPage from './components/WatchPage';

const VideoListLazy = React.lazy (() => import ('./components/VideoList'));
const VideoPlayerLazy = React.lazy (() => import ('./components/VideoPlayer'));

function App () {
  const [search, setSearch] = useState ('');
  const video = useVideo ();
  return (
    <Router className="App container">
      <NavBar setSearch={setSearch} />

      {video.id &&
        <Suspense fallback={<div>Loading...</div>}>
          <VideoPlayerLazy />
        </Suspense>}
      <Routes>
        <Route path="/" element={<div>home <Outlet /></div>} />
        <Route
          path=":search"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <VideoListLazy />
            </Suspense>
          }
        />
        <Route path="watch" element={<WatchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
