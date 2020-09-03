import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  AppName,
  HeaderControl,
  Flag,
  LangContainer,
  AppLink,
  SocialNetwork,
} from "./style";
import { useLocation } from "react-router-dom";
import { isBrowser } from "react-device-detect";

const Header = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", scrollhandler);
    _setFilled(location.pathname.substring(1) !== "");
  });

  const getNewLang = () => {
    return props.lang === "en" ? "fr" : "en";
  };

  const getFlag = () => {
    return "/img/icon/flags/" + getNewLang() + ".svg";
  };

  const scrollhandler = (e) => {
    var top = document.documentElement.scrollTop,
      el = headerElement.current;
    if (el) {
      if (top > 1200) {
        el.classList.add("scrolled");
      } else {
        el.classList.remove("scrolled");
      }
    }
  };

  const headerElement = React.createRef();

  const flagClickHandler = () => {
    props.langClickHandler(getNewLang());
  };
  const [filled, _setFilled] = useState(null);
  const redirectionHandler = (e) => {
    _setFilled(e);
  };
  const hamburgerClickHandler = (e) => {
    const target = e.target,
      hamburger = target.closest(".hamburger-menu"),
      header = target.closest(".header");
    hamburger.classList.toggle("open");
    header.classList.toggle("open");
  };
  return (
    <HeaderControl
      className={`header ${filled ? "filled" : "transparent"}`}
      ref={headerElement}
    >
      {isBrowser ? (
        <>
          <AppLink to="/">
            <AppName>Blue Planet Dive Resort</AppName>
          </AppLink>
          <FontAwesomeIcon className="anchor-icon" icon={faAnchor} size="lg" />
        </>
      ) : (
        <div className="header-mobile">
          <div
            onClick={hamburgerClickHandler}
            className="mobile-menu-toggle hamburger-menu"
          >
            <span className="menu-item"></span>
            <span className="menu-item"></span>
            <span className="menu-item"></span>
          </div>
          <div className="social-network-mobile">
            <a
              href="https://www.facebook.com/BluePlanetDiveResort/"
              target="blank"
            >
              <FontAwesomeIcon
                className="anchor-icon"
                icon={faFacebook}
                size="2x"
              />
            </a>
            <a
              href="https://www.instagram.com/blueplanetdiveresort_"
              target="blank"
            >
              <FontAwesomeIcon
                className="anchor-icon"
                icon={faInstagram}
                size="2x"
              />
            </a>
          </div>
        </div>
      )}

      <LangContainer id="test" visible={isBrowser} direction="row">
        <Flag onClick={flagClickHandler} src={getFlag()} alt="language flag" />
      </LangContainer>
      <Menu onRedirection={redirectionHandler}></Menu>
      {isBrowser ? (
        <SocialNetwork>
          <a
            href="https://www.instagram.com/blueplanetdiveresort_"
            target="blank"
          >
            <img alt="instagram" src="img/icon/insta.png" width="36px" />
          </a>
          <a
            href="https://www.facebook.com/BluePlanetDiveResort/"
            target="blank"
          >
            <img alt="facebook" src="img/icon/fb.png" width="36px" />
          </a>
        </SocialNetwork>
      ) : null}
    </HeaderControl>
  );
};

export default Header;
