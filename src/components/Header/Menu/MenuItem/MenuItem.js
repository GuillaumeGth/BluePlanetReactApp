import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Text from "react-text";
import { HeaderControl } from "../../style";
import { isMobile } from "react-device-detect";

const MenuItem = (props) => {
  let visible = props.visible;
  visible = typeof visible === "undefined" ? true : visible;
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

  const clickHandler = (e) => {
    if (isMobile) {
      var header = e.target.closest(".header"),
        hamburger = header.querySelector(".hamburger-menu");
      header.classList.toggle("open");
      hamburger.classList.toggle("open");
    }
    props.onClick(props.link);
  };
  if (!visible) return <></>;
  return (
    <MenuItemControl
      className={`menu-item ${props.active ? "active" : ""}`}
      onClick={clickHandler}
      data-path={props.link}
    >
      <StyledLink to={props.link}>
        <MenuItemLabelControl className="menu-item-label">
          <Text id={props.text}></Text>
        </MenuItemLabelControl>
        <Underline className="underline"></Underline>
      </StyledLink>
      {props.children}
    </MenuItemControl>
  );
};

export default MenuItem;
