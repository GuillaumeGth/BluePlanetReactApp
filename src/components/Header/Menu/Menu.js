import React, { useState } from "react";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Menu = props => {
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

  const [active, setActive] = useState(useLocation().pathname.substring(1));
  const clickHandler = e => {
    window.scrollTo(0, 0);
    setActive(e);
    props.onRedirection(e !== "");
  };
  return (
    <NavControl className="nav-wrap" role="navigation">
      <MenuControl className="header-nav">
        <MenuItem
          active={active === ""}
          onClick={clickHandler}
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
        <MenuItem
          active={active === "gallery"}
          onClick={clickHandler}
          link="gallery"
          text="galleryMenu"
        ></MenuItem>
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
      </MenuControl>
    </NavControl>
  );
};

export default Menu;
