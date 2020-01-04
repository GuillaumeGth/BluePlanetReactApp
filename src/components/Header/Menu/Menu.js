import React from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';

const Menu = (propr) =>{
  const MenuControl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 50px;
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
        <MenuItem link="" text="Home"></MenuItem>
        <MenuItem link="diving" text="Diving"></MenuItem>
        <MenuItem link="bira" text="Bira"></MenuItem>
        
        <MenuItem link="gallery" text="Gallery"></MenuItem>
        <MenuItem link="prices" text="Prices"></MenuItem>
        <MenuItem link="accommodation" text="Accomodations"></MenuItem>
        <MenuItem link="contactus" text="Contact Us"></MenuItem>
        <MenuItem link="biraproject" text="The Bira Project"></MenuItem>
      </MenuControl>
    </NavControl>
  )
}

export default Menu;