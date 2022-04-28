import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";

import React, { useState, Suspense } from "react";

import { useVideo } from "./context/selectedVideo";

import NavBar from "./components/NavBar";
import WatchPage from "./components/WatchPage";

const VideoListLazy = React.lazy(() => import("./components/VideoList"));
const VideoPlayerLazy = React.lazy(() => import("./components/VideoPlayer"));

function App() {
	const [search, setSearch] = useState("");
	const [isSmall, setSmall] = useState(false);
	const video = useVideo();
	return (
		<Router className="App container">
			<NavBar setSearch={setSearch} search={search}>
				{video.id && (
					<Suspense fallback={<div>Loading...</div>}>
						<VideoPlayerLazy isSmall={isSmall} setSmall={setSmall} />
					</Suspense>
				)}
				<Routes>
					<Route
						path="/"
						element={
							<div>
								{" "}
								<Outlet />
							</div>
						}
					/>
					<Route
						path=":search"
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<VideoListLazy isSmall={isSmall} setSmall={setSmall} />
							</Suspense>
						}
					/>
					<Route
						path="watch/:videoId"
						element={<WatchPage isSmall={isSmall} />}
					/>
				</Routes>
			</NavBar>
		</Router>
	);
}

export default App;
