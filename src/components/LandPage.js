import { Outlet } from "react-router-dom";
import useSWR from "swr";
import { Card } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../context/selectedVideo";

const List = styled.ul`
	list-style: none;
	padding-left: 0;
	flex-direction: row;
`;
const { Meta } = Card;

export default function LandPage({ isSmall }) {
	const navigate = useNavigate();
	const video = useVideo();
	const { setId } = video;

	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const url = `https://youtube.thorsteinsson.is/api/search?q=react`;

	const { data, error } = useSWR(url, fetcher);

	if (error) return console.log(error);
	if (!data) return console.log("isLoading");

	const pickVideo = async (item) => {
		await setId(item.id.videoId);

		!isSmall && (await navigate(`/watch/` + item.id.videoId));
	};

	return data.length ? (
		<div>
			<List className="row mt-2">
				{data.map((item, i) => {
					return (
						<li
							key={item.id.videoId}
							style={{ cursor: "pointer", display: "inline" }}
							className="col-md-3"
						>
							{/* <ItemCard item={item} isSmall={isSmall} /> */}
							<Card
								hoverable
								style={{ width: 240 }}
								cover={
									<img src={item.snippet.thumbnails.url} alt={item.title} />
								}
								onClick={() => pickVideo(item)}
							>
								<Meta title={item.title} description={item.views + " views"} />
							</Card>
						</li>
					);
				})}
			</List>
			<Outlet />
		</div>
	) : (
		console.log(data)
	);
}
