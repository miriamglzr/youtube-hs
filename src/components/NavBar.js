import React from 'react';
import {
  BellOutlined,
  AudioFilled,
  AppstoreOutlined,
  VideoCameraAddOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CompassOutlined,
  PlayCircleOutlined,
  DiffOutlined,
  HddOutlined,
} from '@ant-design/icons';
import {Avatar, Image} from 'antd';
import SearchInput from './Input';
import {NavLink, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';

const Logo = styled.img`
width: 150;
height: 100;
`;
const Nav = styled.nav`
min-height: 70px;
align-content: center;
`;
const ButtonCol = styled.button`
width: 100px;
height: 100px;
background-color: white;
border-style: solid;
border-color: transparent;
align-content: center;
justify-content: center;

&:hover{
    background-color: #dbdbdb;
}
`;

export default function NavBar({setSearch, children}) {
  const navigate = useNavigate ();
  return (
    <div>
      <Nav className="row d-flex align-items-center">
        <div className="row d-flex align-items-center">
          <div className="col-2  justify-content-around  d-flex align-items-center">
            <MenuUnfoldOutlined
              style={{fontSize: 27, margin: 8, cursor: 'pointer'}}
            />
            <NavLink to="/" className="d-flex align-items-center">

              <Logo
                src={require ('../media/YouTubeLogo.png')}
                alt="Youtube logo"
                style={{width: 120}}
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
            <BellOutlined
              style={{fontSize: 25, margin: 8, cursor: 'pointer'}}
            />
            <Avatar
              src={
                <Image
                  src={require ('../media/Rocco.jpg')}
                  style={{width: 32}}
                />
              }
              style={{fontSize: 25, margin: 8}}
            />
          </div>
        </div>
      </Nav>
      <div className="row">
        <div className="col-1">
          <ButtonCol onClick={() => navigate ('/')}>
            <HomeOutlined
              style={{fontSize: 25, margin: 8, cursor: 'pointer'}}
            />
            <p>
              Home
            </p>
          </ButtonCol>
          <ButtonCol>
            <CompassOutlined
              style={{fontSize: 25, margin: 8, cursor: 'pointer'}}
            />
            <p>
              Explore
            </p>
          </ButtonCol>
          <ButtonCol>
            <PlayCircleOutlined
              style={{fontSize: 25, margin: 8, cursor: 'pointer'}}
            />
            <p>
              Shorts
            </p>
          </ButtonCol>
          <ButtonCol>
            <DiffOutlined
              style={{fontSize: 25, margin: 8, cursor: 'pointer'}}
            />
            <p>
              Suscriptions
            </p>
          </ButtonCol>
          <ButtonCol>
            <HddOutlined style={{fontSize: 25, margin: 8, cursor: 'pointer'}} />
            <p>
              Library
            </p>
          </ButtonCol>
        </div>
        <div className="col-11"><Home />{children}</div>
      </div>
    </div>
  );
}
