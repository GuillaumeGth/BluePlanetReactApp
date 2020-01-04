import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const MenuItem = (props) =>{
  const MenuItemControl = styled.li`
    margin: 0 15px;  
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Underline = styled.div`
  transition: .6s;
  width: 0px;
  border-bottom: 1px solid white;
  ${MenuItemControl}:hover &{
    width: 100%;
  }`;
  const MenuItemLabelControl = styled.span`
    color: white;
    font-size: 1.1em;
    letter-spacing: 1px;
    text-decoration: none;
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;`;

  return (
    <MenuItemControl>
      <StyledLink to={props.link}>
        <MenuItemLabelControl className="menu-item-label">{ props.text }</MenuItemLabelControl>
        <Underline></Underline>
      </StyledLink>
      { props.children }
    </MenuItemControl>
  )
}

export default MenuItem;
