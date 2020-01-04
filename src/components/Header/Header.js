import React, { useEffect } from 'react';
import Menu from "./Menu";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'

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
  //const [scrolled, setScrolled] = useState(false);

  const scrollhandler = (e) => {
    var top = document.documentElement.scrollTop,
        el = headerElement.current;
    if(top > 1200){
      el.classList.add('scrolled');
    }
    else{
      el.classList.remove('scrolled');
    }
  }
  const headerElement = React.createRef();
  return (
    <HeaderControl 
    ref={headerElement}>
      <AppName>Blue Planet Dive Resort</AppName>
      <FontAwesomeIcon className="anchor-icon" icon={faAnchor} size="lg" />
      <Menu></Menu>
    </HeaderControl>

  )
}

export default Header;
