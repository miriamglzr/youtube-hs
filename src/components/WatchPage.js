import { LikeOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../context/selectedVideo";

export default function WatchPage() {
	const { videoId } = useParams();
	const video = useVideo();
	const { id, selectedVideo, setId } = video;

	//get videoId from params
	useEffect(() => {
		setId(videoId);
	}, [videoId]);

	return (
		selectedVideo &&
		id && (
			<div className="container mt-2">
				<h4>{selectedVideo.title}</h4>
				<p>
					{selectedVideo.views}
					{"    "}
					views |{"    "}
					<LikeOutlined
						style={{ fontSize: "16px", cursor: "pointer", marginRight: "5px" }}
					/>
					{(Number(selectedVideo.views) * 0.009).toFixed(0)}
				</p>
				<p>{selectedVideo.description}</p>
			</div>
		)
	);
}
