import React from 'react';
import {
  BellOutlined,
  AudioFilled,
  AppstoreOutlined,
  VideoCameraAddOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {Avatar, Image} from 'antd';
import SearchInput from './Input';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.img`
width: 150;
height: 100;
`;

export default function NavBar({setSearch}) {
  return (
    <nav>
      <div className="row">
        <div className="col-2 d-flex align-items-center justify-content-between">
          <MenuUnfoldOutlined
            style={{fontSize: 25, margin: 8, cursor: 'pointer'}}
          />
          <NavLink to="/" className="d-flex align-items-center">

            <Logo
              src={require ('../media/YouTubeLogo.png')}
              alt="Youtube logo"
              style={{width: 100}}
            />
          </NavLink>
        </div>
        <div className="col-6 d-flex align-items-center">
          <SearchInput setSearch={setSearch} />
        </div>
        <div className="col-4 d-flex justify-content-around">
          <AudioFilled style={{fontSize: 25, margin: 8, cursor: 'pointer'}} />
          <VideoCameraAddOutlined
            style={{fontSize: 25, margin: 8, cursor: 'pointer'}}
          />
          <AppstoreOutlined
            style={{fontSize: 25, margin: 8, cursor: 'pointer'}}
          />
          <BellOutlined style={{fontSize: 25, margin: 8, cursor: 'pointer'}} />
          <Avatar
            src={
              <Image src={require ('../media/Rocco.jpg')} style={{width: 32}} />
            }
            style={{fontSize: 25, margin: 8}}
          />
        </div>
      </div>
    </nav>
  );
}
