import Draggable from "react-draggable";
import { useVideo } from "../context/selectedVideo";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

export default function VideoPlayer({ isSmall, setSmall }) {
	const video = useVideo();
	const navigate = useNavigate();

	const { id, selectedVideo, resetState } = video;

	return (
		<Draggable
			disabled={isSmall ? false : true}
			style={!isSmall && { transform: 0 }}
		>
			<div className={`${isSmall && "small"}`}>
				<div className="d-flex justify-content-between">
					<CloseButton onClick={() => setSmall(!isSmall)}>
						{isSmall ? "<" : ">"}
					</CloseButton>

					{isSmall && (
						<CloseButton
							onClick={() => {
								resetState();
								setSmall(false);
							}}
						>
							x
						</CloseButton>
					)}
				</div>
				<div
					className={`d-flex justify-content-center ${!isSmall && "p-2"}`}
					onClick={() => navigate("/watch/" + id)}
				>
					{selectedVideo && id && (
						<Video
							src={`https://www.youtube.com/embed/${id}?autoplay=1`}
							className={`${isSmall && "w-100"}`}
						/>
					)}
				</div>
				{selectedVideo && id && isSmall && (
					<p>
						{selectedVideo.title.length < 50
							? selectedVideo.title
							: selectedVideo.title.split("").splice(0, 50, "...")}
					</p>
				)}
			</div>
		</Draggable>
	);
}
