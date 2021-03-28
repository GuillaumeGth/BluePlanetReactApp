import React, { FunctionComponent, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderControl } from "../../style";
import { isMobile } from "react-device-detect";
import Text from "react-text";
type Props = {
  visible?: boolean,
  onClick: Function,
  link: string,
  active?: boolean,
  text: string
}
const MenuItem: FunctionComponent<Props> = ({visible = true, onClick, link, active, text, children}) => {
  const MenuItemControl = styled.li`
    padding: 0 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active {
      background: #636363;
      color: white;
    }
    ${HeaderControl}.transparent & {
      background: transparent !important;
    }
    ${HeaderControl}.transparent.scrolled &.active {
      background: #636363 !important;
    }
    ${HeaderControl}.transparent.scrolled &.active>a>span {
      color: white !important;
    }
  `;

  const Underline = styled.div`
    transition: 0.6s;
    width: 0px;
    border-bottom: 1px solid white;
    padding: 2px 0;
    ${MenuItemControl}:hover & {
      width: 80%;
      opacity: 0.4;
    }
    ${HeaderControl}.scrolled & {
      border-color: #636363;
    }
    ${HeaderControl}.scrolled .active & {
      border-color: white;
    }
  `;

  const MenuItemLabelControl = styled.span`
    font-size: 1.4em;
    color: white;
    letter-spacing: 1px;
    text-decoration: none;
    white-space: nowrap;
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const clickHandler: MouseEventHandler<HTMLLIElement> = (event: React.MouseEvent): void => {
    if (isMobile) {
      var header = (event.target as Element)?.closest(".header"),
        hamburger = header?.querySelector(".hamburger-menu");
      header?.classList.toggle("open");
      hamburger?.classList.toggle("open");
    }
    onClick(link, event);
  };
  if (!visible) return <></>;
  return (
    <MenuItemControl
      className={`menu-item ${active ? "active" : ""}`}
      onClick={clickHandler}
      data-path={link}
    >
      <StyledLink to={link}>
        <MenuItemLabelControl className="menu-item-label">
          <Text id={text}></Text>
        </MenuItemLabelControl>
        <Underline className="underline"></Underline>
      </StyledLink>
      {children}
    </MenuItemControl>
  );
};

export default MenuItem;
