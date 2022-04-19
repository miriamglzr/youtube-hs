import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import SearchInput from './components/Input';
import {useState} from 'react';
import VideoList from './components/VideoList';

function App () {
  const [search, setSearch] = useState ('');
  return (
    <Router className="App container">
      <h1>Youtube App</h1>
      <SearchInput setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path=":search" element={<VideoList />} />
        <Route path=":search/:videoId" element={<div>Selected Video</div>} />
      </Routes>
    </Router>
  );
}

export default App;
