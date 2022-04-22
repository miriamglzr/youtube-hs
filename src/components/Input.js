import {Input, Space} from 'antd';

import {Outlet, useNavigate} from 'react-router-dom';
//import {useVideo} from '../context/selectedVideo';

const {Search} = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: 'rgba(0, 0, 0, 0.45)',
//     }}
//   />
// );

export default function SearchInput({setSearch}) {
  const navigate = useNavigate ();
  // const video = useVideo ();
  const onSearch = value => {
    //  console.log (value);
    setSearch (value);

    value !== '' && navigate (`/${value}`);
  };

  return (
    <Space direction="vertical">

      <Search
        placeholder="Search"
        allowClear
        onSearch={onSearch}
        style={{width: '50vw'}}
      />
      <Outlet />
    </Space>
  );
}
