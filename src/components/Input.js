import { Input, Space } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Search } = Input;

export default function SearchInput({ setSearch }) {
	const navigate = useNavigate();

	const onSearch = (value) => {
		setSearch(value);
		value !== "" && navigate(`/${value}`);
	};

	return (
		<Space direction="vertical">
			<Search
				placeholder="Search"
				allowClear
				onSearch={onSearch}
				style={{ width: "50vw" }}
			/>
			<Outlet />
		</Space>
	);
}
