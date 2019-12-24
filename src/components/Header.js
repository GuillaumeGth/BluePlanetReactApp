import React from 'react';
import Menu from "./Menu";
import styled from 'styled-components';

const Header = (props) =>{
  const HeaderControl = styled.div`  
    z-index: 2;
    background: rgba(0, 0, 0, .2); 
    position: fixed;  
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-center: flex-start;
    color: white;
  `;
  const AppName = styled.div`
    margin: 0 25px;
    font-size: 1.2rem;
    letter-spacing: 2px;`

  return (
    <HeaderControl>
      <AppName>Blue Planet Dive Resort</AppName>
      <Menu></Menu>
    </HeaderControl>

  )
}

export default Header;
