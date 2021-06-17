import React, { FunctionComponent, MouseEventHandler, useState } from "react";
import "./style.css";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "../Menu/MenuItem";
import { useLocation } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  onRedirection: Function,
  lang: string, 
  langClickHandler: Function
}
const NewMenu: FunctionComponent<Props>= ({onRedirection, lang, langClickHandler}) => {
  const flagClickHandler = () => {
    langClickHandler(getNewLang());
  };
  const toggleMenu = () => {
    const target = document.getElementById(document.getElementById("nav-toggler")?.getAttribute("data-target") || "");
    target?.classList.toggle("hidden"); 
  }
  const [active, setActive] = useState(useLocation().pathname.substring(1));
  const BurgerClickHandler: MouseEventHandler<HTMLButtonElement> = () => {    
    toggleMenu();       
  }
  const clickHandler = (link: string, e: React.MouseEvent) => {
    window.scrollTo(0, 0);
    setActive(link);
    onRedirection(e);
    toggleMenu();
  };
  const Flag = styled.img`
    width: 30px;
    cursor: pointer !important;
    margin: 0 2¸0px;
  `;
  const Nav = styled.nav`
    max-width: 100vw;
  `;
  const getNewLang = () => {
    return lang === "en" ? "fr" : "en";
  };

  const getFlag = () => {
    return "/img/icon/flags/" + getNewLang() + ".svg";
  };
  return (
    <Nav className="shadow-lg fixed z-50 w-full new-menu flex items-center bg-white p-3 flex-wrap">
      <Link onClick={()=>{setActive("")}} to="/" className="p-2 mr-4 inline-flex items-center">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current h-8 w-8 mr-2"
        >
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          />
        </svg>
        <span className="text-xl font-bold uppercase tracking-wide"
          >Blue Planet Dive Resort</span>
      </Link>
      {isBrowser 
      && <Flag onClick={flagClickHandler} src={getFlag()} alt="language flag" style={{margin: "0 10px"}}/>} 
      <button
        id="nav-toggler"
        onClick={BurgerClickHandler}
        className="nav-toggler inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="navigation"
      >
        <MenuIcon />
      </button>
      <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div
          className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
        >
        <MenuItem
          active={active === ""}
          onClick={clickHandler}
          visible={isMobile}
          link=""
          text="homeMenu"
        ></MenuItem>
        <MenuItem
          active={active === "diving"}
          onClick={clickHandler}
          link="diving"
          text="diveMenu"
        ></MenuItem>
        <MenuItem
          active={active === "bira"}
          onClick={clickHandler}
          link="bira"
          text="biraMenu"
        ></MenuItem>
        {/* <MenuItem
          active={active === "gallery"}
          onClick={clickHandler}
          link="gallery"
          visible={isMobile}
          text="galleryMenu"
        ></MenuItem> */}
        <MenuItem
          active={active === "prices"}
          onClick={clickHandler}
          link="prices"
          text="pricesMenu"
        ></MenuItem>
        <MenuItem
          active={active === "accommodation"}
          onClick={clickHandler}
          link="accommodation"
          text="accommodationMenu"
        ></MenuItem>
        <MenuItem
          active={active === "contact"}
          onClick={clickHandler}
          link="contact"
          text="contactMenu"
        ></MenuItem>
        <MenuItem
          active={active === "biraproject"}
          onClick={clickHandler}
          link="biraproject"
          text="biraProjectMenu"
        ></MenuItem>
        <MenuItem
          active={active === "aboutus"}
          onClick={clickHandler}
          link="aboutus"
          text="aboutUsMenu"
        ></MenuItem>
        <MenuItem
          active={active === "insurance"}
          onClick={clickHandler}
          link="insurance"
          text="insuranceMenu"
        ></MenuItem>
        </div>
      </div>
    </Nav>
  );
};

export default NewMenu;
