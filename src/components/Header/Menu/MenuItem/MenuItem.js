import React, {ref} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import Text from 'react-text';
import { createStore } from 'redux'
import ReduxApp from '../../../../Redux/reducers';
import {setActiveMenu} from '../../../../Redux/actions';

const MenuItem = (props) =>{
  const MenuItemControl = styled.li`
    padding: 0 15px;  
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active{
      background: #636363;
      color: white;
    }
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

  const clickHandler = (e) => {
    props.onClick(props.link);
  }

  return (
    <MenuItemControl className={`menu-item ${props.active ? 'active' : null}`} onClick={clickHandler} data-path={props.link}>
      <StyledLink to={props.link}>
        <MenuItemLabelControl className="menu-item-label"><Text id={props.text}></Text></MenuItemLabelControl>
        <Underline></Underline>
      </StyledLink>
      { props.children }
    </MenuItemControl>
  )
}

export default MenuItem;
