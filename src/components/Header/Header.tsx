import React, { FunctionComponent, MouseEventHandler, useEffect, useState } from "react";
import Menu from "./Menu";
import NewMenu from "./NewMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { AppName, HeaderControl, Flag, AppLink, SocialNetwork } from "./style";
import FlexContainer from "../Layout/FlexContainer";
import { useLocation } from "react-router-dom";
import { isBrowser } from "react-device-detect";
type Props = {
  lang: string, 
  langClickHandler: Function
}
const Header: FunctionComponent<Props> = ({lang, langClickHandler}) => {
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", scrollhandler);
    _setFilled(location.pathname.substring(1));
  });

  const scrollhandler = () => {
    var top = document.documentElement.scrollTop,
      el = headerElement.current;
    if (el) {
      if (top > 1150) {
        el.classList.add("scrolled");
      } else {
        el.classList.remove("scrolled");
      }
    }
  };

  const headerElement = React.createRef<Element>();

  const [filled, _setFilled] = useState<string>('');
  const redirectionHandler = (e: string) => {
    _setFilled(e);
  };
  return (
    <>
      <NewMenu lang={lang} langClickHandler={langClickHandler} onRedirection={redirectionHandler}>
      </NewMenu>
    </>
  );
};

export default Header;
