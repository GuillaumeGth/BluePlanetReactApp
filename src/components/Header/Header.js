import React, { useEffect } from 'react';
import Menu from "./Menu";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import Text from 'react-text';
import FlexContainer from '../FlexContainer';

const Header = (props) =>{

  const AppName = styled.div`
    margin: 0 25px;
    font-size: 1.2rem;
    letter-spacing: 2px;`;

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
    transition: .5s;

    &.scrolled {      
      background: white !important;
      box-shadow: 0 15px 40px -12px rgba(0, 0, 0, 0.45);
      & .menu-item-label,
        ${AppName},
        .anchor-icon {
        color: #252627 !important;
      }
    }
  `;

  useEffect(() => {
    window.addEventListener('scroll', scrollhandler)
  });
  const getNewLang = () => {
    return props.lang === 'en' ? 'fr' : 'en'
  }

  const getFlag = () => {
    return '/img/icon/flags/' + getNewLang() + '.svg'; 
  }
  
  const scrollhandler = (e) => {
    var top = document.documentElement.scrollTop,
        el = headerElement.current;
    if(el){
      if(top > 1200){
        el.classList.add('scrolled');
      }
      else{
        el.classList.remove('scrolled');
      }
    }
  }
  const headerElement = React.createRef();
  const Flag = styled.img`width: 30px; cursor: pointer !important;
  margin: 0 150px;`;
  const LangContainer = styled(FlexContainer)`
    margin: 0 150px !important;`;

  const flagClickHandler = () => {
    props.langClickHandler(getNewLang());
  }

  return (
    <HeaderControl ref={headerElement}>
      <AppName>Blue Planet Dive Resort</AppName>
      <FontAwesomeIcon className="anchor-icon" icon={faAnchor} size="lg" />
      <LangContainer direction="row"><Flag onClick={flagClickHandler} src={getFlag()} alt="language flag" /></LangContainer>
      <Menu></Menu>
    </HeaderControl>

  )
}

export default Header;
