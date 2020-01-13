import React from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Menu = (propr) =>{
  const MenuControl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;

  const NavControl = styled.nav`
    margin: 0;
    margin-left: auto;
    height: 4em;    
    justify-content: center;
    justify-self: flex-end;
    align-items: center; 
    display: flex;
    flex-direction: row;
    padding: 0 1em;
  `;
  return (
    <NavControl className="nav-wrap" role="navigation">
      <MenuControl className="header-nav">
        <MenuItem link="" text="homeMenu"></MenuItem>
        <MenuItem link="diving" text="diveMenu"></MenuItem>
        <MenuItem link="bira" text="biraMenu"></MenuItem>
        <MenuItem hide={isBrowser} link="gallery" text="galleryMenu"></MenuItem>
        <MenuItem link="prices" text="pricesMenu"></MenuItem>
        <MenuItem link="accommodation" text="accommodationMenu"></MenuItem>
        <MenuItem link="contactus" text="contactMenu"></MenuItem>
        <MenuItem link="biraproject" text="biraProjectMenu"></MenuItem>
      </MenuControl>
    </NavControl>
  )
}

export default Menu;