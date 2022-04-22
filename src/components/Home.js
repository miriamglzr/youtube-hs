import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const tags = [
  'dance',
  'reggaeton',
  'chill',
  'salsa',
  'deep house',
  'camilo',
  'live',
  'shiba inu',
  'camilo - no te vayas',
  'jazz',
  'electronic',
  'vacaxiones - feid',
];

const Tag = styled.button`
width: auto;
min-width: 80px;
font-size: 20px;
background-color:  #dbdbdb;
border-style: solid;
border-width: 1px;
border-radius: 20px;
align-content: center;
justify-content: center;
margin: 10px;

padding: 4px 10px 4px 10px;

&:hover{
    background-color: black;
    color: white;
}
`;
export default function Home () {
  const navigate = useNavigate ();
  return (
    <div style={{top: 0, borderTop: '1px', borderColor: '#dbdbdb'}}>
      <div className="row">
        {tags.map ((tag, i) => {
          return (
            <Tag key={tag + i} onClick={() => navigate (`/${tag}`)}>{tag}</Tag>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
