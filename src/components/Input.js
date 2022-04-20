import {Input, Space} from 'antd';
import {AudioOutlined} from '@ant-design/icons';
import {Outlet, useNavigate} from 'react-router-dom';

const {Search} = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );

export default function SearchInput({setSearch}) {
  const navigate = useNavigate ();
  const onSearch = value => {
    console.log (value);
    setSearch (value);
    navigate (`/${value}`);
  };

  return (
    <Space direction="vertical">

      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{width: 200}}
      />
      <Outlet />
    </Space>
  );
}
