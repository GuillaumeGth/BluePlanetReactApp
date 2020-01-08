import React, { useEffect } from 'react';
import Menu from "./Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import {AppName, HeaderControl, Flag, LangContainer} from './style'

const Header = (props) =>{

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
